#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
        
           name: "pin",
           message:"Enter Your Pin Number:",
           type:"number"
        }
    ]
)

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices:["Withdraw", "Check Balance","Fast Cash"]
            }
        ]
    );

    console.log(operationAns);

    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt (
            [
                {
                    name: "amount",
                    message: "enter Your Amount",
                    type: "number"
                }
            ]
        );

        if (myBalance <= amountAns.amount) {

        console.log(`You have Insufficant Balance !`)
        
        }else if (myBalance -= amountAns.amount) {
        console.log(`Your Current Balance is : ${myBalance}`)}
        
    
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current Balance is : ${myBalance}` );  
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt (
            [
                {
                name:"FastCash",
                message: "Select Your Withdraw Amount",
                type:"list",
                choices:["200","500","1000","5000","10000","20000"]
                }
            ]
        )
        if (myBalance <= fastCash.FastCash) {

            console.log(`You have Insufficant Balance !`)}

        else if (myBalance -= fastCash.FastCash) {
            console.log(`Your Current Balance is : ${myBalance}`)}
            
    }
    
    
}

else {
    console.log("Your Pin is Incorrect Please try to Push a correct Pin Number!");
    
}
