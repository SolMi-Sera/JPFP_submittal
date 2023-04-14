const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('student', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
          msg: "Must be a valid email address",
      }
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
  },
  campusId: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  }
});