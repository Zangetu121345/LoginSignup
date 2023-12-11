require("dotenv").config();

module.exports = {
  HOST: process.env.DATABASE_HOST,
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASSWORD,
  DB: process.env.DATABASE,
  dialect: process.env.DATABASE_DIALECT,
  pool: {
    max: process.env.DATABASE_POOL_MAX,
    min: process.env.DATABASE_POOL_MIN,
    acquire: process.env.DATABASE_POOL_AQUIRE,
    idle: process.env.DATABASE_POOL_IDLE
  }
};



