const db = require("../models");

const Role = db.role;
const User =   db.user;

const createRoles = ()=>{
    Role.create({
        id:1,
        name:"user"
    }),
    Role.create({
        id:2,
        name:"moderator"
    }),
    Role.create({
        id:3,
        name:"admin"
    })
} 

const createAdmin = ()=>{
    User.create({
        id : 3,
        username : "Danish",
        email:"danishTest@gmail.com",
        password:"test@2023"
    })
}

module.exports = {
    createRoles :createRoles,
    createAdmin : createAdmin
}