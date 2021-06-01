$(document).ready(function(){
for(let i=1;i<=100;i++){
    let ans="";
    let n= i;
    while(n>0){
        let rem= n%26;
        if(rem==0){
            ans= "Z"+ans;
            n= Math.floor(n/26)-1;
        }
        else{
            ans = String.fromCharCode(rem-1+65) +ans;
            n= Math.floor(n/26);
        }
    }
    console.log(i);
   let columnName= $(`<div class="column-name  colId-${i}" id="colCod-${ans}">${ans}</div>`);
   $(".column-name-container").append(columnName);
   let rowName= $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
   $(".row-name-container").append(rowName);
}
for(let i=1;i<=100;i++){
    let row=$(`<div class="cell-row">`);
    for(j=1;j<=100;j++){
       let colCode = $(`.colId-${j}`).attr('id').split("-")[1];
       let column = $(`<div class="input-cell" contenteditable="true" id="row-${i}-col-${j}" data=${colCode}></div>`);
       row.append(column);
    }
    $(".input-cell-container").append(row);
}

$('.align-icon').click(function() {
    $('.align-icon.selected').removeClass("selected");
    $(this).addClass("selected");
})
$('.style-icon').click(function(){
    $(this).toggleClass("selected");
})
$(".input-cell").click(function(){
    $('.input-cell.selected').removeClass("selected");
    $(this).addClass("selected")
})

});

