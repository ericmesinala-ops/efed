export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, channel } = req.body;
  if (!title || !channel) return res.status(400).json({ error: 'Missing title or channel' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 100,
        messages: [{
          role: 'user',
        content: `You are screening YouTube video submissions for an eFed (electronic federation) wrestling community platform. eFeds are fan-made CAW (Create-A-Wrestler) wrestling shows made in video games like WWE 2K, Fire Pro Wrestling, or similar.

Title: "${title}"
Channel: "${channel}"

Is this a real eFed/CAW wrestling show? Be STRICT. Reject anything that is not clearly a fan-made CAW wrestling show — this includes real wrestling (WWE, AEW, NJPW etc), reaction videos, podcasts, reviews, comedy, gaming content, music, vlogs, or anything unrelated to eFed/CAW wrestling.

Reply with ONLY valid JSON, no extra text: {"approved": true/false, "reason": "one sentence"}`
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);
    res.status(200).json(result);
  } catch (e) {
    // Fail open — don't block submissions on API error
    res.status(200).json({ approved: true, reason: 'Screening unavailable' });
  }
}
