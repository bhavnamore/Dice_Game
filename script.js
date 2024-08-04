var randomnum1=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+randomnum1+".png";
var imagesrc1="/Dice_game/images/"+randomimg1;
document.querySelectorAll("img")[0].setAttribute("src",imagesrc1);

var randomnum2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomnum2+".png";
var imagesrc2="/Dice_game/images/"+randomimg2;
document.querySelectorAll("img")[1].setAttribute("src",imagesrc2)

if(randomnum1>randomnum2)
{
    var check1=document.querySelector("h1");
    check1.innerHTML="Player 1 wins 🏆";
    check1.style.color="white";
}
else if(randomnum1<randomnum2)
{
    var check2=document.querySelector("h1");
    check2.innerHTML="Player 2 wins 🏆";
    check2.style.color="white";
}
else
{
    var check3=document.querySelector("h1");
    check3.innerHTML="Draw 🥲";
    check3.style.color="white";
}