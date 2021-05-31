let fs=require('fs');
let path = require('path');

let types ={
    media: ['mp4','mkv'],
    archives : ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents :['docx','doc','pdf','xslx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app :['exe','dmg','pkg','deb']
}
// organize 
function organizeFn(dirPath){
    //1. input ->  directory path given
    let destPath;
    if(dirPath==undefined){
       // console.log("Please 🙏 enter path");
       destPath = process.cwd();
       return;
    }
    else{
        if(fs.existsSync(dirPath)){
    
           //2. create -> organized_files ->directory
          destPath= path.join(dirPath,"organized_files");
          if(fs.existsSync(destPath)==false){
              fs.mkdirSync(destPath);
          }
        }
        else{
            console.log("Please 🙏 enter correct  path");
        }
        organizeHelper(dirPath,destPath);
        //3. Identify categories of all files present in input directory ->
        //4. copy/cut files to that organized directory inside of any of category folder .
    }
    
    }
    
    function organizeHelper(src,dest){
        //3. Identify categories of all files present in input directory ->
        let childNames = fs.readdirSync(src);
        //console.log(childNames);
        for(let i=0;i<childNames.length;i++){
          let isfile=  fs.lstatSync(path.join(src,childNames[i])).isFile()
         
          if(isfile){
             // console.log(childNames[i]);
           let childAddress = path.join(src,childNames[i]);
           let category =getCategory(childNames[i]);
          // console.log(childNames[i]+" belongs to ",category);
        //4. copy/cut files to that organized directory inside of any of category folder .
            sendFiles(childAddress,dest,category);
          }
        }
    
        
    
    }
    function sendFiles(src,dest,category){
        let categoryPath = path.join(dest,category);
        if(fs.existsSync(categoryPath)==false){
            fs.mkdirSync(categoryPath);
        }
        let filename = path.basename(src);
        let filepath= path.join(categoryPath,filename);
        fs.copyFileSync(src,filepath);
      //  fs.unlinkSync(src); // ye original files nikal dega ab
    }
    
    function getCategory(name){
        let ext = path.extname(name);
        ext=ext.slice(1);
        for( let type in types){
          //  console.log(type)
            let cType = types[type];
          //  console.log(cType)
            for( let currType in cType){
              //  console.log(currType);
                if(cType[currType]==ext){
                    return type;
                }
            }
            // for(let i=0 ;i<cType.length;i++){
            // //  console.log(cType[i]);
            //     if(ext==cType[i]){
            //         console.log("here");
            //         return type;
            //     }
            // }
        }
        return "others";
    }
    module.exports={
        organizeKey:organizeFn
    }