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
          content: `Is this a real eFed (e-federation / CAW wrestling promotion) show video? Title: "${title}" | Channel: "${channel}". Reply with only JSON: {"approved": true/false, "reason": "one sentence"}`
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
