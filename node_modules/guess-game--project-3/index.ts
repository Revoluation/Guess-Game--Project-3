#!/usr/bin/env node

import inquirer from "inquirer";
// computer will generate a random numbver
// user sy input llyna hai 
// user k inpuit ko compare krna hai random num sy 

const randNumber = Math.floor(Math.random() * 6 + 1);
async function start(){
 await inquirer.prompt([
    {
       name : "numberGuess",
       type : "number",
       message : "enter your guessed number"

    }
])
.then((answers)=>{
if (answers.numberGuess ===randNumber){
    console.log("congrats your guessed number is right");
}
else if (answers.numberGuess >= randNumber){
    console.log("your guess num is bigger");
}
else if (answers.numberGuess <= randNumber){
    console.log("your guess num is smaller");
}else{
    console.log("you put undefined data");
}

})
};
do{
   await  start();
   var again =  await inquirer.prompt([
    {
    type : "input",
    name : "restart",
    message : "do you want perform this  action again?"
     }
])
}while(again.restart === "yes"|| again.restart === "y")