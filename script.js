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
            { text: "Observe from a distance first", scores: { independence: 1, mood: 1 } },
            { text: "Prefer to keep to myself", scores: { independence: 2, sociability: -1 } },
            { text: "It depends on my mood", scores: { mood: -1, sociability: 1 } }
        ]
    },
    {
        question: "What's your ideal way to spend free time?",
        choices: [
            { text: "Playing and being active", scores: { activity: 2, sociability: 1 } },
            { text: "Relaxing in a quiet spot", scores: { activity: -1, independence: 1 } },
            { text: "Exploring new places", scores: { activity: 1, independence: 2 } },
            { text: "Hanging out with friends", scores: { sociability: 2, mood: 1 } }
        ]
    },
    {
        question: "How do you prefer to eat your meals?",
        choices: [
            { text: "With others, socially", scores: { sociability: 2, independence: -1 } },
            { text: "Alone, at my own pace", scores: { independence: 2, sociability: -1 } },
            { text: "Whenever I feel like it", scores: { independence: 1, mood: -1 } },
            { text: "On a regular schedule", scores: { mood: 2, activity: -1 } }
        ]
    },
    {
        question: "What's your reaction when someone approaches you unexpectedly?",
        choices: [
            { text: "Welcome them warmly", scores: { sociability: 2, mood: 1 } },
            { text: "Stay cautious but curious", scores: { independence: 1, mood: 1 } },
            { text: "Quickly move away", scores: { independence: 2, sociability: -1 } },
            { text: "Depends on how I'm feeling", scores: { mood: -1, activity: 1 } }
        ]
    },
    {
        question: "How do you handle changes in your routine?",
        choices: [
            { text: "Adapt easily and enjoy variety", scores: { activity: 2, mood: -1 } },
            { text: "Prefer sticking to my habits", scores: { mood: 2, independence: 1 } },
            { text: "Go with the flow", scores: { independence: 1, sociability: 1 } },
            { text: "Get a bit stressed", scores: { mood: -1, activity: -1 } }
        ]
    },
    {
        question: "It's lunchtime at North Spine! You spot some students eating chicken rice. What do you do?",
        choices: [
            { text: "Confidently walk up and give them your best pleading eyes", scores: { sociability: 2, appetite: 2 } },
            { text: "Watch from a distance, planning the perfect moment to appear", scores: { independence: 1, curiosity: 1 } },
            { text: "Ignore them - you're a sophisticated cat who doesn't beg", scores: { independence: 2, mood: 1 } },
            { text: "Start meowing dramatically to get attention", scores: { sociability: 2, appetite: 1 } }
        ]
    },
    {
        question: "You discover a new cardboard box near the engineering building. What's your first reaction?",
        choices: [
            { text: "Immediately claim it as your new favorite spot", scores: { curiosity: 2, independence: 1 } },
            { text: "Carefully inspect it from all angles before approaching", scores: { mood: 1, curiosity: 1 } },
            { text: "Ignore it - you prefer your existing sleeping spots", scores: { mood: 2, independence: 1 } },
            { text: "Push it around and play with it", scores: { activity: 2, curiosity: 1 } }
        ]
    },
    {
        question: "A student is trying to study in the library. You decide to...",
        choices: [
            { text: "Sit on their textbook - it's prime napping real estate", scores: { sociability: 2, independence: 1 } },
            { text: "Find a quiet corner nearby for your own study session", scores: { mood: 2, independence: 1 } },
            { text: "Playfully swat at their pencil while they write", scores: { activity: 2, sociability: 1 } },
            { text: "Watch from your bookshelf throne", scores: { independence: 2, mood: 1 } }
        ]
    },
    {
        question: "It's raining at NTU! Where do you take shelter?",
        choices: [
            { text: "Under the nearest shelter with other cats", scores: { sociability: 2, mood: 1 } },
            { text: "Your secret hideout that only you know about", scores: { independence: 2, curiosity: 1 } },
            { text: "The nearest building entrance until someone lets you in", scores: { sociability: 1, appetite: 1 } },
            { text: "Play in the rain! Who needs shelter?", scores: { activity: 2, independence: 1 } }
        ]
    },
    {
        question: "You spot the campus cat feeder approaching! Time to...",
        choices: [
            { text: "Run up to them immediately - FOOD TIME!", scores: { appetite: 2, sociability: 1 } },
            { text: "Wait patiently in line with other cats", scores: { mood: 2, sociability: 1 } },
            { text: "Watch from afar, you'll get food on your own terms", scores: { independence: 2, mood: 1 } },
            { text: "Show off your best tricks to get extra portions", scores: { activity: 2, appetite: 1 } }
        ]
    },
    {
        question: "A student tries to take a selfie with you. Your response?",
        choices: [
            { text: "Strike your best pose - you're basically a model", scores: { sociability: 2, mood: 1 } },
            { text: "Walk away - you're not a tourist attraction", scores: { independence: 2, mood: -1 } },
            { text: "Photobomb their picture in the most dramatic way", scores: { activity: 2, curiosity: 1 } },
            { text: "Allow it, but only if they have treats", scores: { appetite: 2, sociability: 1 } }
        ]
    },
    {
        question: "You notice a new cat in your territory. What's your strategy?",
        choices: [
            { text: "Welcome them with a friendly meow", scores: { sociability: 2, mood: 1 } },
            { text: "Observe them from a distance first", scores: { independence: 1, curiosity: 1 } },
            { text: "Show them who's boss around here", scores: { independence: 2, activity: 1 } },
            { text: "Share your favorite spots - the more the merrier!", scores: { sociability: 2, mood: 2 } }
        ]
    },
    {
        question: "It's a quiet Sunday on campus. How do you spend your day?",
        choices: [
            { text: "Finding new spots to explore", scores: { curiosity: 2, activity: 1 } },
            { text: "Sunbathing in your favorite window", scores: { mood: 2, independence: 1 } },
            { text: "Practicing your parkour skills", scores: { activity: 2, curiosity: 1 } },
            { text: "Visiting all your favorite humans' hangout spots", scores: { sociability: 2, appetite: 1 } }
        ]
    },
    {
        question: "A student drops their food! Quick, what do you do?",
        choices: [
            { text: "Help them clean up (by eating it, obviously)", scores: { appetite: 2, sociability: 1 } },
            { text: "Watch the chaos unfold from a safe distance", scores: { independence: 2, mood: 1 } },
            { text: "Meow sympathetically - you know the feeling", scores: { sociability: 1, mood: 2 } },
            { text: "Investigate the scene for any surviving snacks", scores: { curiosity: 2, appetite: 1 } }
        ]
    },
    {
        question: "Your favorite sleeping spot is occupied by another cat. Your next move?",
        choices: [
            { text: "Find another spot - sharing is caring", scores: { mood: 2, sociability: 1 } },
            { text: "Wait nearby until they leave", scores: { patience: 2, independence: 1 } },
            { text: "Suggest a cuddle pile!", scores: { sociability: 2, mood: 1 } },
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

// Initialize quiz with enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', () => {
        playSound('meow');
        startQuiz();
    });
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

function showResult() {
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    
    const result = determineResult();
    playSound('purring');
    
    // Add a fun bounce animation to the result image
    const resultImage = document.getElementById('result-image');
    resultImage.classList.add('animate__animated', 'animate__bounceIn');
    
    document.getElementById('result-name').textContent = result.name;
    document.getElementById('result-location').textContent = result.location;
    document.getElementById('result-description').textContent = result.description;
    resultImage.src = result.image;
    resultImage.alt = `Picture of ${result.name}`; // Accessibility improvement
    
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
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FF9D5C', '#FFB997', '#FF7F50'],
        angle: 90,
        startVelocity: 30,
        gravity: 0.5,
        shapes: ['circle', 'square'],
        ticks: 200
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

async function shareResult() {
    showLoading('Preparing your result to share...');
    
    try {
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
        `;
        
        // Add decorative elements
        const decoration = document.createElement('div');
        decoration.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('assets/paw-pattern.png');
            opacity: 0.1;
        `;
        container.appendChild(decoration);
        
        container.innerHTML += `
            <h2 style="font-size: 28px; margin-bottom: 20px;">My NTU Cat Personality</h2>
            <div style="
                background: white;
                border-radius: 50%;
                padding: 10px;
                display: inline-block;
                margin: 20px 0;
            ">
                <img src="${document.getElementById('result-image').src}" 
                     alt="Cat Match"
                     style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
            </div>
            <h3 style="font-size: 24px; margin: 15px 0;">${document.getElementById('result-name').textContent}</h3>
            <p style="font-style: italic; margin: 10px 0;">${document.getElementById('result-location').textContent}</p>
            <p style="margin: 15px 0; line-height: 1.5;">${document.getElementById('result-description').textContent}</p>
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
        
        document.body.appendChild(container);
        
        // Generate screenshot
        const canvas = await html2canvas(container);
        document.body.removeChild(container);
        
        // Convert to blob
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        
        // Share or download
        if (navigator.share && navigator.canShare({ files: [new File([blob], 'ntu-cat-result.png', { type: 'image/png' })] })) {
            await navigator.share({
                files: [new File([blob], 'ntu-cat-result.png', { type: 'image/png' })],
                title: 'My NTU Cat Personality',
                text: `I am ${document.getElementById('result-name').textContent}! Take the quiz to find your NTU cat match!`
            });
        } else {
            // Fallback to download
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'ntu-cat-result.png';
            link.click();
        }
    } catch (error) {
        console.error('Share failed:', error);
        alert('Could not share result. Try downloading instead!');
    }
    
    hideLoading();
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