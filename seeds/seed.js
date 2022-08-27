const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const PostData = require('./postData.json');
const commentData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Post of PostData) {
    await Post.create({
      ...Post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
