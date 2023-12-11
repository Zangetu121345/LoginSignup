const Sequelize = require("sequelize");
const config = require("../configs/db.config.js")
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: parseInt(config.pool.max),
    min: parseInt(config.pool.min),
    acquire: parseInt(config.pool.acquire),
    idle: parseInt(config.pool.idle),
  },
});

// The relationship between Users and Roles is a Many-to-Many relationship:
// –> One User can have multiple Roles.
// –> One Role can be taken by many Users.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
