const chalk = require("chalk");
const fs = require("fs");

const colors = ['blue', 'red', 'green'];

colors.forEach(function(color) {
    console.log(chalk[color]("Hello World!!"));    
});
