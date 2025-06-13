// Personality dimensions
const scores = {
    sociability: 0,    // How social/friendly with humans
    activity: 0,       // How active/playful
    independence: 0,   // How independent
    mood: 0,          // How consistent in mood
    curiosity: 0,     // How curious/adventurous
    appetite: 0       // Food motivation
};

// Quiz questions
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

// Cat personalities based on survey data
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

let currentQuestion = 0;

// Sound effects
const sounds = {
    meow: document.getElementById('meowSound'),
    purring: document.getElementById('purringSound'),
    click: document.getElementById('clickSound')
};

// Play sound with error handling
function playSound(soundName) {
    try {
        sounds[soundName].currentTime = 0;
        sounds[soundName].play();
    } catch (error) {
        console.log('Sound play failed:', error);
    }
}

// Show loading overlay
function showLoading(message) {
    const overlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = message;
    overlay.style.display = 'flex';
}

// Hide loading overlay
function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// Update progress bar
function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressCat = document.getElementById('progress-cat');
    
    progressFill.style.width = `${progress}%`;
    progressCat.style.left = `${progress}%`;
    
    // Update ARIA attributes
    const progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
}

// 1. Map cat personalities to new images (ensure these files exist in assets/)
const catResultImages = {
    'The Canteen King/Queen': 'assets/DORA.png',
    'The Library Scholar': 'assets/KURO.png',
    'The Hall Patroller': 'assets/SMOKEY.png',
    'The Adventure Seeker': 'assets/MIMI.png',
    'The Sports Star': 'assets/FLYNN.png',
    'The Garden Guardian': 'assets/ALBUS.png',
    'The Engineering Expert': 'assets/BOOTS.png',
    'The Business Tycoon': 'assets/SIMBA.png',
    'The Arts Critic': 'assets/BAST.png',
    'The Dorm Philosopher': 'assets/BANDIT.png',
};

// 2. Add splash CatQuiz.gif to start page
function addSplashGif() {
    let splash = document.getElementById('splash-cat-gif');
    if (!splash) {
        splash = document.createElement('img');
        splash.id = 'splash-cat-gif';
        splash.src = 'assets/CatQuiz.gif';
        splash.alt = 'Welcome Cat';
        splash.style.display = 'block';
        splash.style.margin = '40px auto 32px auto';
        splash.style.width = '420px';
        splash.style.maxWidth = '98vw';
        splash.style.height = 'auto';
        splash.style.borderRadius = '24px';
        splash.style.setProperty('box-shadow', 'none', 'important');
        splash.style.setProperty('filter', 'none', 'important');
        splash.style.setProperty('border', 'none', 'important');
        splash.style.transition = 'transform 0.6s cubic-bezier(.36,1.64,.44,.99)';
        splash.style.transform = 'scale(1.08)';
        splash.onmouseenter = () => splash.style.transform = 'scale(1.13)';
        splash.onmouseleave = () => splash.style.transform = 'scale(1.08)';
        const startPage = document.getElementById('start-page');
        startPage.insertBefore(splash, startPage.children[1]);
    } else {
        splash.style.setProperty('box-shadow', 'none', 'important');
        splash.style.setProperty('filter', 'none', 'important');
        splash.style.setProperty('border', 'none', 'important');
        splash.style.width = '420px';
        splash.style.maxWidth = '98vw';
        splash.style.margin = '40px auto 32px auto';
        splash.style.borderRadius = '24px';
        splash.style.transition = 'transform 0.6s cubic-bezier(.36,1.64,.44,.99)';
        splash.style.transform = 'scale(1.08)';
        splash.onmouseenter = () => splash.style.transform = 'scale(1.13)';
        splash.onmouseleave = () => splash.style.transform = 'scale(1.08)';
    }
}

// Add animated paw print background
function addPawPrintBackground() {
    // Remove existing paw-bg if present
    const oldBg = document.getElementById('paw-bg');
    if (oldBg) oldBg.remove();

    // Create background container
    const pawBg = document.createElement('div');
    pawBg.id = 'paw-bg';
    pawBg.setAttribute('aria-hidden', 'true');
    pawBg.setAttribute('tabindex', '-1');
    pawBg.style.position = 'fixed';
    pawBg.style.top = '0';
    pawBg.style.left = '0';
    pawBg.style.width = '100vw';
    pawBg.style.height = '100vh';
    pawBg.style.zIndex = '1'; // Above background, below content
    pawBg.style.pointerEvents = 'none';
    pawBg.style.overflow = 'hidden';
    pawBg.style.opacity = '0.13';

    // Three-toe paw print SVG (larger)
    const pawSVG =
        `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="48" rx="16" ry="10" fill="#FF9D5C"/>
            <ellipse cx="16" cy="24" rx="6" ry="4" fill="#FF9D5C"/>
            <ellipse cx="32" cy="16" rx="6" ry="4" fill="#FF9D5C"/>
            <ellipse cx="48" cy="24" rx="6" ry="4" fill="#FF9D5C"/>
        </svg>`;

    // Get quiz container bounding box
    const quiz = document.querySelector('.quiz-container');
    let quizRect = {left: 0, right: 0, top: 0, bottom: 0};
    if (quiz) {
        const rect = quiz.getBoundingClientRect();
        quizRect = {
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom
        };
    }

    // Grid-based even spread
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pawSize = 128;
    const cols = Math.floor(vw / pawSize);
    const rows = Math.floor(vh / pawSize);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Center of this cell
            let x = col * pawSize + pawSize / 2;
            let y = row * pawSize + pawSize / 2;
            // Small random offset for naturalness
            x += (Math.random() - 0.5) * pawSize * 0.4;
            y += (Math.random() - 0.5) * pawSize * 0.4;
            // Skip if inside quiz container
            if (
                quiz &&
                x > quizRect.left - pawSize && x < quizRect.right + pawSize &&
                y > quizRect.top - pawSize && y < quizRect.bottom + pawSize
            ) {
                continue;
            }
            // Animate from top right to bottom left
            const paw = document.createElement('span');
            paw.className = 'paw-print';
            paw.innerHTML = pawSVG;
            // Random scale and rotation
            const scale = 0.9 + Math.random() * 0.7;
            const rotate = Math.random() * 360;
            // Random animation duration and delay
            const duration = 10 + Math.random() * 10;
            const delay = Math.random() * 10;
            const startX = x;
            const startY = y;
            const endX = x - vw * 0.4 - Math.random() * vw * 0.2;
            const endY = y + vh * 0.4 + Math.random() * vh * 0.2;
            paw.style.position = 'absolute';
            paw.style.left = `${startX}px`;
            paw.style.top = `${startY}px`;
            paw.style.width = pawSize + 'px';
            paw.style.height = pawSize + 'px';
            paw.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
            paw.style.filter = 'blur(0.5px)';
            paw.style.transition = 'opacity 0.5s';
            paw.style.opacity = '1';
            paw.style.animation = `pawDiagonalMove ${duration}s linear ${delay}s infinite`;
            paw.style.setProperty('--paw-start-x', `${startX}px`);
            paw.style.setProperty('--paw-start-y', `${startY}px`);
            paw.style.setProperty('--paw-end-x', `${endX}px`);
            paw.style.setProperty('--paw-end-y', `${endY}px`);
            pawBg.appendChild(paw);
        }
    }
    document.body.appendChild(pawBg);

    // Add keyframes and base styles via JS
    const style = document.createElement('style');
    style.innerHTML = `
        #paw-bg { pointer-events: none; z-index: 1; }
        .paw-print svg { display: block; }
        @keyframes pawDiagonalMove {
            0% {
                left: var(--paw-start-x);
                top: var(--paw-start-y);
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                left: var(--paw-end-x);
                top: var(--paw-end-y);
                opacity: 0;
            }
        }
        .quiz-container { position: relative; z-index: 2; }
    `;
    document.head.appendChild(style);
}

// Initialize quiz with enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    preloadCatResultImages();
    addPawPrintBackground();
    addSplashGif();
    // Ensure quiz-container is above paw-bg and interactive, with !important
    const quiz = document.querySelector('.quiz-container');
    if (quiz) {
        quiz.style.setProperty('position', 'relative', 'important');
        quiz.style.setProperty('z-index', '10', 'important');
    }
    // Ensure all buttons are above paw-bg, with !important
    document.querySelectorAll('button').forEach(btn => {
        btn.style.setProperty('position', 'relative', 'important');
        btn.style.setProperty('z-index', '11', 'important');
    });
    // Ensure paw-bg is always below, with !important
    const pawBg = document.getElementById('paw-bg');
    if (pawBg) {
        pawBg.style.setProperty('z-index', '1', 'important');
        pawBg.style.setProperty('pointer-events', 'none', 'important');
    }
    // Force repaint
    void document.body.offsetHeight;
    document.getElementById('start-button').addEventListener('click', () => {
        playSound('meow');
        startQuiz();
    });
    setTimeout(applyDarkTextColor, 100);
});

function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    updateProgress();
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    // Fade out current question
    container.classList.remove('animate__fadeIn');
    container.classList.add('animate__fadeOut');
    
    setTimeout(() => {
        document.getElementById('question-text').textContent = question.question;
        
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        
        question.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button animate__animated animate__fadeIn';
            button.style.animationDelay = `${index * 0.1}s`;
            button.textContent = choice.text;
            button.addEventListener('click', () => handleChoice(choice));
            choicesContainer.appendChild(button);
        });
        
        // Fade in new question
        container.classList.remove('animate__fadeOut');
        container.classList.add('animate__fadeIn');
        updateProgress();
    }, 300);
}

// 1. List of all cats
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

// 2. Pathway mapping for each answer of each question
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

// 3. Track user answers as indices
let userAnswers = [];

// 4. Update handleChoice to record answer index
function handleChoice(choice) {
    playSound('click');
    // Record the index of the selected answer
    const question = questions[currentQuestion];
    const answerIdx = questions[currentQuestion].choices.findIndex(c => c === choice);
    userAnswers.push(answerIdx);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showLoading('Finding your purr-fect match...');
        setTimeout(() => {
            showResult();
            hideLoading();
        }, 400); // Reduced delay for faster result
    }
}

// 5. New result determination logic
function determineResult() {
    try {
        let pool = [...allCats];
        let lastNonEmptyPool = [...allCats];
        for (let i = 0; i < userAnswers.length; i++) {
            const answerIdx = userAnswers[i];
            // Defensive: check if answerCatPools[i] and answerCatPools[i][answerIdx] exist
            if (!answerCatPools[i] || !answerCatPools[i][answerIdx]) {
                // If mapping is missing, break and randomize from last non-empty pool
                break;
            }
            pool = pool.filter(cat => answerCatPools[i][answerIdx].includes(cat));
            if (pool.length === 1) break;
            if (pool.length > 0) lastNonEmptyPool = [...pool];
        }
        if (pool.length === 1) return catProfiles[Object.keys(catProfiles).find(key => catProfiles[key].name === pool[0])];
        if (pool.length > 1) return catProfiles[Object.keys(catProfiles).find(key => catProfiles[key].name === pool[Math.floor(Math.random() * pool.length)])];
        // If pool is empty, pick randomly from last non-empty pool
        return catProfiles[Object.keys(catProfiles).find(key => catProfiles[key].name === lastNonEmptyPool[Math.floor(Math.random() * lastNonEmptyPool.length)])];
    } catch (e) {
        // On any error, return a random cat
        const catNames = Object.values(catProfiles).map(c => c.name);
        const randomName = catNames[Math.floor(Math.random() * catNames.length)];
        return catProfiles[Object.keys(catProfiles).find(key => catProfiles[key].name === randomName)];
    }
}

// 6. Reset userAnswers on restart
function restartQuiz() {
    playSound('meow');
    userAnswers = [];
    currentQuestion = 0;
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('start-page').style.display = 'block';
}

// 3. Remove border and shadow from result image, and set correct image
function showResult() {
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    const result = determineResult();
    playSound('purring');
    const resultImage = document.getElementById('result-image');
    resultImage.classList.add('animate__animated', 'animate__bounceIn');
    document.getElementById('result-name').textContent = result.name;
    document.getElementById('result-location').textContent = result.location;
    document.getElementById('result-description').textContent = result.description;
    // Use new image if available
    let catImgSrc = catResultImages[result.name] || result.image;
    resultImage.src = catImgSrc;
    resultImage.alt = `Picture of ${result.name}`;
    // Remove border and shadow
    resultImage.style.borderRadius = '0';
    resultImage.style.boxShadow = 'none';
    resultImage.style.background = 'none';
    setTimeout(applyDarkTextColor, 100);
    // Update action buttons with icons
    const actionButtons = document.querySelectorAll('.action-buttons button');
    actionButtons.forEach(button => {
        // Add icons only if not already present
        if (button.id === 'share-result-btn' && !button.innerHTML.includes('📤')) {
            button.innerHTML = button.textContent.trim() + ' <span aria-hidden="true" style="margin-left:6px;">📤</span>';
        }
        if (button.id === 'restart-btn' && !button.innerHTML.includes('🔄')) {
            button.innerHTML = button.textContent.trim() + ' <span aria-hidden="true" style="margin-left:6px;">🔄</span>';
        }
        button.setAttribute('tabindex', '0');
        button.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9D5C', '#FFB997', '#FF7F50'],
        angle: 90,
        startVelocity: 30,
        gravity: 0.5,
        shapes: ['circle', 'square'],
        ticks: 200
    });
    const realCatMatch = findRealCatMatch(result.name);
    // Show a loading placeholder for stats with the catloading.gif
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '<div style="padding:40px 0; font-size:1.1em; color:#7a0607; display:flex; flex-direction:column; align-items:center; justify-content:center;"><img src="assets/catloading.gif" alt="Loading..." style="width:64px;height:64px;display:block;margin-bottom:16px;"><span>Loading stats...</span></div>';
    updateQuizStatistics(result, realCatMatch);

    // --- Cat Preview Section ---
    let previewSection = document.getElementById('cat-preview-section');
    if (!previewSection) {
        previewSection = document.createElement('div');
        previewSection.id = 'cat-preview-section';
        previewSection.style.marginTop = '32px';
        previewSection.style.textAlign = 'center';
        previewSection.innerHTML = `
            <button id="toggle-preview-btn" class="cta-button animate__animated" style="margin-bottom:18px;opacity:0;">Show All Cat Personalities <span aria-hidden="true" style="margin-left:6px;">👁️</span></button>
            <div id="cat-preview-grid" style="display:none;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:18px;justify-items:center;align-items:stretch;margin-top:10px;"></div>
        `;
        // Insert after action-buttons
        const actionButtonsContainer = document.querySelector('.result-page .action-buttons');
        if (actionButtonsContainer && actionButtonsContainer.parentNode) {
            actionButtonsContainer.parentNode.insertBefore(previewSection, actionButtonsContainer.nextSibling);
        } else {
            document.querySelector('.result-page .result-content').appendChild(previewSection);
        }
        // Accessibility
        const toggleBtn = previewSection.querySelector('#toggle-preview-btn');
        toggleBtn.setAttribute('tabindex', '0');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-controls', 'cat-preview-grid');
        toggleBtn.setAttribute('aria-label', 'Show or hide all cat personalities');
        toggleBtn.addEventListener('click', () => {
            const grid = document.getElementById('cat-preview-grid');
            const isOpen = grid.style.display === 'grid';
            if (!isOpen) {
                grid.classList.remove('animate__fadeOut');
                grid.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                grid.classList.remove('animate__fadeIn');
                grid.classList.add('animate__fadeOut');
            }
            grid.style.display = isOpen ? 'none' : 'grid';
            toggleBtn.textContent = isOpen ? 'Show All Cat Personalities ' : 'Hide All Cat Personalities ';
            if (!isOpen) toggleBtn.innerHTML += '<span aria-hidden="true" style="margin-left:6px;">👁️</span>';
            else toggleBtn.innerHTML += '<span aria-hidden="true" style="margin-left:6px;">👁️</span>';
            toggleBtn.setAttribute('aria-expanded', !isOpen);
        });
    }
    // Fill the grid
    const grid = document.getElementById('cat-preview-grid');
    grid.innerHTML = '';
    grid.style.display = 'none'; // Always start hidden
    grid.classList.remove('animate__fadeIn', 'animate__fadeOut', 'animate__animated');
    grid.style.gridTemplateColumns = 'repeat(auto-fit,minmax(180px,1fr))';
    grid.style.gap = '18px';
    grid.style.justifyItems = 'center';
    grid.style.alignItems = 'stretch';
    Object.values(catProfiles).forEach(cat => {
        const imgSrc = catResultImages[cat.name] || cat.image;
        const card = document.createElement('div');
        card.style.background = 'var(--white)';
        card.style.borderRadius = '16px';
        card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
        card.style.padding = '18px 10px 12px 10px';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'flex-start';
        card.style.minHeight = '260px';
        card.style.maxWidth = '210px';
        card.style.width = '100%';
        card.innerHTML = `
            <img src="${imgSrc}" alt="${cat.name}" style="width:100px;height:100px;object-fit:cover;border-radius:12px;margin-bottom:10px;">
            <div style="font-weight:700;font-size:1.1em;color:#7a0607;margin-bottom:6px;">${cat.name}</div>
            <div style="font-size:0.95em;color:#7a0607;opacity:0.85;margin-bottom:8px;">${cat.location}</div>
            <div style="font-size:0.93em;color:#7a0607;opacity:0.8;">${cat.description}</div>
        `;
        grid.appendChild(card);
    });
    // Fade in the preview button after action buttons
    setTimeout(() => {
        const toggleBtn = document.getElementById('toggle-preview-btn');
        if (toggleBtn) {
            toggleBtn.style.opacity = '1';
            toggleBtn.classList.add('animate__fadeIn');
        }
    }, 300);
}

// 4. Change all dark text to #7a0607
function applyDarkTextColor() {
    // Main quiz text
    const darkTextSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', '.small', '#question-text', '.stats-number', '.stats-desc', '.stats-header', '.result-content', '.credits', '.cta', '.choice-button', '.start-button', '.share-button', '.restart-button', '.cta-button', '.action-buttons button', '#result-location', '.quiz-container', '.stats-item', '.stats-grid', '.stats-header', '.stats-desc', '.result-page', '.quiz-page', '.start-page', '#choices', '#question-container', '#result-name', '#result-description', '#result-location', '#loading-text'
    ];
    darkTextSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.color = '#7a0607';
        });
    });
    // Also update inline styles for stats
    document.querySelectorAll('.stats-number, .stats-desc, .stats-header, .result-content, .credits, .cta, .small').forEach(el => {
        el.style.color = '#7a0607';
    });
    // Ensure all quiz buttons have white text
    const buttonSelectors = ['.start-button', '.choice-button', '.share-button', '.restart-button', '.cta-button', '.action-buttons button'];
    buttonSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.setProperty('color', '#fff', 'important');
        });
    });
}

// Find the matching real cat based on personality type
function findRealCatMatch(personalityType) {
    // Map personality types to real cats
    const personalityToCatMap = {
        "The Canteen King/Queen": "Dora",
        "The Library Scholar": "Kuro",
        "The Hall Patroller": "Smokey",
        "The Adventure Seeker": "Mimi",
        "The Sports Star": "Flynn", // This was incorrectly mapped - Flynn is the Sports Star
        "The Garden Guardian": "Albus",
        "The Engineering Expert": "Boots",
        "The Business Tycoon": "Simba",
        "The Arts Critic": "Bast",
        "The Dorm Philosopher": "Bandit"
    };
    
    const catName = personalityToCatMap[personalityType];
    return catName && catData[catName] ? { name: catName, ...catData[catName] } : null;
}

// Update the statistics function to include real cat data
async function updateQuizStatistics(result, realCatMatch) {
    try {
        // Update total count for this result
        const resultRef = database.ref(`results/${result.name.replace(/[/.]/g, '_')}`);
        await resultRef.transaction(current => (current || 0) + 1);
        
        // Update timestamp for latest statistics
        await database.ref('lastUpdated').set(firebase.database.ServerValue.TIMESTAMP);
        
        // Fetch and display statistics with real cat data
        await displayEnhancedStatistics(result, realCatMatch);
    } catch (error) {
        console.error('Error updating statistics:', error);
        // Still try to display statistics with real cat data even if Firebase fails
        displayEnhancedStatistics(result, realCatMatch);
    }
}

// Enhanced statistics display with real cat data
async function displayEnhancedStatistics(result, realCatMatch) {
    const statsContainer = document.getElementById('stats-container');
    
    try {
        // Fetch all results from Firebase
        let results = {};
        let totalResponses = 0;
        let mostCommon = ["Unknown", 0];
        let sameResultPercentage = "0.0";
        
        try {
            const snapshot = await database.ref('results').once('value');
            results = snapshot.val() || {};
            
            // Calculate total responses
            totalResponses = Object.values(results).reduce((a, b) => a + b, 0);
            
            // Find most common result
            mostCommon = Object.entries(results)
                .sort((a, b) => b[1] - a[1])[0] || ["Unknown", 0];
            
            // Calculate percentage of people with same result
            const sameResultCount = results[result.name.replace(/[/.]/g, '_')] || 1;
            sameResultPercentage = ((sameResultCount / totalResponses) * 100).toFixed(1);
        } catch (e) {
            console.error('Error fetching Firebase data:', e);
            // Continue with default values
        }
        
        // Create base statistics HTML
        let statsHTML = `
            <div class="stats-grid">
                <div class="stats-header">
                    <h3>Quiz Statistics</h3>
                    <p class="small">Based on ${totalResponses} responses</p>
                </div>
                
                <div class="stats-grid-container">
                    <div class="stats-item">
                        <h4>Your Cat Twin Club</h4>
                        <p class="stats-number">${sameResultPercentage}%</p>
                        <div class="twin-club-visual">
                            <div class="twin-club-bar" style="width: ${sameResultPercentage}%"></div>
                        </div>
                        <p class="stats-desc">of quiz takers share your personality type</p>
                    </div>
                    
                    <div class="stats-item">
                        <h4>Most Popular Cat</h4>
                        <p class="stats-number">${mostCommon[0].replace(/_/g, ' ')}</p>
                        <div class="popular-cat-visual">
                            <div class="popular-cat-icon">👑</div>
                        </div>
                        <p class="stats-desc">${mostCommon[1]} responses</p>
                    </div>
        `;
        
        // Add real cat data if available
        if (realCatMatch) {
            statsHTML += `
                    <div class="stats-item real-cat-match">
                        <h4>Your Real Cat Match</h4>
                        <p class="stats-number">${realCatMatch.name}</p>
                        <p class="stats-desc">You share personality traits with ${realCatMatch.name}, a real NTU campus cat!</p>
                    </div>
                    
                    <div class="stats-item">
                        <h4 style="color:#7a0607;">Cat Fun Fact</h4>
                        <p class="stats-desc" style="color:#7a0607;">${realCatMatch.funFact}</p>
                    </div>
                </div>
                
                <!-- Real Cat Details Section -->
                <!--  <div class="real-cat-section">
                    <h3>Meet Your Real Cat Match: ${realCatMatch.name}</h3>
                    
                    <div class="real-cat-info">
                        <div class="info-item">
                            <h4>Personality</h4>
                            <p>${realCatMatch.personality}</p>
                        </div>
                    </div> -->
                    
                    <div class="real-cat-details">
                        <div class="social-meter">
                            <h4>Social Style</h4>
                            ${generateSocialMeter(realCatMatch.socialStyle)}
                        </div>
                        
                        <div class="mood-chart">
                            <h4>Mood Distribution</h4>
                            <div class="mood-bars">
                                ${generateMoodBars(realCatMatch.moods)}
                            </div>
                        </div>
                        
                        <div class="location-map">
                            <h4>Where to Find ${realCatMatch.name}</h4>
                            ${generateLocationMap(realCatMatch.locations)}
                        </div>
                        
                        <div class="activities">
                            <h4>Common Activities</h4>
                            <ul>
                                ${realCatMatch.activities.map(activity => `<li>${activity}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Fallback if no real cat match
            statsHTML += `
                    <div class="stats-item">
                        <h4 style="color:#7a0607;">Fun Fact</h4>
                        <p class="stats-desc" style="color:#7a0607;">${getFunFact(result)}</p>
                    </div>
                    
                    <div class="stats-item">
                        <h4>Cat Compatibility</h4>
                        <p class="stats-desc">${getCompatibility(result)}</p>
                    </div>
                </div>
            `;
        }
        
        statsHTML += `</div>`;
        statsContainer.innerHTML = statsHTML;
        
        // Animate the mood bars after they're added to the DOM
        setTimeout(() => {
            const moodBars = document.querySelectorAll('.mood-bar-fill');
            moodBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
            
            const moodEmojis = document.querySelectorAll('.mood-emoji');
            moodEmojis.forEach(emoji => {
                const left = emoji.getAttribute('data-left');
                emoji.style.left = left + '%';
            });
            
            // Animate twin club bar
            const twinClubBar = document.querySelector('.twin-club-bar');
            if (twinClubBar) {
                const width = twinClubBar.style.width;
                twinClubBar.style.width = '0';
                setTimeout(() => {
                    twinClubBar.style.width = width;
                }, 100);
            }
        }, 100);
    } catch (error) {
        console.error('Error displaying statistics:', error);
        statsContainer.innerHTML = '<p>Statistics temporarily unavailable</p>';
    }
}

// Generate mood bars for visualization with emojis
function generateMoodBars(moods) {
    if (!moods) return '<p>No mood data available</p>';
    
    const moodEmojis = {
        'Happy': '😺',
        'Hungry': '😋',
        'Moody': '😾',
        'Sleepy': '😴',
        'Affectionate': '😻',
        'No Thoughts': '😶',
        'Hangry': '😾',
        'Adventurous': '😼',
        'Friendly': '😸',
        'Neutral': '🐱'
    };
    
    return Object.entries(moods)
        .map(([mood, percentage]) => {
            const emoji = moodEmojis[mood] || '🐱';
            return `
                <div class="mood-bar-container">
                    <span class="mood-label">${mood}</span>
                    <div class="mood-bar-bg">
                        <div class="mood-bar-fill" data-width="${percentage}" style="width: 0%"></div>
                        <span class="mood-emoji" data-left="${percentage}" style="left: 0%">${emoji}</span>
                    </div>
                    <span class="mood-percentage">${percentage}%</span>
                </div>
            `;
        }).join('');
}

// Generate a visual location map
function generateLocationMap(locations) {
    if (!locations || !locations.length) return '<p>No location data available</p>';
    
    // Create a simple grid map
    let mapHTML = `
        <div class="map-container">
            <div class="map-bg"></div>
    `;
    
    // Place location points on the map
    locations.forEach((location, index) => {
        // Generate pseudo-random positions based on location name
        const hash = hashString(location);
        const x = 20 + (hash % 60); // 20-80% of width
        const y = 20 + ((hash * 13) % 60); // 20-80% of height
        
        mapHTML += `
            <div class="location-point" 
                 style="left: ${x}%; top: ${y}%;" 
                 data-name="${location}">
            </div>
        `;
    });
    
    mapHTML += `</div>`;
    return mapHTML;
}

// Generate a social meter visualization
function generateSocialMeter(socialStyle) {
    if (!socialStyle) return '<p>No social data available</p>';
    
    // Determine position on social scale (0-100)
    let position = 50; // Default to middle (neutral)
    
    if (socialStyle.includes('ignores') || socialStyle.includes('skittish')) {
        position = 10; // Shy
    } else if (socialStyle.includes('observe') || socialStyle.includes('distance')) {
        position = 30; // Reserved
    } else if (socialStyle.includes('sometimes') || socialStyle.includes('depending')) {
        position = 50; // Neutral
    } else if (socialStyle.includes('approaches') || socialStyle.includes('interacts')) {
        position = 70; // Friendly
    } else if (socialStyle.includes('very social') || socialStyle.includes('lap') || socialStyle.includes('affectionate')) {
        position = 90; // Very social
    }
    
    // Get description based on position
    let description = '';
    if (position <= 20) {
        description = 'Prefers to keep to themselves most of the time';
    } else if (position <= 40) {
        description = 'Observes from a distance before deciding to interact';
    } else if (position <= 60) {
        description = 'Balances independence with social interaction';
    } else if (position <= 80) {
        description = 'Generally friendly and approachable';
    } else {
        description = 'Very social and loves human interaction';
    }
    
    return `
        <div class="social-scale-labels">
            <span>Shy</span>
            <span> </span>
            <span>Neutral</span>
            <span> </span>
            <span>Social</span>
        </div>
        <div class="social-scale">
            <div class="social-scale-bar"></div>
            <div class="social-marker" style="left: ${position}%"></div>
        </div>
        <p class="social-description">${description}</p>
    `;
}

// Simple hash function for generating pseudo-random positions
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

async function shareResult() {
    // Use the loading gif in the loading overlay
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        const loadingContent = overlay.querySelector('.loading-content');
        if (loadingContent) {
            loadingContent.innerHTML = `<img src="assets/catloading.gif" alt="Loading..." style="width:64px;height:64px;display:block;margin:0 auto 20px;">` +
                `<p id="loading-text">Preparing your result to share...</p>`;
        }
    }
    try {
        // Get the result and real cat match
        const result = determineResult();
        const realCatMatch = findRealCatMatch(result.name);
        // Get stats from the result screen if available
        let statsText = '';
        const statsNumber = document.querySelector('.stats-number');
        const statsDesc = document.querySelector('.stats-desc');
        if (statsNumber && statsDesc) {
            statsText = `<div style='margin:12px 0 0 0; font-size:18px; color:#FF7F50; font-weight:600;'>${statsNumber.textContent}</div><div style='font-size:14px; color:#7a0607; margin-top:2px;'>${statsDesc.textContent}</div>`;
        }
        // Always use the correct PNG for the share image
        let catImgSrc = catResultImages[(result.name || '').trim()] || result.image || 'assets/placeholder.png';
        let qrImgSrc = 'assets/qrcode.png';
        // Preload both images before rendering
        const loadImage = src => new Promise(res => { const i = new window.Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
        const [catImg, qrImg] = await Promise.all([loadImage(catImgSrc), loadImage(qrImgSrc)]);
        // Create a visually pleasing card layout
        const container = document.createElement('div');
        container.className = 'result-screenshot';
        container.style.cssText = `
            background: linear-gradient(135deg, #FFF2D8 60%, #FFB997 100%);
            padding: 32px 20px 24px 20px;
            border-radius: 32px;
            color: #7a0607;
            max-width: 420px;
            min-width: 320px;
            text-align: center;
            position: relative;
            overflow: hidden;
            font-family: 'Quicksand', sans-serif;
            box-shadow: 0 8px 32px rgba(255,157,92,0.18), 0 2px 8px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
        `;
        // Decorative paw print (optional)
        container.innerHTML += `<div style='position:absolute;top:10px;left:10px;opacity:0.10;'><img src='assets/catloading.gif' style='width:36px;height:36px;'></div>`;
        // Main content
        let contentHTML = `
            <h2 style="font-size: 25px; margin-bottom: 10px; font-weight: 700; color:#FF7F50;">My NTU Cat Personality</h2>
            <div style="display: inline-block; margin: 10px 0 8px 0;">
                <img src="${catImg && catImg.src ? catImg.src : 'assets/placeholder.png'}" alt="Cat Match" style="width: 140px; height: 140px;">
            </div>
            <h3 style="font-size: 21px; margin: 10px 0 0 0; font-weight: 700; color:#7a0607;">${result.name}</h3>
            <p style="font-style: italic; margin: 6px 0 10px 0; color:#FF9D5C;">${result.location}</p>
            <p style="margin: 10px 0 14px 0; line-height: 1.5; color:#7a0607;">${result.description}</p>
        `;
        // Add real cat match if available
        if (realCatMatch) {
            contentHTML += `
                <div style="margin: 14px 0 0 0; background: linear-gradient(90deg,#FFB997 60%,#FF9D5C 100%); padding: 12px 8px; border-radius: 16px; color: #fff;">
                    <h4 style="font-size: 15px; margin-bottom: 4px; color:#fff;">Your Real Cat Match: ${realCatMatch.name}</h4>
                    <div style="font-size: 12px; margin-bottom: 2px; color:#fff;">${realCatMatch.locations.join(', ')}</div>
                    <div style="font-size: 12px; color:#fff;">${realCatMatch.funFact}</div>
                </div>
            `;
        }
        // Add stats if available
        if (statsText) {
            contentHTML += `<div style='margin:14px 0 0 0;'>${statsText}</div>`;
        }
        // Add QR code at the bottom for sharing
        contentHTML += `
            <div style="margin-top: 16px; display: flex; flex-direction: column; align-items: center;">
                <img src="${qrImg && qrImg.src ? qrImg.src : 'assets/placeholder.png'}" alt="Quiz QR Code" style="width: 80px; height: 80px; margin-bottom: 4px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); background: #fff;">
                <div style="font-size: 11px; color: #FF7F50; opacity: 0.8;">Scan to take the quiz!</div>
            </div>
        `;
        // Add footer
        contentHTML += `
            <div style="margin-top: 16px; padding-top: 10px; border-top: 1px solid #FFB99733; font-size: 12px; color:#FF7F50;">
                Take the quiz at: <b>Which NTU Cat Are You?</b><br>
                Created by Friday Furries x CMN
            </div>
        `;
        container.innerHTML += contentHTML;
        // Append to body temporarily (hidden)
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        document.body.appendChild(container);
        // Generate image
        const canvas = await html2canvas(container, {
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true
        });
        document.body.removeChild(container);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        if (navigator.share && navigator.canShare({ files: [new File([blob], 'ntu-cat-quiz-result.png', { type: 'image/png' })] })) {
            await navigator.share({
                title: 'My NTU Cat Personality',
                text: `I am ${result.name}! Take the quiz to find your NTU cat match.`,
                files: [new File([blob], 'ntu-cat-quiz-result.png', { type: 'image/png' })]
            });
        } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ntu-cat-quiz-result.png';
            a.click();
            URL.revokeObjectURL(url);
        }
        if (overlay) overlay.style.display = 'none';
    } catch (error) {
        if (overlay) overlay.style.display = 'none';
        console.error('Error sharing result:', error);
        alert('Sorry, there was an error sharing your result. Please try again.');
    }
}

function getFunFact(result) {
    const facts = {
        'The Canteen King/Queen': 'Did you know? The most successful food court cats can recognize over 20 different regular students!',
        'The Library Scholar': 'Library cats have been observed following the same study schedules as students during exam periods!',
        'The Hall Patroller': 'Hall cats have been known to escort students back to their rooms late at night!',
        'The Adventure Seeker': 'ADM cats are often spotted in student art projects and installations!',
        'The Sports Star': 'The Wave\'s resident cats sometimes join morning yoga sessions!',
        'The Garden Guardian': 'These cats help maintain the garden by keeping pests away!',
        'The Engineering Expert': 'Engineering cats have mastered the automatic doors\' sensors!',
        'The Business Tycoon': 'Business School cats are often seen networking at student events!',
        'The Arts Critic': 'These cats have been known to attend outdoor performances!',
        'The Dorm Philosopher': 'Graduate hall cats often attend thesis defense practices!'
    };
    return facts[result.name] || 'NTU cats have been part of campus life for over 30 years!';
}

function getCompatibility(result) {
    const compatibility = {
        'The Canteen King/Queen': 'Best friends with The Hall Patroller - they share food territory!',
        'The Library Scholar': 'Often seen with The Garden Guardian during quiet hours.',
        'The Hall Patroller': 'Partners with The Canteen King/Queen for optimal snack opportunities!',
        'The Adventure Seeker': 'Frequently explores with The Sports Star!',
        'The Sports Star': 'Teams up with The Adventure Seeker for campus adventures!',
        'The Garden Guardian': 'Meditates with The Library Scholar during peaceful afternoons.',
        'The Engineering Expert': 'Collaborates with The Business Tycoon on strategic planning!',
        'The Business Tycoon': 'Networks with The Engineering Expert for innovative solutions!',
        'The Arts Critic': 'Creates masterpieces with The Adventure Seeker!',
        'The Dorm Philosopher': 'Shares wisdom with The Library Scholar!'
    };
    return compatibility[result.name] || 'Gets along well with all campus cats!';
}

// Preload all result images for robustness
const preloadCatResultImages = () => {
    Object.values(catResultImages).forEach(src => {
        const img = new window.Image();
        img.src = src;
    });
}; 