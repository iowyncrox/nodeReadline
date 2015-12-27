"use strict"

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var answers = [];

rl.question("What is your name ", function (answer) {
    answers.push(answer.trim());

    rl.setPrompt("What is your Fav hobby " + answer + " ");
    rl.prompt();
    rl.on("line", function (saying) {

        if (saying.toString().trim() === "exit") {
            rl.close();
        } else if (saying.toString().trim() === "view") {
            console.log("Here are your answers: ")
            answers.forEach(function (answer) {
                console.log("");
                console.log(answer);
            });
            rl.setPrompt("Type exit to leave ");
            rl.prompt();
        } else {
            answers.push(saying.trim());
            rl.setPrompt("Type exit to leave or view to see answers ");
            rl.prompt();
        }
    });
});

rl.on("close", function () {
    console.log("Thank you for using the application");
    process.exit(0);
});

