const request = require('request');
const cheerio = require('cheerio');
const url="https://www.espncricinfo.com/series/dhaka-premier-division-twenty20-2021-1264572/legends-of-rupganj-vs-partex-sporting-club-relegation-league-1267117/ball-by-ball-commentary";
console.log("Before request");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        // console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html){
    let $ = cheerio.load(html);
    let constArray = $(".match-comment-short-text");
    // console.log(constArray.length);
    // for(let i=0;i<constArray.length;i++){
    //     console.log($(constArray[i]).text());
    // }  
    console.log("Last ball - > ",$(constArray[0]).text());

}
console.log("After request");