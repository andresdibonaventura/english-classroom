const Users = require("../models/user.model");

const generateData = async() => {
await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    firstName: "Richard",
    lastName: "Bracho",
    gender: "male",
    email: "bracho@academlo.com",
    password: "$2b$10$Yz37nZKrjAjJz/uendIsl.FqqrnfE3zQiKZWs9kteUkhDR41tuSzO",
    country: "Venezuela",
    role: "Admin",
    status: "active",

  })
}

  module.exports = generateData