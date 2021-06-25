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
    console.log(ans);
    console.log(i);
   let columnName= $(`<div class="column-name  colId-${i}" id="colCod-${ans}">${ans}</div>`);
   $(".column-name-container").append(columnName);
   let rowName= $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
   $(".row-name-container").append(rowName);
}
for(let i=1;i<=100;i++){
    let row=$(`<div class="cell-row"></div>`);
    for(j=1;j<=100;j++){
       let colCode = $(`.colId-${j}`).attr('id').split("-")[1];
       let column = $(`<div class="input-cell" contenteditable="false" id="row-${i}-col-${j}" data=${colCode}></div>`);
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
$(".input-cell").click(function(e){
    console.log(e);
     if(e.ctrlKey){
        let [rowId,colId]= getRowCol(this);
        $(this).addClass("selected")
        if(rowId>1){
            let istopCellSelected=$(`#row-${rowId-1}-col-${colId}`).hasClass("selected");
            if(istopCellSelected){
                $(`#row-${rowId-1}-col-${colId}`).addClass("bottom-cell-selected");
                $(`#row-${rowId}-col-${colId}`).addClass("top-cell-selected");
            }
        }
        if(rowId<100){
            let isbottomCellSelected=$(`#row-${rowId+1}-col-${colId}`).hasClass("selected");
            if(isbottomCellSelected){
                $(`#row-${rowId+1}-col-${colId}`).addClass("top-cell-selected");
                $(`#row-${rowId}-col-${colId}`).addClass("bottom-cell-selected");
            }
        }
        if(colId>1){
            let isleftCellSelected=$(`#row-${rowId}-col-${colId-1}`).hasClass("selected");
            if(isleftCellSelected){
                $(`#row-${rowId}-col-${colId-1}`).addClass("right-cell-selected");
                $(`#row-${rowId}-col-${colId}`).addClass("left-cell-selected");
            }
        }
        if(colId<100){
            let isrightCellSelected=$(`#row-${rowId}-col-${colId+1}`).hasClass("selected");
            if(isrightCellSelected){
                $(`#row-${rowId}-col-${colId+1}`).addClass("left-cell-selected");
                $(`#row-${rowId}-col-${colId}`).addClass("right-cell-selected");
            }
        }
        // $(this).addClass("selected")
     }
     else{
        $('.input-cell.selected').removeClass("selected");
        $(this).addClass("selected")
     }
    
})
$(".input-cell").dblclick(function(){
    $('.input-cell.selected').removeClass("selected");
    $(this).addClass("selected");
    $(this).attr('contenteditable','true');
    $(this).focus();
})
$(".input-cell").blur(function(){
    $(this).attr('contenteditable','false');
})

$(".input-cell-container").scroll(function () {
    $(".column-name-container").scrollLeft(this.scrollLeft);
    $(".row-name-container").scrollTop(this.scrollTop);
})

function getRowCol(e){
    let idArray = $(e).attr('id').split('-');
    let rowId=parseInt(idArray[1]);
    let colId=parseInt(idArray[3]);
    return [rowId,colId];
}

function updateCell(property,value){
    $('.input-cell.selected').each(function(){
        $(this).css(property,value);
    })
}


$(".icon-bold").click(function() {
    if($(this).hasClass("selected")) {
        updateCell("font-weight","bold");
    } else {
        updateCell("font-weight","");
    }
});

$(".icon-italic").click(function() {
    if($(this).hasClass("selected")) {
        updateCell("font-style","italic");
    } else {
        updateCell("font-style","");
    }
});

$(".icon-underline").click(function() {
    if($(this).hasClass("selected")) {
        updateCell("text-decoration","underline");
    } else {
        updateCell("text-decoration","");
    }
});

});


