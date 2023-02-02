#! /usr/bin/env node

import inquirer from "inquirer";

type WordCount = (str: string) => void;

const WordCount: WordCount =(string) => {
    const words = string.trim().split(/\s+/g);

    console.log("Total words in the paragraph are: " + words.length);
    
}

const getinput =async () => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Please enter your paragraph: "
        }
    ]);
    await WordCount(userInput.para);
}

await getinput();
