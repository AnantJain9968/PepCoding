let utility={}
utility.types ={
    media: ['mp4','mkv'],
    archives : ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents :['docx','doc','pdf','xslx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app :['exe','dmg','pkg','deb']
}
module.exports=utility;

let ctype=['mp4','mkv']
for(let type in ctype){
    console.log(type);
}