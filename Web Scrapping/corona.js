let cheerio = require("cheerio");
let request= require("request");
console.log("before");
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', function (error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurre
    }
    else{
       handleHtml(html);
    }
 
});
console.log("after");
function handleHtml(html){
    let selTool = cheerio.load(html);
    //  let h1s = selTool("h1");
    //  console.log(h1s.length);
    //  for(let i=0;i<h1s.length;i++){
    //      console.log(h1s[i]);
    //  }
     let contentArr = selTool(".best-player-name");
     // [i] -> wrap selTool
     console.log(contentArr.length);
     for (let i = 0; i < contentArr.length; i++) {
         let data = selTool(contentArr[i]).text();
         console.log(data);
     }
}