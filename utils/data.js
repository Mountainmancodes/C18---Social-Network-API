const names = [
    'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan',
    'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul',
    'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Smith', 'Jones', 'Coollastname',
    'enter_name_here', 'Ze', 'Zechariah', 'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith',
    'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi', 'Zhong', 'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine',
    'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair', 'Zoubaeir', 'Zubair', 'Zubayr', 'Zuriel',
    'Xander', 'Jared', 'Courtney', 'Gillian', 'Clark', 'Jared', 'Grace', 'Kelsey', 'Tamar', 'Alex',
    'Mark', 'Tamar', 'Farish', 'Sarah', 'Nathaniel', 'Parker'
  ];
  
  const thoughtTexts = [
    'Just had an amazing breakthrough!',
    'Why is programming so challenging sometimes?',
    'The weather today is perfect for coding.',
    'Trying out a new productivity technique.',
    'Does anyone else love the smell of fresh coffee while coding?',
    'Just deployed my first app to production!',
    'Debugging: The process of removing bugs from your hair.',
    'AI is both exciting and a bit scary. Thoughts?',
    'Favorite coding languages? Go!',
    'The importance of work-life balance in tech.',
    'Best resources for learning new programming skills?',
    'Imposter syndrome is real, but we can overcome it!',
    'Open source contribution: intimidating but rewarding.',
    'The joy of solving a complex algorithm problem.',
    'Remote work: pros and cons?',
    'Just attended an amazing tech conference!',
    'The endless debate: tabs or spaces?',
    'Excited about the future of blockchain technology.'
  ];
  
  const reactionBodies = [
    'Totally agree!',
    'Interesting perspective.',
    'I hadn\'t thought about it that way.',
    'Thanks for sharing!',
    'This resonates with me.',
    'I respectfully disagree.',
    'Can you elaborate on that?',
    'This made me laugh!',
    'Insightful comment.',
    'You always have great ideas!',
    'I\'m dealing with the same thing.',
    'Any advice on how to approach this?',
    'Well said!',
    'This is so relatable.',
    'You\'ve inspired me to try this.'
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts that we can add to the database
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTexts),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Create the reactions that will be added to each thought
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactionBodies),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts, getRandomReactions };