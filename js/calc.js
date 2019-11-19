//fetch buttons

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

pantsMinusButton.addEventListener('click',pantsMinus);
pantsPlusButton.addEventListener('click',pantsPlus);