#!/usr/bin/env node

let fs=require('fs');
console.log("Hello Anant\n\n");
let inputArr = process.argv.slice(2);
let optionsArray =[];
let filesArray=[];

//Processing input array
for(let i=0;i<inputArr.length;i++){
    if(inputArr[i].charAt(0)=='-'){
        optionsArray.push(inputArr[i]);
    }
    else{
        filesArray.push(inputArr[i]);
    }
}


//option check1
if(optionsArray.includes("-n") && optionsArray.includes("-b")){
     console.error("Both -n and -s cannot be present"); 
     return;
}

//option check2
for(let i=0;i<filesArray.length;i++){
    let isFilePresent = fs.existsSync(filesArray[i]);
    if(isFilePresent==false){
         console.error(`${filesArray[i]} is not present`); 
         return;
    }
}



//read
let content="";
for(let i=0;i<filesArray.length;i++){
  let bufferContent = fs.readFileSync(filesArray[i]);
  content+=bufferContent+"\r\n";
}
//console.log(content);
let contentArr= content.split("\r\n");
//console.log(contentArr);



//-s
let isPresent = optionsArray.includes("-s");
if(isPresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
           // console.log(i);
        }
        else if(contentArr[i-1]==null && contentArr[i]==""){
            contentArr[i]=null;
            //console.log(i);
        }
    }
   // console.log(contentArr);
    let tempArr =[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr =tempArr;
}
console.log("******************************************************");
//console.log(contentArr.join("\n"));


//-n
let isNpresent = optionsArray.includes("-n");
if(isNpresent){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=(i+1)+" . "+contentArr[i];
    }
}
//console.log(contentArr.join("\n"));

//-b
let isBpresent =optionsArray.includes("-b");
if(isBpresent){
    let count=0;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=(++count)+" . "+contentArr[i]; 
        }
    }
}

//Printing at last
console.log(contentArr.join("\n"));
