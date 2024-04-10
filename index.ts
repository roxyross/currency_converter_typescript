#! /usr/bin/env node

import inquirer from "inquirer";

const Currency : any = {
    USD : 277.3,
    YUAN : 38.5,
    EURO : 299.5,
    YEN : 1.86,
    RIYAL : 73.3,
    DIRHAM : 75.4,
    POUND : 350,
    AUSD : 182.7,
    CAND : 204,
    INR : 3.34, 

}; 

let user_answer = await inquirer.prompt(
    [
        {
            name : "From",
            type : "list",
            message : "Choose Currency :",
            choices : ["USD", "YUAN", "EURO", "YEN", "RIYAL", "DIRHAM", "POUND", "AUSD", "CAND", "INR"],
        
        },

        {
            name : "TO",
            type : "list",
            message : "Choose Currency :",
            choices : ["USD", "YUAN", "EURO", "YEN", "RIYAL", "DIRHAM", "POUND", "AUSD", "CAND", "INR"],
        },

        {
            name : "Amount",
            type : "number",
            message : "Enter Your Amount :",
        },
    ]
);

let from_currency = Currency[user_answer.From];
let to_currency = Currency[user_answer.TO];
let amount = user_answer.Amount;

let base_converter = from_currency / amount;
let converted = base_converter * to_currency;

console.log(converted);