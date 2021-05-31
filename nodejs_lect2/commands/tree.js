let fs=require('fs');
let path = require('path');

function treeFn(dirPath){
    if(dirPath==undefined){
      //  console.log("Please 🙏 enter path");
      treeHelperfn(process.cwd(),"");
      return;
    }
    else{
        if(fs.existsSync(dirPath)){
            treeHelperfn(dirPath,"");
        }
        else{
            console.log("Please 🙏 enter correct  path");
        }   
}
}

function treeHelperfn(dirpath , indent){
    let isFile = fs.lstatSync(dirpath).isFile()
    if(isFile){
        let filename=path.basename(dirpath);
        console.log(indent + "├──" + filename);
    }
    else{
        let dirName = path.basename(dirpath);
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirpath);
        for(let i=0;i<childrens.length;i++){
            let childpath = path.join(dirpath,childrens[i]);
            treeHelperfn(childpath,indent+"\t");
        }
    }
}
module.exports={
    treeKey :treeFn
}