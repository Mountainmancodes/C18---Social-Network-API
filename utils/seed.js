const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const username = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
    const email = `${username}@example.com`;

    users.push({
      username,
      email,
      first,
      last,
    });
  }

  // Add users to the collection and await the results
  const userData = await User.create(users);

  // Create thoughts
  let createdThoughts = [];
  for (let i = 0; i < 100; i++) {
    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const { _id: userId, username } = userData[randomUserIndex];

    const thoughtText = getRandomThoughts(1)[0].thoughtText;
    const reactions = getRandomReactions(Math.floor(Math.random() * 5));

    const thought = await Thought.create({
      thoughtText,
      username,
      userId,
      reactions,
    });

    createdThoughts.push(thought);

    // Add thought to user's thoughts array
    await User.findByIdAndUpdate(userId, { $push: { thoughts: thought._id } });
  }

  // Add friends to users
  for (let i = 0; i < userData.length; i++) {
    const friendCount = Math.floor(Math.random() * 5);
    const friendIds = userData
      .filter((user) => user._id !== userData[i]._id)
      .slice(0, friendCount)
      .map((friend) => friend._id);

    await User.findByIdAndUpdate(userData[i]._id, { $push: { friends: { $each: friendIds } } });
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});