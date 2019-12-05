



//Pants

let pantsMinusButton = document.getElementById("lessPants");
let pantsPlusButton = document.getElementById("morePants");

function pantsMinus(){
let label=document.getElementById("pantsQty");
label.innerHTML=parseInt(label.innerHTML)-1
if (label.innerHTML<0){
    label.innerHTML=0
}
}

function pantsPlus(){
let label=document.getElementById("pantsQty");
label.innerHTML=parseInt(label.innerHTML)+1
}


//Shirts

let shirtMinusButton = document.getElementById("lessShirt");
let shirtPlusButton = document.getElementById("moreShirt");

function shirtMinus(){
let label=document.getElementById("shirtQty");

label.innerHTML=parseInt(label.innerHTML)-1
if (label.innerHTML<0){
    label.innerHTML=0
    // console.log(label.innerHTML)
}
}



function shirtPlus(){
let label=document.getElementById("shirtQty");
label.innerHTML=parseInt(label.innerHTML)+1
}


// calculation
function simpleCalc(){
let labelP=document.getElementById("pantsQty");
// let qtyP=document.getElementById("pantsTotal");
let labelS=document.getElementById("shirtQty");
// let qtyS=document.getElementById("shirtTotal");
// let labelT=document.getElementById("subTotal");
// let labelH=document.getElementById("tax");
// let labelTT=document.getElementById("total");

var x=parseInt(labelP.innerHTML)*40.99;
pantsTotal.innerHTML=x.toFixed(2);

var y=parseInt(labelS.innerHTML)*10.99;
shirtTotal.innerHTML=y.toFixed(2);

var z=x+y;
subTotal.innerHTML=z.toFixed(2);

var t=z*.13;
tax.innerHTML=t.toFixed(2)

var q=t+z;
total.innerHTML=q.toFixed(2)
}

pantsMinusButton.addEventListener('click',pantsMinus);
pantsPlusButton.addEventListener('click',pantsPlus);
shirtMinusButton.addEventListener('click',shirtMinus);
shirtPlusButton.addEventListener('click',shirtPlus);
calculate.addEventListener(`click`,simpleCalc);
