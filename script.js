//your code here
// document.getElementById("1").style.background="black";
const gridAll=document.getElementsByClassName("grid-item");
console.log(gridAll);
const btnSet=document.getElementById("change_button");
const btnRst=document.getElementById("reset_button");
btnSet.addEventListener("click",()=>{
    const blockId=document.getElementById("block_id").value;
    const bgClr=document.getElementById("colour_id").value;
    document.getElementById(blockId).style.background=bgClr;

})

btnRst.addEventListener("click",addWhite);
function addWhite(){
    for(let i=1;i<10;i++){

    const ele = document.getElementById(i).style.background="transparent";
    }
}


// addWhite();