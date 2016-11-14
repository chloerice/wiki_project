var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

var Page = db.define('page',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urlTitle: {
      type: Sequelize.STRING,
      isURL: true,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    getterMethods: {
      route: function () {
        return '/wiki/' + this.urlTitle
      }
    },
    hooks: {
      beforeValidate: function(page) {
        page.urlTitle = req.body.title.replace(/\s/g, '_').replace(/[^a-z0-9]/ig, "");
      }
    }
});

var User = db.define('user', {
	name: {
    is: ["^[a-z]+$", 'i'],
    type: Sequelize.STRING,
    allowNull: false
  },
	email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true //gets validated at the application level
    },
    allowNull: false
  }
});

module.exports = {
  Page: Page,
  User: User
};
