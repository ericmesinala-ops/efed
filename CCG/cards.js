window.CARDS={
 "wr": [
  {
   "fx": [
    {
     "k": "pwLimit",
     "n": 5
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "play",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain $2. Your Power Card limit is 5 in ths match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/derrick-maximus-d08b831161.jpg",
   "n": "Derrick Maximus",
   "atk": 7,
   "def": 6,
   "vp": 3,
   "cost": 8,
   "win": 4,
   "promo": 3,
   "tags": [
    "Showman"
   ],
   "id": 1,
   "spec": "Showman",
   "align": "heel",
   "gimmick": "Referee",
   "rq": "",
   "tr": "spo",
   "finN": "Max Odds",
   "rl": 0,
   "finA": 5,
   "finD": 5,
   "stI": "“You never learn, do you?”",
   "stW": "“You’re the last person I expected to show up. Don’t expect me to return the favor.”",
   "stP": "\"If you’ve got a problem with me, anytime, anywhere, any fed. I’m sick of the talking, so either show up and do something about it or shut the fuck up.\"",
   "stF": "\"Look at you {opponent}. All that confidence disappeared real quick.\"",
   "nick": "Bad Attitude",
   "allDone": true,
   "sp": "2{cash}{sep}5{limit}{powercard}"
  },
  {
   "fx": [
    {
     "k": "atk",
     "n": 1
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "align",
       "n": 1,
       "v": "heel",
       "who": "opp"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain +1 Attack. When facing a Heel, gain +2 Defense",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/kyle-vance-e61f9ee9fa.jpg",
   "n": "Kyle Vance",
   "atk": 5,
   "def": 7,
   "vp": 4,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "High-Flyer"
   ],
   "id": 2,
   "spec": "High-Flyer",
   "gimmick": "Fan Favorite",
   "align": "face",
   "tr": "fan",
   "finN": "Redline Elbow",
   "finA": 5,
   "finD": 5,
   "allDone": true,
   "stI": "\"You looked like you could use a little backup.\"",
   "stW": "\"Okay, I owe you one. Just don’t get used to hearing me say that.\"",
   "stP": "\"Keep sleeping on me if you want, because I’m done trying to prove myself to people who already made up their minds. When that bell rings, I’m gonna hit harder, move faster, and make damn sure nobody forgets my name again.\"",
   "stF": "\"That’s your game face? Seriously?\"",
   "sp": "{atk} {sep} {opp}{heel}:2{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "swap",
       "n": 1,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "steal",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "v": "Weapon"
      }
     ]
    }
   ],
   "txt": "Roles are switched in this match. When played, remove any attached Weapon Power Card your opponent has and attach it to yours.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/chris-jackson-4bf8dd6b0d.jpg",
   "n": "Chris Jackson",
   "atk": 6,
   "def": 7,
   "vp": 2,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "Striker"
   ],
   "id": 3,
   "spec": "Striker",
   "gimmick": "Backstabber",
   "align": "heel",
   "tr": "rat",
   "finN": "Bad Vibes",
   "finA": 5,
   "finD": 5,
   "stI": "\"You should’ve known I’d get involved.\"",
   "stW": "\"I didn’t ask for your help... at all.\"",
   "stP": "\"I don’t care who thinks they’ve got me figured out. Step in front of me and I’ll hit you so hard you’ll forget every damn plan you had coming in.\"",
   "stF": "\"You came all this way just to make my night easier.\"",
   "allDone": true,
   "sp": "{swap}{sep}{weapon}{steal}{place}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "power",
       "n": 1,
       "not": true,
       "v": "Any",
       "who": "me",
       "op": "ge"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 5,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "stat",
       "n": -2,
       "who": "opp",
       "k": "def"
      }
     ]
    }
   ],
   "txt": "If no Power Card is attached to this card, gain +5 Attack and -2 Defense.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/rey-de-lucha-c6c141dc4a.jpg",
   "n": "Rey de Lucha",
   "atk": 7,
   "def": 7,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Luchador"
   ],
   "id": 4,
   "spec": "Luchador",
   "gimmick": "Mask",
   "align": "face",
   "tr": "rat",
   "finN": "Burning Overdrive",
   "finA": 5,
   "finD": 5,
   "stI": "\"Be careful with that guy {winner}. He injured many people already, including myself.\"",
   "stW": "\"{helper}, thank you.  But I had it handled.\"",
   "stP": "\"Esta noche, no vengo a hablar — vengo a pelear. Step into this ring conmigo, and I’ll show you why el Rey never backs down from anybody.\"",
   "stF": "\"Mírame bien. You still think this is your moment? Then come take it from el Rey.\"",
   "allDone": true,
   "sp": "X{powercard}:5{atk}-2{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "flip",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "nx": "2"
      }
     ]
    }
   ],
   "txt": "If you win this match, you may chose to lose to gain 2 VP and a temporary +2 Attack on your next match",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/shibata-reyes-63eecf3ef4.jpg",
   "n": "Shibata Reyes",
   "atk": 8,
   "def": 8,
   "vp": 3,
   "cost": 10,
   "win": 5,
   "promo": 3,
   "tags": [
    "Strategist"
   ],
   "id": 5,
   "spec": "Strategist",
   "align": "heel",
   "gimmick": "Faction Leader",
   "tr": "spo",
   "finN": "Street Justice",
   "finA": 5,
   "finD": 5,
   "stI": "\"You did your part. Now prove you can do it without me.\"",
   "stW": "\"Your help only boosted your ego. Nothing you did would've changed the outcome.\"",
   "stP": "\"I built my name by outlasting everybody who swore they were next. If you want my spot, come fucking take it — and be ready to lose everything trying.\"",
   "stF": "\"Look at you. Part brave, part stupid. You really think you have a chance? I control how this goes {opponent}.\"",
   "allDone": true,
   "sp": "{win}:{flip}{right}2{vp}+2{atk}{temporary}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "vp",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain +1 VP if you win this match.",
   "img": "https://pub-9749fac315074c7393c7693a829dd5b9.r2.dev/cards/st-peter-reyes-1791889886680.jpg",
   "n": "St.Peter Reyes",
   "atk": 8,
   "def": 7,
   "vp": 3,
   "cost": 10,
   "win": 5,
   "promo": 4,
   "tags": [
    "Rudo"
   ],
   "id": 6,
   "spec": "Rudo",
   "align": "heel",
   "gimmick": "Mask",
   "tr": "spo",
   "finN": "Perrero Powerbomb",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were losing control of that match. I just reminded everyone who really runs things.\"",
   "stW": "\"Don’t expect gratitude. You helped because it benefited you too.\"",
   "stP": "\"I’ve heard every excuse, every threat, every promise that somebody’s coming for me. So stop talking, step up, and find out how fast your confidence disappears.\"",
   "stF": "\"It's time I put you back to catering.\"",
   "sn": "Reyes",
   "allDone": true,
   "sp": "{win}:{vp}"
  },
  {
   "fx": [
    {
     "k": "vp",
     "n": 1,
     "tag": "Xtreme"
    }
   ],
   "rules": [],
   "txt": "End Game: 1 VP per Xtreme Tag in your deck.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/x-1e879e452b.jpg",
   "n": "X",
   "atk": 7,
   "def": 8,
   "vp": 1,
   "cost": 9,
   "win": 5,
   "promo": 4,
   "tags": [
    "Hardcore"
   ],
   "id": 7,
   "spec": "Face",
   "align": "face",
   "gimmick": "Xtreme",
   "tr": "fan",
   "finN": "Change of Heart",
   "finA": 5,
   "finD": 5,
   "stI": "\"I’m done watching you screw this up.\"",
   "stW": "\"I had the match handled {helper}. Now everyone’s gonna act like I needed you.\"",
   "stP": "\"I don’t give a damn who you are, what you’ve won, or who thinks you’re untouchable. Get in my way, and I’ll make sure you remember exactly why they calll me The Bad Xample.\"",
   "stF": "\"You look nervous, {opponent}. What happened to the tough guy, huh?\"",
   "allDone": true,
   "sp": "{endgame}:{vp}/Xtreme Tags"
  },
  {
   "fx": [
    {
     "k": "pwAtk",
     "n": 2
    }
   ],
   "rules": [],
   "txt": "All Power Cards attached to this card that grant an attack bonus gain an additional +2 Attack each",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/wallace-mays-56e4b17681.jpg",
   "n": "Wallace Mays",
   "atk": 8,
   "def": 7,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Technical"
   ],
   "id": 8,
   "spec": "Technical",
   "align": "heel",
   "gimmick": "Metal",
   "tr": "rat",
   "finN": "Descending Angel",
   "finA": 5,
   "finD": 5,
   "stW": "\"Next time, stay the fuck out of it. I don’t need anyone questioning my win.\"",
   "stI": "\"Somebody had to clean it up.\"",
   "stP": "\"Everybody talks like they’re the one until they’re standing across from me. Then the bell rings, the excuses disappear, and they find out exactly where they rank.\"",
   "stF": "\"You look really pissed right now, man. Stay mad.\"",
   "allDone": true,
   "sp": "{attach}{atk}{right}+2{atk}/{powercard}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    },
    {
     "mode": "all",
     "when": "lose",
     "if": [],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "discardMine",
       "n": 1,
       "ifPrev": true,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win, draw 1 Power Card at no cost. If you lose, draw 1 Power Card at no cost and discard 1.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/kayden-kartier-hendrix-539f2055af.jpg",
   "n": "Kayden Kartier Hendrix",
   "atk": 6,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 5,
   "promo": 2,
   "tags": [
    "Technical"
   ],
   "id": 9,
   "spec": "Technical",
   "align": "heel",
   "gimmick": "Agressor",
   "tr": "fan",
   "finN": "Kritical Blessing",
   "finA": 5,
   "finD": 5,
   "stI": "\"I’m not watching you waste an opportunity again {winner}.\"",
   "stW": "\"Appreciate the assist man, but don’t get it twisted. I was walking out with this win either way.\"",
   "stP": "\"Everybody wants a shot until the moment they actually get one. Step in front of me, and I’ll show you why wanting it and being ready for it are two completely different things.\"",
   "stF": "\"Don’t worry. I’ll make this quick.\"",
   "allDone": true,
   "sp": "{win}:{draw}{powercard}{free}{right}{lose}:{discard}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "resolve",
     "if": [],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "After resolving this match, draw a Power Card and add it to your hand at no cost.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/johnny-hazard-b3f8b24d7d.jpg",
   "n": "Johnny Hazard",
   "atk": 7,
   "def": 4,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 3,
   "tags": [
    "Striker"
   ],
   "id": 10,
   "align": "face",
   "gimmick": "Chaos",
   "tr": "spo",
   "finN": "The Devil Trigger",
   "finA": 5,
   "finD": 5,
   "stI": "\"Relax, I just saved you from embarrassment.\"",
   "stW": "\"Don’t start thinking we’re even now. You helped me because being on my side is the smartest thing you’ve done all night.\"",
   "stP": "\"Look at me, then look at everybody else trying to stand where I stand. There are levels to this shit, and most of you are nowhere close to mine.\"",
   "stF": "\"You're the guy they sent me? Man, this is gonna be easier than I thought.\"",
   "allDone": true,
   "sp": "{match}:{draw}{powercard}{free}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "atkHigher",
       "n": 1,
       "v": "",
       "who": "opp"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "stat",
       "n": 1,
       "who": "opp",
       "k": "def"
      }
     ]
    }
   ],
   "txt": "If your opponent has a higher attack, gain +2 Attack and +1 Defense",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/justin-prince-d869bf0b33.jpg",
   "n": "Justin Prince",
   "atk": 6,
   "def": 5,
   "vp": 1,
   "cost": 6,
   "win": 5,
   "promo": 2,
   "tags": [
    "Technician"
   ],
   "id": 11,
   "gimmick": "Comeback",
   "align": "face",
   "tr": "fan",
   "finN": "Prince's Knee",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were taking too long. I figured I’d end the problem for you.\"",
   "stW": "\"Don’t mistake your involvement for importance. I was always leaving with the win.\"",
   "stP": "\"Most of you walk into this ring hoping something goes your way. I walk in already knowing exactly how this ends, and usually it ends with somebody regretting they stood across from me.\"",
   "stF": "\"Hey {opponent}, you really walked out here thinking this was a good idea?\"",
   "allDone": true,
   "sp": "{opp}↑{atk}:+2{atk}+1{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [
      {
       "c": "power",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "Weapon"
      }
     ],
     "do": [
      {
       "a": "injure",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win using a Weapon Power Card, place an Injury Token on your opponent.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/ryan-warzone-dbf3e87b76.jpg",
   "n": "Ryan Warzone",
   "atk": 7,
   "def": 5,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 3,
   "tags": [
    "Hardcore"
   ],
   "id": 12,
   "align": "heel",
   "gimmick": "Xtreme",
   "tr": "spo",
   "finN": "Sanity Driver",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were making this way too complicated {winner}. Sometimes you just gotta hurt somebody.\"",
   "stW": "\"Next time, stay the hell out of my match. I didn’t need you. So stay the fuck away!\"",
   "stP": "\"I’m not here for respect, rankings, or some feel-good bullshit. I’m here to drag somebody into deep water, make the match ugly, and see who still wants to fight when it stops being fun.\"",
   "stF": "\"Nothing personal. I just really want to hit you.\"",
   "allDone": true,
   "sp": "{weapon}{win}:{place}{injury}{opp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "atkHigher",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": ""
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "def"
      }
     ]
    }
   ],
   "txt": "Gain +2 Attack and +2 Defense if your opponent has a lower Attack.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/william-kennedy-ec62a71cde.jpg",
   "n": "William Kennedy",
   "atk": 8,
   "def": 7,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 4,
   "tags": [
    "Powerhouse"
   ],
   "id": 13,
   "align": "heel",
   "gimmick": "Giant",
   "tr": "rat",
   "finN": "Death Sentence",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were struggling. I stepped in because watching that shit was getting embarrassing.\"",
   "stW": "\"Don’t stand there expecting a thank you, {helper}. I was finishing that match, and here you are trying to feel important again.\"",
   "stP": "\"I don’t talk tough. I walk in, wreck the mood, take over the room, and leave somebody else with a problem they’re gonna be thinking about all week. I’m not here to make friends, clean things up, or give anybody a good night. If I’m in the building, somebody’s leaving pissed off.\"",
   "stF": "\"You’ve got guts {opponent}. Not enough, but you’ve got guts.\"",
   "sn": "Will",
   "allDone": true,
   "sp": "{opp}↓{atk}: +2{atk}+2{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "resolve",
     "if": [],
     "do": [
      {
       "a": "cashOpp",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "matchPw",
       "v": "",
       "d": 2
      }
     ]
    }
   ],
   "txt": "Gain $1 for each Power Cards attached to your opponent.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/kendrick-montana-e8124204ae.jpg",
   "n": "Kendrick Montana",
   "atk": 7,
   "def": 5,
   "vp": 3,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Striker"
   ],
   "id": 14,
   "align": "heel",
   "gimmick": "Rogue",
   "tr": "spo",
   "finN": "From the Heavens",
   "finA": 5,
   "finD": 5,
   "stI": "\"Don’t get it twisted. I’m not doing this for you {winner}. I just wanted a reason to get my hands on him.\"",
   "stW": "\"You helped me win. Fine. Just don’t start thinking that means I owe you anything.\"",
   "stP": "\"I watch everything. One mistake, one bad decision, one opening.  That’s all I need. While everybody else is waiting for their turn, I’m already taking mine.\"",
   "stF": "\"You’re standing there waiting for your chance. That’s the difference between us {opponent}.  I already took mine.\"",
   "allDone": true,
   "sp": "{cash}/{attach}{powercard}{opp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "discardMine",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "opt": true
      },
      {
       "a": "cash",
       "n": 3,
       "ifPrev": true,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "discard",
       "n": 1,
       "who": "last",
       "k": "atk",
       "ifPrev": true
      }
     ]
    }
   ],
   "txt": "You may discard one of your Power Card in hand to gain $3. If you do this, discard your opponent's recent attached power card.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/motor-hunter-8eb2c6deba.jpg",
   "n": "Motor Hunter",
   "atk": 6,
   "def": 8,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 2,
   "tags": [
    "Powerhouse"
   ],
   "id": 15,
   "align": "heel",
   "gimmick": "Giant",
   "tr": "spo",
   "finN": "Final Turn",
   "finA": 5,
   "finD": 5,
   "stI": "\"You’re lucky I hate him more than I care about what you do.\"",
   "stW": "\"Next time, don’t show up. If you do, I might mistake you for my opponent and maul you.\"",
   "stP": "\"I’ve been around too long to care who likes me and who doesn’t. You wanna take something from me, come try it, but don’t act surprised when I put you flat on your back.\"",
   "stF": "\"You seem nice. Shame about what’s about to happen.\"",
   "allDone": true,
   "sp": "{discard}{powercard}:3{cash}{right}{discard}{attach}{opp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [
      {
       "c": "hand",
       "who": "me",
       "n": 3,
       "op": "ge",
       "v": ""
      }
     ],
     "do": [
      {
       "a": "vp",
       "n": 3,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "End Game: If you have at least 3 Power Cards in hand, gain +3VP",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/damian-rage-157a78cac7.jpg",
   "n": "Damian Rage",
   "atk": 6,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "Tag-Team"
   ],
   "id": 16,
   "gimmick": "Metal",
   "align": "heel",
   "tr": "rat",
   "finN": "Lucifer's Downfall",
   "finA": 5,
   "finD": 5,
   "stI": "\"I always have to do it for you huh? It's becoming pathetic.\"",
   "stW": "\"Who told you to show up and be my hero?\"",
   "stP": "\"Yeah, yeah, yeah I know you hate me. So fucking what? I'm not even... why am I even talking to you? ...What's that fucking smell?? Do you guys take showers around here? Holy fuck!\"",
   "stF": "\"Oh, this is gonna be fun.\"",
   "allDone": true,
   "sp": "{endgame}:3{powercard}{hand}{right}3{vp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "income",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "t": "rat"
      }
     ]
    },
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "hype",
       "who": "opp",
       "n": 1,
       "op": "ge",
       "v": ""
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "both"
      }
     ]
    }
   ],
   "txt": "Gain Ticket Income. Increase both your Attack and Defense by 2 if your opponent has a Hype Token in this match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/alexa-rivera-aaf4347fd8.jpg",
   "n": "Alexa Rivera",
   "atk": 7,
   "def": 7,
   "vp": 1,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Powerhouse"
   ],
   "id": 17,
   "align": "face",
   "gimmick": "Strongman",
   "tr": "spo",
   "stI": "\"You were getting jumped. I evened the odds. Now finish it.\"",
   "stW": "\"I appreciate it, but next time let me handle my own fight.\"",
   "stF": "\"{opponent}, you better bring everything you’ve got. I’m not slowing down for you.\"",
   "stP": "\"I’m not here to play tough or convince anybody I belong. Put somebody in front of me, ring the bell, and let them find out the hard way.\"",
   "finN": "Time's Up",
   "finA": 5,
   "finD": 5,
   "allDone": true,
   "sp": "{tickets}{sep}{hype}{opp}{right}+2{atk}+2{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "stat",
       "n": -2,
       "who": "opp",
       "k": "def",
       "tg": "opp"
      },
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "owned",
       "v": "",
       "d": 5,
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Your opponent loses -2 Defense. Gain 1 Hype Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/olly-jeffreys-92bb6647dc.jpg",
   "n": "Olly Jeffreys",
   "atk": 7,
   "def": 6,
   "vp": 3,
   "cost": 8,
   "win": 5,
   "promo": 3,
   "tags": [
    "Technical"
   ],
   "id": 18,
   "align": "face",
   "gimmick": "Backstabber",
   "tr": "rat",
   "finN": "Technical Advantage",
   "finA": 5,
   "finD": 5,
   "stI": "\"You left him exposed. I just finished the calculation. I usually don't do this so, it's your lucky day!\"",
   "stW": "\"Cool! Appreciate it. Didn’t need it, but I’m not gonna complain.\"",
   "stP": "\"People keep waiting for me to slip, slow down, or finally have a bad night. They’ve been waiting a long time, and I’m starting to think they’re gonna be disappointed.\"",
   "stF": "\"You talk too much. Let's get this over with.\"",
   "allDone": true,
   "sp": "{hype}{sep}-{def}{opp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "drawW",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win, draw a card from the Wrestler Deck. You may pay its cost and add it to your hand.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/tj-frost-a68ff00eac.jpg",
   "n": "TJ Frost",
   "atk": 7,
   "def": 8,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Grappler"
   ],
   "align": "heel",
   "gimmick": "Faction Leader",
   "tr": "spo",
   "finN": "Frostbite",
   "finA": 5,
   "finD": 5,
   "stI": "\"I’ve seen where this was going. I just finished it for you.\"",
   "stW": "\"You did what was necessary, {helper}. Nothing more.\"",
   "stP": "\"I say what I want, I do what I want, and somehow people still act surprised when I piss them off. That sounds like their problem, not mine.\"",
   "stF": "\"Keep that look on your face {opponent}. I want you confident right up until I take it away.\"",
   "allDone": true,
   "sp": "{win}:{draw}{wrestlercard}{right}{pay}/{discard}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "hypePer",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "per": "itfAll",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "Gain 2 Hype Tokens for each interference in this match.",
   "img": "",
   "n": "Anthony Ragone",
   "atk": 7,
   "def": 8,
   "vp": 3,
   "cost": 8,
   "win": 5,
   "promo": 3,
   "tags": [
    "Technical"
   ],
   "gimmick": "Rebel",
   "align": "face",
   "tr": "rat",
   "finN": "Sleeper Hold Nightmare",
   "finA": 5,
   "finD": 5,
   "stI": "\"You had the advantage and nearly let it slip. I simply made sure the opportunity wasn’t wasted, {winner}.\"",
   "stW": "\"I appreciate the assistance, {helper}. Just don’t mistake gratitude for dependence.\"",
   "stF": "\"You carry yourself with confidence. Now let’s see whether your performance justifies it.\"",
   "stP": "\"I’ve never believed in making noise simply to be noticed. Say what matters, do what you said you would do, and let the result speak for you.\""
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "train",
     "if": [],
     "do": [
      {
       "a": "vp",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "While this card is booked, everytime you train, you gain 1 VP.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/alonzo-miles-b81d4ff16e.jpg",
   "n": "Alonzo Miles",
   "atk": 6,
   "def": 8,
   "vp": 3,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Powerhouse"
   ],
   "align": "face",
   "gimmick": "Style",
   "tr": "spo",
   "finN": "Divine Intervention",
   "finA": 5,
   "finD": 5,
   "stI": "\"You had your chance. I saw what needed to be done, so I stepped in and did it.\"",
   "stW": "\"I appreciate the help {helper}. Just understand, I don't owe you one.\"",
   "stP": "\"I don’t move without purpose. I don’t swing just to make noise. When I step into that ring, somebody’s getting tested, somebody’s getting exposed, and by the end of it, everybody knows exactly what I came here to do.\"",
   "stF": "\"All that talking, and now you’re standing real quiet.\"",
   "allDone": true,
   "sp": "{book}:{hand}{train}{right}{vp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "hypePer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "pwMine",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "Gain 1 Hype Token for each Power Card attached to this Wrestler Card.",
   "img": "",
   "n": "Zachary Chen",
   "atk": 6,
   "def": 4,
   "vp": 3,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "High-Flyer"
   ],
   "gimmick": "Fan Favorite",
   "align": "face",
   "tr": "fan"
  },
  {
   "fx": [],
   "rules": [],
   "txt": "End of Show: You may place any amount of Hype Tokens available to this card.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/jayson-moreno-cde8e9e9fa.jpg",
   "n": "Jayson Moreno",
   "atk": 8,
   "def": 7,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Showman"
   ],
   "align": "face",
   "gimmick": "Fan Favorite",
   "tr": "rat",
   "stI": "\"Man, you were killing the whole vibe {winner}. Somebody had to make this interesting.\"",
   "stW": "\"Good timing. Now don’t stand there like we did this together.\"",
   "stF": "\"Take a second and enjoy this. Being this close to me is probably the highlight of your night.\"",
   "stP": "\"I don’t need to beg for attention. I walk through the curtain and people already know where to look. I am Jayson Moreno for crying out loud! The rest of you can fight over whatever spotlight I leave behind.\"",
   "finN": "Saint's Reckoning",
   "finA": 5,
   "finD": 5,
   "sp": "{endshow}:{place}?{hype}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "If you win, draw a Power Card for free and gain a Hype Token",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/chase-danger-a6556b369c.jpg",
   "n": "Chase Danger",
   "atk": 7,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "All-Rounder"
   ],
   "align": "face",
   "gimmick": "Aggressor",
   "tr": "spo",
   "finN": "Into the Flood Again",
   "finA": 5,
   "finD": 5,
   "stI": "\"You had your shot, {winner}. I wasn’t gonna stand there and watch you waste it.\"",
   "stW": "\"I’ll take the help. Just don’t start thinking that means I needed saving.\"",
   "stP": "\"I don’t need the room to believe in me. Give me the bell, give me the pressure, give me somebody standing in my way.  That’s enough.\"",
   "stF": "\"Good. It’s you. I’ve been needing to get something out of my system.\"",
   "allDone": true,
   "sp": "{win}:{draw}{powercard}{free}{right}{hype}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "resolve",
     "if": [
      {
       "c": "power",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "Any"
      },
      {
       "c": "power",
       "who": "opp",
       "n": 1,
       "op": "ge",
       "v": "Any"
      }
     ],
     "do": [
      {
       "a": "vp",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain 1 VP if both you and your opponent have at least 1 card attached to your Wrestlers in this match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/hwang-jaewon-37731d0e56.jpg",
   "n": "Hwang Jaewon",
   "atk": 6,
   "def": 8,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Striker"
   ],
   "gimmick": "Fan Favorite",
   "tr": "rat",
   "finN": "J1 Special",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were taking too damn long. I figured I’d speed things up.\"",
   "stW": "\"Thanks, I guess. Just don’t expect me to return the favor when you need it.\"",
   "stP": "\"I’m not trying to impress anybody. I just show up, handle my business, and somehow people keep making a bigger deal out of it than I do.\"",
   "stF": "“This will be over quick. I’ll walk right over you, and all you’ll have left is the embarrassment.”",
   "allDone": true,
   "sp": "{self}{attach}{opp}{attach}:{vp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "to": "played"
      }
     ]
    }
   ],
   "txt": "Gain 2 Hype Tokens and immediately place them on any of your played cards.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/jackson-knight-7d9fbfcaf0.jpg",
   "n": "Jackson Knight",
   "atk": 6,
   "def": 5,
   "vp": 1,
   "cost": 5,
   "win": 4,
   "promo": 2,
   "tags": [
    "Underdog"
   ],
   "align": "face",
   "gimmick": "Stylish",
   "finN": "High Noon",
   "finA": 5,
   "finD": 5,
   "stI": "\"Cause you looked like you needed a hand.\"",
   "stW": "\"Alright, well thanks. Just don’t start telling people you won the match for me.\"",
   "stP": "\"I’ve never been great at knowing when to back off. Somebody tells me I’m in over my head, I usually just wanna jump in deeper and see what happens.\"",
   "stF": "\"You again? Damn, I thought you learned the first time.\"",
   "allDone": true,
   "sp": "+2{hype}{place}{book}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "lose",
     "if": [],
     "do": [
      {
       "a": "nextM",
       "n": 4,
       "who": "opp",
       "k": "atk",
       "wv": "1"
      }
     ]
    }
   ],
   "txt": "If he loses, add +4 Attack in his next match. If he wins that match, gain 1VP",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/skillex-82b00a1b70.jpg",
   "n": "Skillex",
   "atk": 6,
   "def": 7,
   "vp": 2,
   "cost": 7,
   "win": 4,
   "promo": 3,
   "tags": [
    "Powerhouse"
   ],
   "align": "face",
   "gimmick": "Dark",
   "finN": "Culture Crush",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were about to lose it. I stepped in before it got worse.\"",
   "stW": "\"I didn’t ask for the help, I never ask for help.\"",
   "stP": "\"Being different taught me everything I needed to know about people. I stopped trusting, stopped looking for approval, stopped expecting anything from anyone. Now I don’t seek respect, I don’t seek acceptance. I just inflict pain.\"",
   "stF": "\"Keep staring. You won't find human in me. This is your biggest mistake.\"",
   "allDone": true,
   "sp": "{lose}: +4{atk}{temporary}{right}{win}:{vp}"
  },
  {
   "fx": [],
   "rules": [],
   "txt": "Before the match, gain +1VP if there is at least 1 Hype token placed here.",
   "img": "",
   "n": "New Wrestler",
   "atk": 4,
   "def": 4,
   "vp": 1,
   "cost": 3,
   "win": 3,
   "promo": 2,
   "tags": []
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endshow",
     "if": [],
     "do": [
      {
       "a": "cashPer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "wonShow",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "Every End of Show: Gain $1 for each of your booked Wrestler Cards that won on this show.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/nathan-daves-e610e5430f.jpg",
   "n": "Nathan Daves",
   "atk": 7,
   "def": 8,
   "vp": 2,
   "cost": 8,
   "win": 5,
   "promo": 3,
   "tags": [
    "Technician"
   ],
   "align": "face",
   "gimmick": "Fan Favorite",
   "tr": "fan",
   "finN": "Techtonic Breaker",
   "finA": 5,
   "finD": 5,
   "sn": "",
   "stI": "\"You had him in trouble. I just made sure he stayed there.\"",
   "stW": "\"I had the match under control {helper}. Next time, talk to me first.\"",
   "stP": "\"If you think you can outwrestle me, come prove it. Step in this ring and show me I’m wrong.\"",
   "stF": "\"Go ahead, make the first move {opponent}. I already know what I’m doing with it.\"",
   "sp": "{endshow}:{cash}/{book}{win}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "hypeCash",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "When booked, you may discard 1 of your Hype Token from anywhere to gain $2.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/nova-seiya-c09e1dd568.jpg",
   "n": "Nova Seiya",
   "atk": 6,
   "def": 7,
   "vp": 1,
   "cost": 6,
   "win": 2,
   "promo": 5,
   "tags": [
    "High-Flyer"
   ],
   "tr": "rat",
   "gimmick": "Style",
   "align": "face",
   "finN": "Starfall Driver",
   "finA": 5,
   "finD": 5,
   "stI": "「無駄にするな。俺が終わらせる。」Don’t waste it. I’ll finish this.",
   "stW": "「助かった。でも俺なら勝てた。」\nThanks. But I would’ve won anyway.",
   "stF": "「しゃべりすぎだ、アマチュア。」\nYou talk too much, amateur.",
   "stP": "「注目なんて追わない。勝てば、自然とみんなが見る。俺はただリングに上がって、自分の時間を奪うだけだ。」\nI don’t chase attention. When you win, people look. I just step into the ring and take my moment.",
   "igl": "novaseiya2k",
   "nick": "The Shooting Star",
   "allDone": true,
   "sp": "{discard}{hype}{right}2{cash}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "income",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "t": "fan"
      }
     ]
    },
    {
     "mode": "all",
     "when": "bookS",
     "if": [
      {
       "c": "actRole",
       "who": "match",
       "n": 1,
       "op": "ge",
       "v": "def"
      }
     ],
     "do": [
      {
       "a": "hype",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Gain a Merch Income. Play as a Defender and gain 2 Hype Icons.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/carter-young-4c83c9d4eb.jpg",
   "n": "Carter Young",
   "atk": 7,
   "def": 7,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 2,
   "tags": [
    "Grappler"
   ],
   "gimmick": "Patriot",
   "tr": "fan",
   "finN": "U.S.A.",
   "finA": 5,
   "finD": 5,
   "stI": "\"I did what I'm supposed to do. Ease up a bit.\"",
   "stW": "\"I had it handled, but I’m not gonna pretend that didn’t help. I owe you one.\"",
   "stF": "\"You ready? Good. I’d rather beat you at your best.\"",
   "stP": "\"I didn’t come here looking for shortcuts. Give me the toughest match you’ve got, let that bell ring, and I’ll show you exactly what I can do.\"",
   "allDone": true,
   "sp": "{merch}{sep}{defender}: +2{hype}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "borrow",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "When booked, draw 1 Wrestler Card face up and use its power. Discard it after the show.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/kassidy-hayes-050bbc83a1.jpg",
   "n": "Kassidy Hayes",
   "atk": 7,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "Striker"
   ],
   "stI": "\"Do not mistake this for mercy. I simply chose who suffers first.\"",
   "stW": "\"You interfered. The result remains the same. He was always going to fall.\"",
   "stF": "\"Look at me while you still can. Once this starts, I will not stop.\"",
   "stP": "\"I do not forgive. I do not forget. I wait until the moment is right, and then I take everything from you one piece at a time.\"",
   "finN": "Cessation",
   "finA": 5,
   "finD": 5,
   "align": "heel",
   "tr": "fan",
   "gimmick": "Cryptic",
   "allDone": true,
   "sp": "{draw}{wrestlerdeck}{reveal}{right}{discard}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "hypeSteal",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Steal 2 Hype Tokens from any Wrestler Card and add them to this card.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/empress-0bfc4a6978.jpg",
   "n": "Empress",
   "atk": 8,
   "def": 5,
   "vp": 1,
   "cost": 7,
   "win": 4,
   "promo": 3,
   "tags": [
    "Striker"
   ],
   "align": "heel",
   "gimmick": "Chaos",
   "tr": "fan",
   "finN": "Lonely Friday Nights",
   "finA": 5,
   "finD": 5,
   "sn": "",
   "stI": "\"Move the fuck over. I got tired of watching you screw this up.\"",
   "stW": "\"Yeah, you helped. Big fucking deal. Don’t expect a hug.\"",
   "stP": "\"I don’t have a plan, I don’t need a plan, and I sure as hell don’t care who gets pissed off. I show up, ruin somebody’s night, take what I want, and leave everybody else trying to figure out what the fuck just happened.\"",
   "stF": "\"You look way too comfortable {winner}. I’m gonna fix that.\"",
   "allDone": true,
   "sp": "{steal}2{hype}{place}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "hypePer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "inPlayPw",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "Gain 1 Hype Token for every attached Power Card already in play.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/emp-ba56c199b6.jpg",
   "n": "EMP",
   "atk": 7,
   "def": 6,
   "vp": 3,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Hardcore"
   ],
   "sn": "",
   "stI": "\"You had control for about five seconds. Cute. I fixed that.\"",
   "stW": "\"Relax. I know you helped. I just don’t care enough to thank you.\"",
   "stF": "\"{opponent}, you still think this is going by the rules? That’s adorable.\"",
   "stP": "\"I don’t need control. I just need one crack in the system, one bad decision, one weak point nobody else noticed. After that, everything starts falling apart.\"",
   "finN": "Sensational Stunner",
   "finA": 5,
   "finD": 5,
   "align": "face",
   "gimmick": "Xtreme",
   "tr": "spo",
   "allDone": true,
   "sp": "{hype}/{attach}{powercard}{endshow}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "statPer",
       "n": 1,
       "who": "opp",
       "k": "both",
       "v": "Weapon"
      }
     ]
    }
   ],
   "txt": "Add +1 Attack and +1 Defense for every Weapon Power Card you opponent uses in this match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/lucky-karnage-5531b42f05.jpg",
   "n": "Lucky Karnage",
   "atk": 6,
   "def": 8,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 2,
   "tags": [
    "Hardcore"
   ],
   "align": "heel",
   "gimmick": "Xtreme",
   "tr": "rat",
   "finN": "Skull Splitter",
   "finA": 5,
   "finD": 5,
   "stI": "\"You were doing fine. I just wanted to make sure he had a worse night.\"",
   "stW": "\"Did I call you out there??\"",
   "stF": "\"You look real confident for somebody standing this close to a bad decision.\"",
   "stP": "\"I don’t need the match to be pretty. I need it loud, messy, and just uncomfortable enough that somebody starts regretting they showed up.\"",
   "allDone": true,
   "sp": "+1{atk}+1{def}/{weapon}{attach}{opp}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain $2 when booked.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/the-godson-4c1718dadf.jpg",
   "n": "The Godson",
   "atk": 7,
   "def": 5,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "Showman"
   ],
   "stI": "\"Please. You were ruining the show. I had to save the ending.\"",
   "stW": "\"Of course you helped. I know you, {helper}. Everybody wants a little piece of my spotlight.\"",
   "stF": "\"Look at you, standing this close to The Supreme Purple Pimp like you belong here.\"",
   "stP": "\"The lights come on, the people stand up, and somehow it always becomes my moment. You can boo, cheer, complain, whatever you need to do, just make sure you’re watching when I steal the whole damn show.\"",
   "finN": "Grand Back Hand",
   "finA": 5,
   "finD": 5,
   "allDone": true,
   "sp": "2{cash}",
   "align": "face",
   "gimmick": "Style"
  },
  {
   "fx": [
    {
     "k": "trLimit",
     "n": 1
    },
    {
     "k": "trCost",
     "n": 1
    }
   ],
   "rules": [],
   "txt": "This card's Train limit is increased by 1, and it's Train cost is reduced by 1.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/arnez-jackson-b1216b0ff4.jpg",
   "n": "Arnez Jackson",
   "atk": 8,
   "def": 7,
   "vp": 2,
   "cost": 8,
   "win": 5,
   "promo": 2,
   "tags": [
    "Powerhouse"
   ],
   "stI": "\"You looked like you needed a little help. You're welcome!\"",
   "stW": "\"Appreciate the help {helper}. Next time, just sit back and watch me handle it.\"",
   "stF": "\"Take a good look, {opponent}. You’re about to find out why people think twice before stepping to me.\"",
   "stP": "\"I’ve been doing this long enough to know when somebody’s all talk. You can posture, you can make noise, you can convince yourself you’re ready — but once that bell rings, none of that means a damn thing.\"",
   "finN": "Certified Bomb",
   "finA": 5,
   "finD": 5,
   "align": "face",
   "gimmick": "Strongman",
   "tr": "spo",
   "allDone": true,
   "sp": "+1{limit}{train}{sep}-{cash}{pay}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "hypePer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "matchPw",
       "v": "",
       "d": "1"
      }
     ]
    }
   ],
   "txt": "If you win, gain 1 Hype Token for each Power Card attached in this match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/hanbin-f0f674abbf.jpg",
   "n": "Hanbin",
   "atk": 6,
   "def": 6,
   "vp": 1,
   "cost": 7,
   "win": 5,
   "promo": 2,
   "tags": [
    "Underdog"
   ],
   "align": "heel",
   "gimmick": "Stylish",
   "tr": "spo",
   "nick": "One and Only",
   "xl": "@SouthKoreanCaw",
   "stI": "\"You were taking forever. I got fucking bored.\"",
   "stW": "\"Thanks, I guess. Don’t start acting like you did something special.\"",
   "stF": "\"Man, you really came out here looking that confident?\"",
   "stP": "\"I don’t wake up trying to piss people off. It just happens naturally. Most of you make it way too easy anyway.\"",
   "allDone": true,
   "sp": "{win}:{hype}/{powercard}{match}",
   "finN": "Boom Drop",
   "finA": 5,
   "finD": 5
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "owned",
       "v": "",
       "d": 5,
       "to": "keep"
      },
      {
       "a": "attTax",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain a Hype Token. Starting now, your opponent must pay $2 once before attaching their next Power Card.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/jason-prince-269c2cf00f.jpg",
   "n": "Jason Prince",
   "atk": 6,
   "def": 7,
   "vp": 1,
   "cost": 6,
   "win": 5,
   "promo": 2,
   "tags": [
    "All-Rounder"
   ],
   "finN": "Northbound Lane",
   "finA": 5,
   "finD": 5,
   "stI": "\"Yeah, I jumped in. What was I supposed to do, just let that happen?\"",
   "stW": "\"Hey, I’ll take it. Just don’t start telling everybody you won it for me.\"",
   "stF": "\"So it’s you. Alright, let’s see what you’ve actually got.\"",
   "stP": "\"I’m not gonna stand here and sell you some big story. I came to wrestle, I came to win, and if somebody’s got a problem with that, they can step in and deal with me.\"",
   "allDone": true,
   "align": "face",
   "gimmick": "Chaos",
   "sp": "{hype}{sep}{opp}2{cash}{pay}1{times}{powercard}"
  },
  {
   "fx": [],
   "rules": [],
   "txt": "If you win as a Defender, gain 1 VP",
   "img": "",
   "n": "--Defender",
   "atk": 7,
   "def": 6,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": []
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 1,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "income",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "t": "spo"
      },
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Gain +$1, SPonsorship Income and a Hype Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/ca-houtmike-cfc4da097f.jpg",
   "n": "Ca$hOutMike",
   "atk": 7,
   "def": 8,
   "vp": 2,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Grappler"
   ],
   "align": "heel",
   "gimmick": "Rebel",
   "tr": "rat",
   "sp": "{cash}{sponsorships}{hype}",
   "allDone": true,
   "finN": "Ca$hOut",
   "finA": 5,
   "finD": 5
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [
      {
       "c": "role",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "def"
      }
     ],
     "do": [
      {
       "a": "vp",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win as a Defender, gain +2 VP.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/nene-jackson-de39819c28.jpg",
   "n": "Nene Jackson",
   "atk": 4,
   "def": 4,
   "vp": 1,
   "cost": 3,
   "win": 3,
   "promo": 2,
   "tags": [],
   "stI": "\"Boo, move. You had your chance to finish this.\"",
   "stW": "\"{helper}, Thanks! Now back up before people start gossiping.\"",
   "stF": "\"You look real sure of yourself, \"The\" {opponent_full}. I’m curious how long that lasts.\"",
   "stP": "\"I don’t have to do the most to get noticed. I walk in, handle what’s in front of me, and somehow everybody still ends up talking about Nene.\"",
   "finN": "Velvet Breaker",
   "finA": 5,
   "finD": 5,
   "sp": "{defender}{win}: +2{vp}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win, gain $1.",
   "img": "",
   "n": "STRONG 1",
   "atk": 8,
   "def": 8,
   "vp": 2,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Powerhouse"
   ],
   "align": "heel",
   "gimmick": "Giant",
   "tr": "rat",
   "finN": "Finisher S1",
   "finA": 5,
   "finD": 5,
   "sp": "{win}:1{cash}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [
      {
       "c": "role",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "atk"
      }
     ],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win as the Attacker, draw 1 Power Card at no cost.",
   "img": "",
   "n": "STRONG 2",
   "atk": 8,
   "def": 7,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Striker"
   ],
   "align": "face",
   "gimmick": "Aggressor",
   "tr": "fan",
   "finN": "Finisher S2",
   "finA": 5,
   "finD": 5,
   "sp": "{attacker}{win}:{draw}{powercard}{free}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [
      {
       "c": "role",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "def"
      }
     ],
     "do": [
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "If you win as the Defender, gain 1 Hype Token.",
   "img": "",
   "n": "STRONG 3",
   "atk": 7,
   "def": 8,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Grappler"
   ],
   "align": "heel",
   "gimmick": "Faction Leader",
   "tr": "spo",
   "finN": "Finisher S3",
   "finA": 5,
   "finD": 5,
   "sp": "{defender}{win}:{hype}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain $1 when booked.",
   "img": "",
   "n": "STRONG 4",
   "atk": 8,
   "def": 8,
   "vp": 2,
   "cost": 9,
   "win": 5,
   "promo": 2,
   "tags": [
    "Technical"
   ],
   "align": "face",
   "gimmick": "Style",
   "tr": "rat",
   "finN": "Finisher S4",
   "finA": 5,
   "finD": 5,
   "sp": "1{cash}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "main",
       "who": "match",
       "n": 1,
       "v": ""
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 1,
       "who": "opp",
       "k": "both"
      }
     ]
    }
   ],
   "txt": "In the Main Event, gain +1 Attack and +1 Defense.",
   "img": "",
   "n": "STRONG 5",
   "atk": 8,
   "def": 7,
   "vp": 2,
   "cost": 8,
   "win": 5,
   "promo": 4,
   "tags": [
    "Showman"
   ],
   "align": "face",
   "gimmick": "Rockstar",
   "tr": "fan",
   "finN": "Finisher S5",
   "finA": 5,
   "finD": 5,
   "sp": "Main Event: +1{atkdef}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "lose",
     "if": [],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you lose, draw 1 Power Card at no cost.",
   "img": "",
   "n": "STRONG 6",
   "atk": 7,
   "def": 8,
   "vp": 2,
   "cost": 8,
   "win": 5,
   "promo": 3,
   "tags": [
    "Hardcore"
   ],
   "align": "heel",
   "gimmick": "Xtreme",
   "tr": "spo",
   "finN": "Finisher S6",
   "finA": 5,
   "finD": 5,
   "sp": "{lose}:{draw}{powercard}{free}"
  },
  {
   "fx": [],
   "rules": [],
   "txt": "No special power.",
   "img": "",
   "n": "STRONG 7",
   "atk": 8,
   "def": 8,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "Strategist"
   ],
   "align": "heel",
   "gimmick": "Backstabber",
   "tr": "spo",
   "finN": "Finisher S7",
   "finA": 5,
   "finD": 5,
   "sp": ""
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "resolve",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "After this match, gain $1.",
   "img": "",
   "n": "STRONG 8",
   "atk": 7,
   "def": 8,
   "vp": 3,
   "cost": 9,
   "win": 5,
   "promo": 3,
   "tags": [
    "All-Rounder"
   ],
   "align": "face",
   "gimmick": "Patriot",
   "tr": "fan",
   "finN": "Finisher S8",
   "finA": 5,
   "finD": 5,
   "sp": "{match}:1{cash}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "atkHigher",
       "n": 1,
       "v": "",
       "who": "opp"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If your opponent has a higher Attack, gain +2 Attack.",
   "img": "",
   "n": "MID 1",
   "atk": 7,
   "def": 7,
   "vp": 1,
   "cost": 7,
   "win": 5,
   "promo": 3,
   "tags": [
    "Luchador"
   ],
   "align": "face",
   "gimmick": "Mask",
   "tr": "rat",
   "finN": "Finisher M1",
   "finA": 5,
   "finD": 5,
   "sp": "{opp}↑{atk}:+2{atk}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Gain 1 Hype Token when booked.",
   "img": "",
   "n": "MID 2",
   "atk": 7,
   "def": 6,
   "vp": 2,
   "cost": 7,
   "win": 4,
   "promo": 3,
   "tags": [
    "Striker"
   ],
   "align": "heel",
   "gimmick": "Chaos",
   "tr": "fan",
   "finN": "Finisher M2",
   "finA": 5,
   "finD": 5,
   "sp": "{book}:{hype}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "lose",
     "if": [],
     "do": [
      {
       "a": "draw",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you lose, draw 1 Power Card at no cost.",
   "img": "",
   "n": "MID 3",
   "atk": 6,
   "def": 7,
   "vp": 2,
   "cost": 7,
   "win": 4,
   "promo": 3,
   "tags": [
    "Technical"
   ],
   "align": "face",
   "gimmick": "Comeback",
   "tr": "spo",
   "finN": "Finisher M3",
   "finA": 5,
   "finD": 5,
   "sp": "{lose}:{draw}{powercard}{free}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "align",
       "n": 1,
       "v": "face",
       "who": "opp"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "When facing a Face, gain +2 Attack.",
   "img": "",
   "n": "MID 4",
   "atk": 7,
   "def": 7,
   "vp": 1,
   "cost": 7,
   "win": 5,
   "promo": 2,
   "tags": [
    "Brawler"
   ],
   "align": "heel",
   "gimmick": "Rogue",
   "tr": "rat",
   "finN": "Finisher M4",
   "finA": 5,
   "finD": 5,
   "sp": "{opp}{face}:+2{atk}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "power",
       "n": 1,
       "not": true,
       "v": "Any",
       "who": "me",
       "op": "ge"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "stat",
       "n": 1,
       "who": "opp",
       "k": "def"
      }
     ]
    }
   ],
   "txt": "If no Power Card is attached to this card, gain +2 Attack and +1 Defense.",
   "img": "",
   "n": "MID 5",
   "atk": 6,
   "def": 7,
   "vp": 2,
   "cost": 7,
   "win": 4,
   "promo": 3,
   "tags": [
    "High-Flyer"
   ],
   "align": "face",
   "gimmick": "Fan Favorite",
   "tr": "fan",
   "finN": "Finisher M5",
   "finA": 5,
   "finD": 5,
   "sp": "X{powercard}:+2{atk}+1{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "bookS",
     "if": [],
     "do": [
      {
       "a": "income",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "t": "spo"
      }
     ]
    }
   ],
   "txt": "Gain a Sponsorships Income when booked.",
   "img": "",
   "n": "MID 6",
   "atk": 7,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 3,
   "tags": [
    "Grappler"
   ],
   "align": "heel",
   "gimmick": "Dark",
   "tr": "spo",
   "finN": "Finisher M6",
   "finA": 5,
   "finD": 5,
   "sp": "{book}:{sponsorships}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "role",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "def"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "def"
      }
     ]
    }
   ],
   "txt": "As the Defender, gain +2 Defense.",
   "img": "",
   "n": "MID 7",
   "atk": 6,
   "def": 8,
   "vp": 1,
   "cost": 7,
   "win": 4,
   "promo": 2,
   "tags": [
    "Powerhouse"
   ],
   "align": "face",
   "gimmick": "Strongman",
   "tr": "rat",
   "finN": "Finisher M7",
   "finA": 5,
   "finD": 5,
   "sp": "{defender}:+2{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win, gain $2.",
   "img": "",
   "n": "MID 8",
   "atk": 7,
   "def": 7,
   "vp": 2,
   "cost": 8,
   "win": 4,
   "promo": 3,
   "tags": [
    "Rudo"
   ],
   "align": "heel",
   "gimmick": "Cryptic",
   "tr": "rat",
   "finN": "Finisher M8",
   "finA": 5,
   "finD": 5,
   "sp": "{win}:2{cash}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "weak",
       "v": "",
       "d": 12
      }
     ]
    }
   ],
   "txt": "End Game: +1 VP for each wrestler you own with Attack + Defense of 12 or less.",
   "img": "",
   "n": "WEAK 1",
   "atk": 5,
   "def": 6,
   "vp": 1,
   "cost": 5,
   "win": 3,
   "promo": 3,
   "tags": [
    "Underdog"
   ],
   "align": "face",
   "gimmick": "Comeback",
   "tr": "rat",
   "finN": "Finisher W1",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:{vp}/≤12{atkdef}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "per": "owned",
       "v": "High-Flyer",
       "d": 5
      }
     ]
    }
   ],
   "txt": "End Game: +2 VP for each High-Flyer you own.",
   "img": "",
   "n": "WEAK 2",
   "atk": 6,
   "def": 5,
   "vp": 1,
   "cost": 5,
   "win": 3,
   "promo": 3,
   "tags": [
    "High-Flyer"
   ],
   "align": "face",
   "gimmick": "Style",
   "tr": "fan",
   "finN": "Finisher W2",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:2{vp}/High-Flyer"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "promoG",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "End Game: +1 VP for each promo you cut this game.",
   "img": "",
   "n": "WEAK 3",
   "atk": 5,
   "def": 5,
   "vp": 1,
   "cost": 5,
   "win": 3,
   "promo": 4,
   "tags": [
    "Showman"
   ],
   "align": "heel",
   "gimmick": "Rockstar",
   "tr": "spo",
   "finN": "Finisher W3",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:{vp}/{promo}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "per": "upsets",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "End Game: +2 VP for each upset win you had this game.",
   "img": "",
   "n": "WEAK 4",
   "atk": 6,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 4,
   "promo": 2,
   "tags": [
    "Underdog"
   ],
   "align": "heel",
   "gimmick": "Rebel",
   "tr": "rat",
   "finN": "Finisher W4",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:2{vp}/Upset {win}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "align",
       "v": "face",
       "d": 5
      }
     ]
    }
   ],
   "txt": "End Game: +1 VP for each Face you own.",
   "img": "",
   "n": "WEAK 5",
   "atk": 5,
   "def": 6,
   "vp": 1,
   "cost": 5,
   "win": 3,
   "promo": 3,
   "tags": [
    "Tag"
   ],
   "align": "face",
   "gimmick": "Patriot",
   "tr": "fan",
   "finN": "Finisher W5",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:{vp}/{face}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "owned",
       "v": "Xtreme",
       "d": 5
      }
     ]
    }
   ],
   "txt": "End Game: +1 VP for each Xtreme wrestler you own.",
   "img": "",
   "n": "WEAK 6",
   "atk": 6,
   "def": 5,
   "vp": 1,
   "cost": 5,
   "win": 3,
   "promo": 3,
   "tags": [
    "Hardcore"
   ],
   "align": "heel",
   "gimmick": "Xtreme",
   "tr": "spo",
   "finN": "Finisher W6",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:{vp}/{xtreme}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "atkHigher",
       "n": 1,
       "v": "",
       "who": "opp"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 3,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "stat",
       "n": 1,
       "who": "opp",
       "k": "def"
      }
     ]
    }
   ],
   "txt": "If your opponent has a higher Attack, gain +3 Attack and +1 Defense.",
   "img": "",
   "n": "WEAK 7",
   "atk": 5,
   "def": 5,
   "vp": 1,
   "cost": 5,
   "win": 4,
   "promo": 2,
   "tags": [
    "Technical"
   ],
   "align": "face",
   "gimmick": "Fan Favorite",
   "tr": "spo",
   "finN": "Finisher W7",
   "finA": 5,
   "finD": 5,
   "sp": "{opp}↑{atk}:+3{atk}+1{def}"
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endgame",
     "if": [],
     "do": [
      {
       "a": "vpPer",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "per": "hypeOn",
       "v": "",
       "d": 5
      }
     ]
    }
   ],
   "txt": "End Game: +1 VP for each hype token on your wrestlers.",
   "img": "",
   "n": "WEAK 8",
   "atk": 6,
   "def": 6,
   "vp": 1,
   "cost": 6,
   "win": 3,
   "promo": 3,
   "tags": [
    "Strategist"
   ],
   "align": "heel",
   "gimmick": "Cryptic",
   "tr": "fan",
   "finN": "Finisher W8",
   "finA": 5,
   "finD": 5,
   "sp": "{endgame}:{vp}/{hype}"
  }
 ],
 "pw": [
  {
   "fx": [
    {
     "k": "both",
     "n": 3
    },
    {
     "k": "both",
     "n": 1,
     "tag": "Showman"
    }
   ],
   "rules": [],
   "txt": "If your Opponent is a Showman, deal 1 extra damage.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/steel-chair-e648d76beb.jpg",
   "n": "Steel Chair",
   "cat": "Weapon",
   "id": 19,
   "copies": 2,
   "pcost": 2,
   "rq": "spo",
   "rl": 3,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 5
    }
   ],
   "rules": [],
   "txt": "Discard all of your opponent's remaining attached Power Cards in this match, if any. If this happens, lose 1 VP.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/burning-table-88bd4b57de.jpg",
   "n": "Burning Table",
   "cat": "Weapon",
   "id": 20,
   "copies": 1,
   "pcost": 3,
   "rq": "spo",
   "rl": 5,
   "sp": "{discard}{opp}"
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 3
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "resolve",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Gain 1 Hype Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/table-07e1357a14.jpg",
   "n": "Table",
   "cat": "Weapon",
   "id": 21,
   "copies": 2,
   "pcost": 2,
   "rq": "rat",
   "rl": 3,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 2
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "drawPay",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Draw 1 Power Card. Pay its cost to add it to your hand, or discard it.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/kendo-stick-6cadbe53f5.jpg",
   "n": "Kendo Stick",
   "cat": "Weapon",
   "id": 22,
   "copies": 2,
   "pcost": 1,
   "rq": "fan",
   "rl": 2,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "lose",
     "if": [],
     "do": [
      {
       "a": "callDraw",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you lose, you may call this a draw and earn +2VP",
   "img": "",
   "n": "Michael Hammond",
   "cat": "GM",
   "id": 23,
   "pcost": 4,
   "copies": 1,
   "keep": true
  },
  {
   "fx": [
    {
     "k": "win",
     "n": 2
    }
   ],
   "rules": [],
   "txt": "Your base Attack is now your base Defense and vice versa.",
   "img": "",
   "n": "?",
   "cat": "Backup",
   "keep": true,
   "id": 24
  },
  {
   "fx": [
    {
     "k": "def",
     "n": 2
    }
   ],
   "rules": [],
   "txt": "Gain +2 Defense",
   "img": "",
   "n": "Rope Break",
   "cat": "Referee",
   "keep": true,
   "id": 25,
   "pcost": 1,
   "copies": 5
  },
  {
   "fx": [
    {
     "k": "def",
     "n": 4
    }
   ],
   "rules": [],
   "txt": "Attach a Wrestler Card next turn to trigger this effect.",
   "img": "",
   "n": "Distraction",
   "cat": "Outside",
   "id": 26
  },
  {
   "fx": [],
   "rules": [],
   "txt": "Cancels your opponents 3rd Power Card, if any",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/fast-count-74ff1b28f8.jpg",
   "n": "Fast Count",
   "cat": "Referee",
   "id": 27,
   "pcost": 2,
   "copies": 2,
   "rq": "rat",
   "rl": 2
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Sleeper Hold",
   "cat": "Counter",
   "id": 28
  },
  {
   "fx": [
    {
     "k": "def",
     "n": -3
    },
    {
     "k": "def",
     "n": -3
    }
   ],
   "rules": [],
   "txt": "You lose -3 Defense",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/tacks-222d22bf1d.jpg",
   "n": "Tacks",
   "cat": "Weapon",
   "id": 29,
   "pcost": 3,
   "copies": 1,
   "rq": "fan",
   "rl": 8,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "win",
     "n": 3
    }
   ],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Crowd Pop",
   "cat": "Crowd",
   "id": 30
  },
  {
   "fx": [
    {
     "k": "def",
     "n": 2
    }
   ],
   "rules": [],
   "txt": "Gain +2 Defense",
   "img": "",
   "n": "Kick Out",
   "cat": "Counter",
   "id": 31,
   "pcost": 1,
   "copies": 6
  },
  {
   "fx": [
    {
     "k": "atk",
     "n": 1
    },
    {
     "k": "def",
     "n": 1
    }
   ],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Title Shot",
   "cat": "Counter",
   "id": 32
  },
  {
   "fx": [
    {
     "k": "draw",
     "n": 2
    }
   ],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Backstage Deal",
   "cat": "Counter",
   "id": 33
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 4
    }
   ],
   "rules": [],
   "txt": "Gain 1 Hype Token. and Draw 1 Power Card. Pay its cost to keep it; otherwise, discard it.",
   "img": "https://pub-9749fac315074c7393c7693a829dd5b9.r2.dev/cards/glass-1791792916194.jpg",
   "n": "Glass",
   "cat": "Weapon",
   "copies": 2,
   "pcost": 3,
   "rq": "rat",
   "rl": 7
  },
  {
   "fx": [],
   "rules": [],
   "txt": "If you win, place a Hype token on your opponent.",
   "img": "https://pub-9749fac315074c7393c7693a829dd5b9.r2.dev/cards/flaming-barbed-bat-1791793914011.jpg",
   "n": "Flaming Barbed Bat",
   "cat": "Weapon",
   "copies": 1,
   "pcost": 5,
   "rq": "fan",
   "rl": 8
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 3
    },
    {
     "k": "both",
     "n": 2,
     "tag": "High-Flyer"
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "injure",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    },
    {
     "mode": "all",
     "when": "lose",
     "if": [],
     "do": [
      {
       "a": "injSelf",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "+2 Damage if High-Flyer. The loser gains the Injury Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/ladder-205c1bac27.jpg",
   "n": "Ladder",
   "cat": "Weapon",
   "copies": 1,
   "pcost": 3,
   "rq": "rat",
   "rl": 4,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "https://pub-9749fac315074c7393c7693a829dd5b9.r2.dev/cards/brass-knuckles-1791797716322.jpg",
   "n": "Brass Knuckles",
   "cat": "Weapon",
   "copies": 1
  },
  {
   "fx": [],
   "rules": [],
   "txt": "Gain 1 Hype Token. Following Resolution Order, all weapons and interference become legal after this card is played.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/referee-down-8b7762a2cd.jpg",
   "n": "Referee Down",
   "cat": "Referee",
   "copies": 2,
   "pcost": 2,
   "rq": "rat",
   "rl": 3
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 2
    },
    {
     "k": "both",
     "n": 2
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "discard",
       "n": 1,
       "who": "last",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "+2 Defense. Discard your opponent's most recent attached Power Card.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/fire-extinguisher-b3b0ee4363.jpg",
   "n": "Fire Extinguisher",
   "cat": "Weapon",
   "copies": 1,
   "pcost": 3,
   "rq": "spo",
   "rl": 4,
   "sp": "+2{def}{sep}{discard}{opp}{attach}{powercard}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 4
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "injure",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win, your opponent gets an Injury Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/barbed-wire-bat-d35f1d2cc7.jpg",
   "n": "Barbed Wire bat",
   "cat": "Weapon",
   "copies": 1,
   "pcost": 4,
   "rq": "spo",
   "rl": 5,
   "sp": "{win}:{opp}{injury}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 4
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "to": "this"
      }
     ]
    }
   ],
   "txt": "Gain 2 Hype Tokens and attach them to your Wrestler Card in this match.\"",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/legos-bad063c5b6.jpg",
   "n": "Legos",
   "cat": "Weapon",
   "copies": 1,
   "pcost": 3,
   "rq": "fan",
   "rl": 5,
   "sp": "+2{hype}{right}{place}{wrestlercard}{match}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 5
    }
   ],
   "rules": [],
   "txt": "Your opponent's next Power Cards in the Resolution Order lose their Power abilities.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/car-battery-5cd92ad14d.jpg",
   "n": "Car Battery",
   "cat": "Weapon",
   "copies": 1,
   "pcost": 3,
   "rq": "rat",
   "rl": 6,
   "sp": ""
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 3
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "tag",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "High-Flyer"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 2,
       "who": "opp",
       "k": "both"
      }
     ]
    },
    {
     "mode": "all",
     "when": "lose",
     "if": [
      {
       "c": "tag",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "High-Flyer",
       "not": true
      }
     ],
     "do": [
      {
       "a": "injSelf",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If High-Flyer, gain +2 Damage. If not, gain an Injury Token if you lose.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/new-power-b22c944d9a.jpg",
   "n": "Rope Dive",
   "cat": "Move",
   "copies": 2,
   "pcost": 2,
   "rq": "rat",
   "rl": 1,
   "sp": "High Flyer: 2{atkdef}{sep}X{lose}{injury}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 2
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "tag",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "Striker"
      }
     ],
     "do": [
      {
       "a": "hype",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "If Striker, gain 2 Hype Tokens.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/new-power-116355fec0.jpg",
   "n": "Stomp",
   "cat": "Move",
   "copies": 4,
   "pcost": 1,
   "rq": "spo",
   "sp": "Striker: 2{hype}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 2
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Gain a Hype Token",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/suplex-0741bc7ba9.jpg",
   "n": "Suplex",
   "cat": "Move",
   "copies": 3,
   "pcost": 1,
   "rq": "spo",
   "sp": "{hype}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 4
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "injure",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "If you win, your opponent gets an Injury Token",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/piledriver-110dee3ec5.jpg",
   "n": "Piledriver",
   "cat": "Move",
   "copies": 1,
   "pcost": 3,
   "rq": "fan",
   "rl": 3,
   "sp": "{win}:{opp}{injury}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 3
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    },
    {
     "mode": "all",
     "when": "reveal",
     "if": [
      {
       "c": "tag",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "High-Flyer"
      }
     ],
     "do": [
      {
       "a": "stat",
       "n": 1,
       "who": "opp",
       "k": "both"
      }
     ]
    }
   ],
   "txt": "Gain a Hype Token. If Highflyer, deal an additional +1 Damage",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/elbow-drop-22bbd8212c.jpg",
   "n": "Elbow Drop",
   "cat": "Move",
   "copies": 2,
   "pcost": 2,
   "rq": "rat",
   "sp": "{hype}{sep}High-Flyer: +1{atkdef}",
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 4
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "reveal",
     "if": [],
     "do": [
      {
       "a": "income",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "t": "spo"
      }
     ]
    },
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "injure",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain a Sponsorship Income.  If you win, opponent gains an Injury Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/ring-edge-powerbomb-b521b135d2.jpg",
   "n": "Ring Edge Powerbomb",
   "cat": "Move",
   "copies": 1,
   "sp": "{sponsorships}{sep}{win}:{opp}{injury}",
   "pcost": 3,
   "rq": "rat",
   "rl": 2,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "both",
     "n": 5
    }
   ],
   "rules": [],
   "txt": "Gain a Ticket Income and a Merch Income. You and your opponent gets a Victory Point if this is a Championship Match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/ddt-on-announcer-s-table-2acc4ae1b2.jpg",
   "n": "DDT on Announcer's Table",
   "cat": "Move",
   "copies": 1,
   "pcost": 3,
   "rq": "spo",
   "rl": 4,
   "sp": ""
  }
 ],
 "ef": [
  {
   "fx": [
    {
     "k": "draftFirst",
     "n": 1
    },
    {
     "k": "pwCost",
     "n": 1
    }
   ],
   "rules": [],
   "txt": "You always draft first. All Power Cards cost -$1 each.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/first-pick-64c3da63eb.jpg",
   "n": "First Pick",
   "cash": 32,
   "hyp": 3,
   "id": 34,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 1,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain $1 whenever you win a match.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/ticket-seller-d4270f98fe.jpg",
   "n": "Ticket Seller",
   "cash": 33,
   "hyp": 3,
   "id": 35,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "win",
     "if": [
      {
       "c": "role",
       "who": "me",
       "n": 1,
       "op": "ge",
       "v": "def"
      }
     ],
     "do": [
      {
       "a": "cash",
       "n": 2,
       "who": "opp",
       "k": "atk"
      },
      {
       "a": "hype",
       "n": 1,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Whenever your Defender wins, gain $2 and 1 Hype Token.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/iron-guard-ff83d6d816.jpg",
   "n": "Iron Guard",
   "cash": 36,
   "hyp": 3,
   "id": 36,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "drawAny",
     "if": [],
     "do": [
      {
       "a": "hype",
       "n": 2,
       "who": "opp",
       "k": "atk",
       "to": "keep"
      }
     ]
    }
   ],
   "txt": "Gain 2 Hype Tokens every time anyone draws a Power Card during a show.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/box-office-4a27a16d03.jpg",
   "n": "Box Office",
   "cash": 30,
   "hyp": 4,
   "id": 37,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "Once per show, you may switch a played Wrestler Card with one in hand.  The replacement deals 1 less damage.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/surprise-entrant-68a48ecd55.jpg",
   "n": "Surprise Entrant",
   "cash": 33,
   "hyp": 3,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "pwSlot",
     "n": 1,
     "m": "main"
    }
   ],
   "rules": [],
   "txt": "Your wrestler in the Main Event may have 1 more Power Card attached.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/main-eventer-3f181d4a8f.jpg",
   "n": "Main Eventer",
   "cash": 34,
   "hyp": 3,
   "allDone": true
  },
  {
   "fx": [],
   "rules": [
    {
     "mode": "all",
     "when": "endshow",
     "if": [],
     "do": [
      {
       "a": "cash",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain $2 at the end of each show.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/big-money-132382f2e1.jpg",
   "n": "Big Money",
   "cash": 32,
   "hyp": 2,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "pwSlot",
     "n": 1,
     "m": "all"
    }
   ],
   "rules": [],
   "txt": "Increase the Power Card slot limit of all of your Wrestler Cards by 1.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/gear-up-08f87d0c40.jpg",
   "n": "Gear Up",
   "cash": 33,
   "hyp": 3,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "tieWin",
     "n": 1
    }
   ],
   "rules": [
    {
     "mode": "all",
     "when": "start",
     "if": [],
     "do": [
      {
       "a": "vp",
       "n": 2,
       "who": "opp",
       "k": "atk"
      }
     ]
    }
   ],
   "txt": "Gain +2 VP. You automatically win any tie, including Win Track ties and End Game VP scoring ties.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/decisive-edge-0e53a7e8d5.jpg",
   "n": "Decisive Edge",
   "cash": 28,
   "hyp": 2,
   "allDone": true
  },
  {
   "fx": [
    {
     "k": "champB",
     "n": 1,
     "s": "both"
    }
   ],
   "rules": [],
   "txt": "Your wrestlers that have won a Championship Match gain +1 Attack and +1 Defense for the rest of the game.",
   "img": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/championship-pedigree-59992b9e03.jpg",
   "n": "Championship Pedigree",
   "cash": 36,
   "hyp": 3,
   "allDone": true
  }
 ],
 "st": [
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Giant Killer",
   "cnt": "upsets",
   "arg": "",
   "tgt": 3,
   "vp": 7,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "3 Upset {win}{right}7{vp}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Dominant Champion",
   "cnt": "streak",
   "arg": "",
   "tgt": 5,
   "vp": 9,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "5{win} in a row{right}9{vp}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Promo King",
   "cnt": "promos",
   "arg": "",
   "tgt": 3,
   "vp": 3,
   "rcash": 0,
   "rhyp": 2,
   "rdraw": 0,
   "sp": "3{promo}{right}3{vp}2{hype}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Iron Man",
   "cnt": "matches",
   "arg": "",
   "tgt": 20,
   "vp": 5,
   "rcash": 4,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "20{match}{right}5{vp}4{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Triple Threat",
   "cnt": "trMin",
   "arg": "",
   "tgt": 3,
   "vp": 6,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 1,
   "sp": "3{ratings}3{fanbase}3{sponsors}{right}6{vp}{draw}{powercard}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Corporate Darling",
   "cnt": "track",
   "arg": "spo",
   "tgt": 10,
   "vp": 7,
   "rcash": 5,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "10{sponsors}{right}7{vp}5{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Ratings Draw",
   "cnt": "track",
   "arg": "rat",
   "tgt": 10,
   "vp": 7,
   "rcash": 5,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "10{ratings}{right}7{vp}5{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Crowd Favorite",
   "cnt": "track",
   "arg": "fan",
   "tgt": 10,
   "vp": 7,
   "rcash": 5,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "10{fanbase}{right}7{vp}5{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "The Faction",
   "cnt": "align",
   "arg": "heel",
   "tgt": 3,
   "vp": 4,
   "rcash": 3,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "3{heel}{right}4{vp}3{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "People's Choice",
   "cnt": "align",
   "arg": "face",
   "tgt": 3,
   "vp": 4,
   "rcash": 0,
   "rhyp": 2,
   "rdraw": 0,
   "sp": "3{face}{right}4{vp}2{hype}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Hardcore Legend",
   "cnt": "hcWins",
   "arg": "",
   "tgt": 3,
   "vp": 5,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 2,
   "sp": "3 Hardcore {win}{right}5{vp}2{draw}{powercard}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Clean Sweep",
   "cnt": "clean",
   "arg": "",
   "tgt": 5,
   "vp": 6,
   "rcash": 0,
   "rhyp": 2,
   "rdraw": 0,
   "sp": "5{win} X{powercard}{right}6{vp}2{hype}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Main Eventer",
   "cnt": "mainWins",
   "arg": "",
   "tgt": 3,
   "vp": 7,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "3 Main Event {win}{right}7{vp}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Elite Talent",
   "cnt": "elite",
   "arg": "",
   "tgt": 1,
   "vp": 4,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 1,
   "sp": "Elite ★{right}4{vp}{draw}{powercard}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Training Camp",
   "cnt": "trained",
   "arg": "",
   "tgt": 3,
   "vp": 3,
   "rcash": 4,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "3{train}{right}3{vp}4{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Finisher Specialist",
   "cnt": "fins",
   "arg": "",
   "tgt": 4,
   "vp": 5,
   "rcash": 4,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "4 Finisher{right}5{vp}4{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Tag Team Specialists",
   "cnt": "tagWins",
   "arg": "",
   "tgt": 2,
   "vp": 5,
   "rcash": 0,
   "rhyp": 2,
   "rdraw": 0,
   "sp": "2 Tag {win}{right}5{vp}2{hype}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Enforcer",
   "cnt": "injuries",
   "arg": "",
   "tgt": 2,
   "vp": 5,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 1,
   "sp": "2{injury}{opp}{right}5{vp}{draw}{powercard}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Sold Out Show",
   "cnt": "showInc",
   "arg": "",
   "tgt": 10,
   "vp": 3,
   "rcash": 5,
   "rhyp": 0,
   "rdraw": 0,
   "sp": "10{cash}/{endshow}{right}3{vp}5{cash}",
   "allDone": true
  },
  {
   "fx": [],
   "rules": [],
   "txt": "",
   "img": "",
   "n": "Hype Machine",
   "cnt": "hypeOne",
   "arg": "",
   "tgt": 4,
   "vp": 3,
   "rcash": 0,
   "rhyp": 0,
   "rdraw": 2,
   "sp": "4{hype}{right}3{vp}2{draw}{powercard}",
   "allDone": true
  }
 ],
 "fn": [],
 "tk": {
  "champ": "https://pub-9749fac315074c7393c7693a829dd5b9.r2.dev/cards/token-champ-1791781162642.png",
  "inj": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/token-inj-96a77af645.png",
  "vp": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/token-vp-8a1628a7d9.png",
  "hype": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/token-hype-0f3e73ea4b.png",
  "promo": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/token-promo-f00fde5e55.png",
  "win": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/token-win-e65b869ef5.png",
  "pwc": "https://carduploads.fswfirststrikewrestling.workers.dev/cards/token-pwc-1cc7c238d3.png"
 },
 "cfg": {
  "mpOff": true
 }
};
