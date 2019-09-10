const Sequelize = require("sequelize");

const db = new Sequelize({
  database: "titatnic_survivors_db",
  dialect: "postgres",
  define: {
    underscored: true,
    returning: true
  }
});

const Survivor = db.define("survivor", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  survived: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = {
  Survivor,
  db
};
