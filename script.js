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

// Initialize quiz with enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    addSplashGif();
    document.getElementById('start-button').addEventListener('click', () => {
        playSound('meow');
        startQuiz();
    });
    // 4. Change all dark text to #7a0607 on load
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

function handleChoice(choice) {
    playSound('click');
    
    // Update scores
    Object.entries(choice.scores).forEach(([dimension, value]) => {
        scores[dimension] += value;
    });
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showLoading('Finding your purr-fect match...');
        setTimeout(() => {
            showResult();
            hideLoading();
        }, 2000);
    }
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
    resultImage.src = catResultImages[result.name] || result.image;
    resultImage.alt = `Picture of ${result.name}`;
    // Remove border and shadow
    resultImage.style.borderRadius = '0';
    resultImage.style.boxShadow = 'none';
    resultImage.style.background = 'none';
    // 4. Change all dark text to #7a0607 on result
    setTimeout(applyDarkTextColor, 100);
    
    // Add keyboard navigation for buttons
    const actionButtons = document.querySelectorAll('.action-buttons button');
    actionButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
        button.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    // Add confetti effect
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
    
    // Find the matching real cat
    const realCatMatch = findRealCatMatch(result.name);
    
    // Update and display statistics with real cat data
    updateQuizStatistics(result, realCatMatch);
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

function determineResult() {
    // Find best matching cat profile based on scores
    let bestMatch = null;
    let highestMatch = -Infinity;
    
    Object.entries(catProfiles).forEach(([profile, data]) => {
        let matchScore = 0;
        Object.entries(data.threshold).forEach(([trait, value]) => {
            const diff = Math.abs(scores[trait] - value);
            matchScore -= diff; // Higher is better
        });
        
        if (matchScore > highestMatch) {
            highestMatch = matchScore;
            bestMatch = data;
        }
    });
    
    return bestMatch;
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
                        <h4>Cat Fun Fact</h4>
                        <p class="stats-desc">${realCatMatch.funFact}</p>
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
                        <h4>Fun Fact</h4>
                        <p class="stats-desc">${getFunFact(result)}</p>
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
    showLoading('Preparing your result to share...');
    
    try {
        // Get the result and real cat match
        const result = determineResult();
        const realCatMatch = findRealCatMatch(result.name);
        
        // Create a temporary container for the screenshot
        const container = document.createElement('div');
        container.className = 'result-screenshot';
        container.style.cssText = `
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            padding: 40px;
            border-radius: 20px;
            color: white;
            max-width: 600px;
            text-align: center;
            position: relative;
            overflow: hidden;
            font-family: "Quicksand", sans-serif;
        `;
        
        // Add decorative elements
        const decoration = document.createElement('div');
        decoration.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M10,8 C8,6 8,4 10,2 C12,4 12,6 10,8 Z M10,8 C12,10 12,12 10,14 C8,12 8,10 10,8 Z M20,8 C18,6 18,4 20,2 C22,4 22,6 20,8 Z M20,8 C22,10 22,12 20,14 C18,12 18,10 20,8 Z M15,13 C13,11 13,9 15,7 C17,9 17,11 15,13 Z M15,13 C17,15 17,17 15,19 C13,17 13,15 15,13 Z" fill="rgba(255,255,255,0.1)"/></svg>');
            opacity: 0.2;
        `;
        container.appendChild(decoration);
        
        // Add content
        let contentHTML = `
            <h2 style="font-size: 28px; margin-bottom: 20px; font-weight: 700;">My NTU Cat Personality</h2>
            <div style="
                background: white;
                border-radius: 50%;
                padding: 10px;
                display: inline-block;
                margin: 20px 0;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            ">
                <img src="${document.getElementById('result-image').src}" 
                     alt="Cat Match"
                     style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
            </div>
            <h3 style="font-size: 24px; margin: 15px 0; font-weight: 700;">${result.name}</h3>
            <p style="font-style: italic; margin: 10px 0;">${result.location}</p>
            <p style="margin: 15px 0; line-height: 1.5;">${result.description}</p>
        `;
        
        // Add real cat match if available
        if (realCatMatch) {
            contentHTML += `
                <div style="
                    margin-top: 30px;
                    background: rgba(255,255,255,0.2);
                    padding: 20px;
                    border-radius: 15px;
                ">
                    <h3 style="font-size: 20px; margin-bottom: 15px;">My Real Cat Match: ${realCatMatch.name}</h3>
                    <p style="margin: 10px 0; line-height: 1.5;">
                        <strong>Find me at:</strong> ${realCatMatch.locations.join(', ')}
                    </p>
                    <p style="margin: 10px 0; line-height: 1.5;">
                        <strong>Fun Fact:</strong> ${realCatMatch.funFact}
                    </p>
                </div>
            `;
        }
        
        // Add footer
        contentHTML += `
            <div style="
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid rgba(255,255,255,0.2);
                font-size: 14px;
            ">
                <p>Take the quiz at: Which NTU Cat Are You?</p>
                <p>Created by Friday Furries x CMN</p>
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
        
        // Remove temporary container
        document.body.removeChild(container);
        
        // Convert to blob
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        
        // Share
        if (navigator.share && navigator.canShare({ files: [new File([blob], 'ntu-cat-quiz-result.png', { type: 'image/png' })] })) {
            await navigator.share({
                title: 'My NTU Cat Personality',
                text: `I am ${result.name}! Take the quiz to find your NTU cat match.`,
                files: [new File([blob], 'ntu-cat-quiz-result.png', { type: 'image/png' })]
            });
        } else {
            // Fallback for browsers that don't support sharing files
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ntu-cat-quiz-result.png';
            a.click();
            URL.revokeObjectURL(url);
        }
        
        hideLoading();
    } catch (error) {
        console.error('Error sharing result:', error);
        hideLoading();
        alert('Sorry, there was an error sharing your result. Please try again.');
    }
}

function restartQuiz() {
    playSound('meow');
    // Reset scores
    Object.keys(scores).forEach(key => scores[key] = 0);
    currentQuestion = 0;
    
    // Show start page
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('start-page').style.display = 'block';
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