#!/usr/bin/env node
// let cp =require('child_process');
// let os=require('os');

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");


let inputArr= process.argv.slice(2);
// console.log(inputArr);
let command=inputArr[0];
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help 
switch(command){
    case "tree":
       // treeFn(inputArr[1]);
         treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
       // organizeFn(inputArr[1]);
       organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
       // helpFn()
       helpObj.helpKey();
        break;
    default:
        console.log("😅 Please enter right commmand");
        break;
}





