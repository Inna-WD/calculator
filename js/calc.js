



//pants buttons

let pantsMinusButton = document.getElementById("lessPants");
let pantsPlusButton = document.getElementById("morePants");

function pantsMinus(){
let label=document.getElementById("pantsQty");
label.innerHTML=parseInt(label.innerHTML)-1
}

function pantsPlus(){
    let label=document.getElementById("pantsQty");
    label.innerHTML=parseInt(label.innerHTML)+1
}


function simpleCalc(){
let pantsTotal=label.innerHTML*40.99;
console.log(label.innerHTML)
}

pantsMinusButton.addEventListener('click',pantsMinus);
pantsPlusButton.addEventListener('click',pantsPlus);
calculate.addEventListener(`click`,simpleCalc);