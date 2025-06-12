// Statistical bias test for NTU Cat Quiz
// Paste this in your project or run in browser console after loading the quiz page

// --- BEGIN CONFIG ---
const NUM_SIMULATIONS = 10000;
// --- END CONFIG ---

// --- BEGIN: Copied from script.js ---
const questions = [
    {
        question: "How do you typically react when meeting new people?",
        choices: [
            { text: "Approach them confidently", scores: { sociability: 2, mood: 1 } },
            { text: "Observe from a distance first", scores: { independence: 2, mood: 1 } },
            { text: "Prefer to keep to myself", scores: { independence: 2, sociability: -1 } },
            { text: "It depends on my mood", scores: { mood: 2, sociability: 1 } }
        ]
    },
    {
        question: "What's your ideal way to spend free time?",
        choices: [
            { text: "Playing and being active", scores: { activity: 2, sociability: 1 } },
            { text: "Relaxing in a quiet spot", scores: { mood: 2, independence: 1 } },
            { text: "Exploring new places", scores: { curiosity: 2, independence: 1 } },
            { text: "Hanging out with friends", scores: { sociability: 2, mood: 1 } }
        ]
    },
    {
        question: "How do you prefer to eat your meals?",
        choices: [
            { text: "With others, socially", scores: { sociability: 2, appetite: 2 } },
            { text: "Alone, at my own pace", scores: { independence: 2, mood: 1 } },
            { text: "Whenever I feel like it", scores: { independence: 1, mood: 2 } },
            { text: "On a regular schedule", scores: { mood: 2, activity: 1 } }
        ]
    },
    {
        question: "What's your reaction when someone approaches you unexpectedly?",
        choices: [
            { text: "Welcome them warmly", scores: { sociability: 2, mood: 2 } },
            { text: "Stay cautious but curious", scores: { independence: 2, curiosity: 1 } },
            { text: "Quickly move away", scores: { independence: 2, sociability: -1 } },
            { text: "Depends on how I'm feeling", scores: { mood: 2, activity: 1 } }
        ]
    },
    {
        question: "How do you handle changes in your routine?",
        choices: [
            { text: "Adapt easily and enjoy variety", scores: { activity: 2, curiosity: 1 } },
            { text: "Prefer sticking to my habits", scores: { mood: 2, independence: 2 } },
            { text: "Go with the flow", scores: { sociability: 2, mood: 1 } },
            { text: "Get a bit stressed", scores: { mood: 2, activity: -1 } }
        ]
    },
    {
        question: "It's lunchtime at North Spine! You spot some students eating chicken rice. What do you do?",
        choices: [
            { text: "Confidently walk up and give them your best pleading eyes", scores: { sociability: 2, appetite: 2 } },
            { text: "Watch from a distance, planning the perfect moment to appear", scores: { independence: 2, curiosity: 1 } },
            { text: "Ignore them - you're a sophisticated cat who doesn't beg", scores: { independence: 2, mood: 2 } },
            { text: "Start meowing dramatically to get attention", scores: { sociability: 2, appetite: 1 } }
        ]
    },
    {
        question: "You discover a new cardboard box near the engineering building. What's your first reaction?",
        choices: [
            { text: "Immediately claim it as your new favorite spot", scores: { curiosity: 2, independence: 1 } },
            { text: "Carefully inspect it from all angles before approaching", scores: { mood: 2, curiosity: 1 } },
            { text: "Ignore it - you prefer your existing sleeping spots", scores: { mood: 2, independence: 2 } },
            { text: "Push it around and play with it", scores: { activity: 2, sociability: 1 } }
        ]
    },
    {
        question: "A student is trying to study in the library. You decide to...",
        choices: [
            { text: "Sit on their textbook - it's prime napping real estate", scores: { sociability: 2, mood: 1 } },
            { text: "Find a quiet corner nearby for your own study session", scores: { mood: 2, independence: 2 } },
            { text: "Playfully swat at their pencil while they write", scores: { activity: 2, sociability: 1 } },
            { text: "Watch from your bookshelf throne", scores: { independence: 2, mood: 1 } }
        ]
    },
    {
        question: "It's raining at NTU! Where do you take shelter?",
        choices: [
            { text: "Under the nearest shelter with other cats", scores: { sociability: 2, mood: 2 } },
            { text: "Your secret hideout that only you know about", scores: { independence: 2, curiosity: 1 } },
            { text: "The nearest building entrance until someone lets you in", scores: { sociability: 2, appetite: 1 } },
            { text: "Play in the rain! Who needs shelter?", scores: { activity: 2, independence: 1 } }
        ]
    },
    {
        question: "You spot the campus cat feeder approaching! Time to...",
        choices: [
            { text: "Run up to them immediately - FOOD TIME!", scores: { appetite: 2, sociability: 2 } },
            { text: "Wait patiently in line with other cats", scores: { mood: 2, sociability: 1 } },
            { text: "Watch from afar, you'll get food on your own terms", scores: { independence: 2, mood: 2 } },
            { text: "Show off your best tricks to get extra portions", scores: { activity: 2, appetite: 1 } }
        ]
    },
    {
        question: "A student tries to take a selfie with you. Your response?",
        choices: [
            { text: "Strike your best pose - you're basically a model", scores: { sociability: 2, mood: 1 } },
            { text: "Walk away - you're not a tourist attraction", scores: { independence: 2, mood: 2 } },
            { text: "Photobomb their picture in the most dramatic way", scores: { activity: 2, curiosity: 1 } },
            { text: "Allow it, but only if they have treats", scores: { appetite: 2, sociability: 1 } }
        ]
    },
    {
        question: "You notice a new cat in your territory. What's your strategy?",
        choices: [
            { text: "Welcome them with a friendly meow", scores: { sociability: 2, mood: 2 } },
            { text: "Observe them from a distance first", scores: { independence: 2, curiosity: 1 } },
            { text: "Show them who's boss around here", scores: { independence: 2, activity: 1 } },
            { text: "Share your favorite spots - the more the merrier!", scores: { sociability: 2, mood: 2 } }
        ]
    },
    {
        question: "It's a quiet Sunday on campus. How do you spend your day?",
        choices: [
            { text: "Finding new spots to explore", scores: { curiosity: 2, activity: 1 } },
            { text: "Sunbathing in your favorite window", scores: { mood: 2, independence: 2 } },
            { text: "Practicing your parkour skills", scores: { activity: 2, curiosity: 1 } },
            { text: "Visiting all your favorite humans' hangout spots", scores: { sociability: 2, appetite: 1 } }
        ]
    },
    {
        question: "A student drops their food! Quick, what do you do?",
        choices: [
            { text: "Help them clean up (by eating it, obviously)", scores: { appetite: 2, sociability: 2 } },
            { text: "Watch the chaos unfold from a safe distance", scores: { independence: 2, mood: 2 } },
            { text: "Meow sympathetically - you know the feeling", scores: { sociability: 2, mood: 2 } },
            { text: "Investigate the scene for any surviving snacks", scores: { curiosity: 2, appetite: 1 } }
        ]
    },
    {
        question: "Your favorite sleeping spot is occupied by another cat. Your next move?",
        choices: [
            { text: "Find another spot - sharing is caring", scores: { mood: 2, sociability: 2 } },
            { text: "Wait nearby until they leave", scores: { patience: 2, independence: 2 } },
            { text: "Suggest a cuddle pile!", scores: { sociability: 2, mood: 2 } },
            { text: "Time to explore and find a new favorite spot", scores: { curiosity: 2, activity: 1 } }
        ]
    }
];

const catProfiles = {
    canteenKing: {
        name: "The Canteen King/Queen",
        description: "Just like the beloved cats at North Spine Food Court, you're a social butterfly who knows exactly how to charm humans into sharing their meals. Your strategic choice of hangout spots shows both your intelligence and your appreciation for good food!",
        image: "assets/canteen-cat.jpg",
        location: "Favorite Spot: North Spine Food Court",
        threshold: {
            sociability: 5,
            appetite: 4
        }
    },
    libraryScholar: {
        name: "The Library Scholar",
        description: "Like the wise cats often spotted near the library, you're calm, contemplative, and enjoy peaceful environments. You might be quiet, but you're incredibly observant and always know the best spots for an undisturbed nap between study sessions.",
        image: "assets/library-cat.jpg",
        location: "Favorite Spot: Lee Wee Nam Library",
        threshold: {
            mood: 5,
            independence: 3
        }
    },
    hallPatroller: {
        name: "The Hall Patroller",
        description: "Similar to the dedicated cats around the residential halls, you're territorial but friendly, keeping watch over your chosen domain. You've mastered the art of knowing exactly when the hall residents return and might have a schedule of which rooms give out the best treats!",
        image: "assets/hall-cat.jpg",
        location: "Favorite Spot: Hall 2",
        threshold: {
            independence: 4,
            sociability: 3
        }
    },
    adventureSeeker: {
        name: "The Adventure Seeker",
        description: "Like the explorers often seen around the ADM building, you're creative, curious, and always up for new experiences. Your adventurous spirit takes you to the most interesting corners of the campus!",
        image: "assets/adm-cat.jpg",
        location: "Favorite Spot: ADM Building",
        threshold: {
            curiosity: 5,
            activity: 4
        }
    },
    sportsStar: {
        name: "The Sports Star",
        description: "Just like the energetic cats near the sports facilities, you're athletic, playful, and always ready for action. Whether it's chasing leaves or racing imaginary opponents, you're always on the move!",
        image: "assets/sports-cat.jpg",
        location: "Favorite Spot: The Wave",
        threshold: {
            activity: 5,
            sociability: 2
        }
    },
    gardenGuardian: {
        name: "The Garden Guardian",
        description: "Similar to the peaceful cats in the Chinese Heritage Centre garden, you're zen-like and one with nature. You appreciate beauty and have a calming presence that draws others to you.",
        image: "assets/garden-cat.jpg",
        location: "Favorite Spot: Chinese Heritage Centre",
        threshold: {
            mood: 4,
            independence: 4
        }
    },
    engineeringExpert: {
        name: "The Engineering Expert",
        description: "Like the clever cats around the engineering blocks, you're analytical and methodical. You've figured out exactly how long to wait by the doors before someone lets you in!",
        image: "assets/engineering-cat.jpg",
        location: "Favorite Spot: Engineering Buildings",
        threshold: {
            curiosity: 4,
            independence: 3
        }
    },
    businessTycoon: {
        name: "The Business Tycoon",
        description: "Just like the strategic cats near the business school, you're clever and resourceful. You know exactly when and where to appear for maximum attention and treats!",
        image: "assets/business-cat.jpg",
        location: "Favorite Spot: Business School",
        threshold: {
            sociability: 4,
            appetite: 3
        }
    },
    artsCritic: {
        name: "The Arts Critic",
        description: "Similar to the sophisticated cats near the arts buildings, you're cultured and expressive. You appreciate the finer things in life and aren't afraid to show your opinions!",
        image: "assets/arts-cat.jpg",
        location: "Favorite Spot: School of Art, Design and Media",
        threshold: {
            mood: 3,
            curiosity: 4
        }
    },
    dormPhilosopher: {
        name: "The Dorm Philosopher",
        description: "Like the thoughtful cats around the graduate residences, you're wise beyond your years. You enjoy deep conversations (even if they're just meows) and have mastered the art of meaningful stares.",
        image: "assets/dorm-cat.jpg",
        location: "Favorite Spot: Graduate Hall",
        threshold: {
            independence: 5,
            mood: 3
        }
    }
};
// --- END: Copied from script.js ---

// --- BEGIN: Calculate average random trait scores ---
(function() {
  const traitSums = {
    sociability: 0, activity: 0, independence: 0, mood: 0, curiosity: 0, appetite: 0, patience: 0
  };
  const NUM_AVG_SIM = 10000;
  for (let i = 0; i < NUM_AVG_SIM; i++) {
    const simScores = { sociability: 0, activity: 0, independence: 0, mood: 0, curiosity: 0, appetite: 0, patience: 0 };
    for (const q of questions) {
      const choice = q.choices[Math.floor(Math.random() * q.choices.length)];
      for (const [trait, value] of Object.entries(choice.scores)) {
        simScores[trait] = (simScores[trait] || 0) + value;
      }
    }
    for (const trait in traitSums) traitSums[trait] += simScores[trait] || 0;
  }
  console.log('Average random trait scores after', NUM_AVG_SIM, 'simulations:');
  for (const trait in traitSums) {
    console.log(`${trait}: ${(traitSums[trait] / NUM_AVG_SIM).toFixed(2)}`);
  }
})();
// --- END: Calculate average random trait scores ---

const allCats = [
  "The Canteen King/Queen",
  "The Library Scholar",
  "The Hall Patroller",
  "The Adventure Seeker",
  "The Sports Star",
  "The Garden Guardian",
  "The Engineering Expert",
  "The Business Tycoon",
  "The Arts Critic",
  "The Dorm Philosopher"
];

const answerCatPools = [
  // Q1
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Sports Star"],
    ["The Library Scholar", "The Garden Guardian", "The Dorm Philosopher"],
    ["The Engineering Expert", "The Business Tycoon", "The Arts Critic"],
    ["The Hall Patroller", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q2
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Engineering Expert"],
    ["The Hall Patroller", "The Adventure Seeker", "The Dorm Philosopher"],
    ["The Sports Star", "The Garden Guardian", "The Arts Critic"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q3
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Dorm Philosopher"],
    ["The Library Scholar", "The Sports Star", "The Arts Critic"],
    ["The Hall Patroller", "The Garden Guardian", "The Engineering Expert"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q4
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Arts Critic"],
    ["The Hall Patroller", "The Adventure Seeker", "The Engineering Expert"],
    ["The Sports Star", "The Garden Guardian", "The Dorm Philosopher"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q5
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Engineering Expert"],
    ["The Library Scholar", "The Garden Guardian", "The Dorm Philosopher"],
    ["The Hall Patroller", "The Sports Star", "The Arts Critic"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q6
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Dorm Philosopher"],
    ["The Hall Patroller", "The Adventure Seeker", "The Arts Critic"],
    ["The Sports Star", "The Garden Guardian", "The Engineering Expert"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q7
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Arts Critic"],
    ["The Library Scholar", "The Garden Guardian", "The Engineering Expert"],
    ["The Hall Patroller", "The Sports Star", "The Dorm Philosopher"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q8
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Engineering Expert"],
    ["The Hall Patroller", "The Adventure Seeker", "The Dorm Philosopher"],
    ["The Sports Star", "The Garden Guardian", "The Arts Critic"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q9
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Dorm Philosopher"],
    ["The Library Scholar", "The Sports Star", "The Arts Critic"],
    ["The Hall Patroller", "The Garden Guardian", "The Engineering Expert"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q10
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Arts Critic"],
    ["The Hall Patroller", "The Adventure Seeker", "The Engineering Expert"],
    ["The Sports Star", "The Garden Guardian", "The Dorm Philosopher"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q11
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Engineering Expert"],
    ["The Library Scholar", "The Garden Guardian", "The Dorm Philosopher"],
    ["The Hall Patroller", "The Sports Star", "The Arts Critic"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q12
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Dorm Philosopher"],
    ["The Hall Patroller", "The Adventure Seeker", "The Arts Critic"],
    ["The Sports Star", "The Garden Guardian", "The Engineering Expert"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q13
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Arts Critic"],
    ["The Library Scholar", "The Garden Guardian", "The Engineering Expert"],
    ["The Hall Patroller", "The Sports Star", "The Dorm Philosopher"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q14
  [
    ["The Canteen King/Queen", "The Library Scholar", "The Engineering Expert"],
    ["The Hall Patroller", "The Adventure Seeker", "The Dorm Philosopher"],
    ["The Sports Star", "The Garden Guardian", "The Arts Critic"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ],
  // Q15
  [
    ["The Canteen King/Queen", "The Adventure Seeker", "The Dorm Philosopher"],
    ["The Library Scholar", "The Sports Star", "The Arts Critic"],
    ["The Hall Patroller", "The Garden Guardian", "The Engineering Expert"],
    ["The Business Tycoon", "The Adventure Seeker", "The Arts Critic"]
  ]
];

function determineResultPathway(userAnswers) {
  let pool = [...allCats];
  for (let i = 0; i < userAnswers.length; i++) {
    const answerIdx = userAnswers[i];
    pool = pool.filter(cat => answerCatPools[i][answerIdx].includes(cat));
    if (pool.length === 1) break;
  }
  if (pool.length > 1) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return pool[0];
}

// Run the simulation
const resultCounts = {};
for (let i = 0; i < NUM_SIMULATIONS; i++) {
  // Simulate random answers for 15 questions, 4 choices each
  const userAnswers = Array.from({length: 15}, () => Math.floor(Math.random() * 4));
  const result = determineResultPathway(userAnswers);
  resultCounts[result] = (resultCounts[result] || 0) + 1;
}

// Print results
console.log('NTU Cat Quiz Result Distribution after', NUM_SIMULATIONS, 'random completions:');
Object.entries(resultCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
        const percent = ((count / NUM_SIMULATIONS) * 100).toFixed(2);
        console.log(`${cat}: ${count} (${percent}%)`);
    }); 