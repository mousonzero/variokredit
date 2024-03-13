const { default: chalk } = require("chalk");

function hello() {
    console.log(chalk("HELLO VAR"))
}

module.exports = hello