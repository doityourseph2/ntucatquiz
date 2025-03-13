// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEjYM88LMBaFH7xVTviVuSRBVDmp9eQM",
  authDomain: "ntu-cat-quiz.firebaseapp.com",
  projectId: "ntu-cat-quiz",
  databaseURL: "https://ntu-cat-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "ntu-cat-quiz.appspot.com",
  messagingSenderId: "1058077903126",
  appId: "1:1058077903126:web:0646f8c8a12a3f22a02837"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Pre-processed cat data from CSV files
const catData = {
  "Dora": {
    personality: "The Canteen King/Queen",
    locations: ["SPMS", "CCEB LV4"],
    moods: {
      "Happy": 40,
      "Moody": 30,
      "No thoughts": 30
    },
    activities: ["Stealing Boot's food", "Climbing into laps", "Sleeping / Resting"],
    socialStyle: "Approaches and interacts",
    funFact: "Dora is known for climbing into people's laps and never moving off!"
  },
  "Mimi": {
    personality: "The Adventure Seeker",
    locations: ["Hall 2, Blk 7", "Longkangs"],
    moods: {
      "Hangry": 60,
      "Adventurous": 40
    },
    activities: ["Fighting other cats", "Climbing objects", "Going on adventures"],
    socialStyle: "Follows when interested, ignores when not",
    funFact: "Mimi regularly goes MIA for adventures and loves to explore longkangs!"
  },
  "Kuro": {
    personality: "The Library Scholar",
    locations: ["H13 Bike Racks", "Under Cars", "Blk 62"],
    moods: {
      "Sleepy": 50,
      "Affectionate": 30,
      "Moody": 20
    },
    activities: ["Sleeping / Resting", "Playing with Tama"],
    socialStyle: "Approaches and interacts calmly",
    funFact: "Kuro is described as 'zennn' by students who know him well!"
  },
  "Smokey": {
    personality: "The Hall Patroller",
    locations: ["Under cars", "Blk 52", "Hall 11"],
    moods: {
      "Hungry": 40,
      "Affectionate": 30,
      "Moody": 30
    },
    activities: ["Hunting", "Sleeping / Resting"],
    socialStyle: "Nice when hungry or raining, ignores after",
    funFact: "Smokey has been described as 'lowkey bipolar' with favorite humans!"
  },
  "Bast": {
    personality: "The Arts Critic",
    locations: ["Reading Room", "North Hill"],
    moods: {
      "Moody": 70,
      "Affectionate": 30
    },
    activities: ["Avoiding Simba", "Being social with favorites"],
    socialStyle: "Very social with people she recognizes, skittish otherwise",
    funFact: "Bast once hissed at her favorite person when she smelled Simba on them!"
  },
  "Simba": {
    personality: "The Business Tycoon",
    locations: ["Drop off point", "Culinaire @2am", "Carpark", "Basketball Court @ 7am"],
    moods: {
      "Sleepy": 50,
      "Moody": 30,
      "Normal/neutral": 20
    },
    activities: ["Hunting rats", "Staring at birds", "Strategic positioning"],
    socialStyle: "Comes and rubs against person, then leaves",
    funFact: "Rat populations surged when Simba was fostered last year - he's the campus pest control!"
  },
  "Boots": {
    personality: "The Engineering Expert",
    locations: ["SHHK", "SS Canteen", "CCEB Level 4"],
    moods: {
      "Sleepy": 40,
      "Hungry": 30,
      "Spoilt": 30
    },
    activities: ["Climbing objects", "Disappearing for days"],
    socialStyle: "Sometimes approaches friendly, sometimes hides",
    funFact: "Boots habitually disappears for days and then reappears randomly!"
  },
  "Albus": {
    personality: "The Garden Guardian",
    locations: ["Near RR1"],
    moods: {
      "Friendly": 60,
      "Sleepy": 40
    },
    activities: ["Lap naps", "Fighting monkeys", "Sleeping"],
    socialStyle: "Climbs onto laps for snuggles",
    funFact: "Albus is a warrior that fights monkeys but loves lap naps!"
  },
  "Flynn": {
    personality: "The Sports Star",
    locations: ["Used to hide behind Bandit", "Now adopted"],
    moods: {
      "Timid": 70,
      "Affectionate": 30
    },
    activities: ["Grooming", "Eating", "Staying by your side"],
    socialStyle: "Initially shy, then very affectionate",
    funFact: "Now that she's adopted, Flynn is a total lap cat who stays by your side 24/7!"
  },
  "Bandit": {
    personality: "The Dorm Philosopher",
    locations: ["Special hideout requiring climbing stairs and railings"],
    moods: {
      "Protective": 50,
      "Young at heart": 50
    },
    activities: ["Grooming", "Eating", "Protecting Flynn"],
    socialStyle: "Approaches and interacts",
    funFact: "Bandit shares food with her best friend, a shrew!"
  }
}; 