// alert("see the change");
// document.querySelector("h1").innerHTML="good bye";
var randomnumber1=Math.floor(Math.random()*6)+1;//1-6
var randomnumberimg="dice"+randomnumber1+".png";
// alert(randomnumber1);
var randomnumbersources="images/"+randomnumberimg;
var images1=document.querySelectorAll("img")[0];
// console.log(images1);
images1.setAttribute("src",randomnumbersources);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomnumberimg1="dice"+randomnumber2+".png";
var randomnumbersources1="images/"+randomnumberimg1;
var images2=document.querySelectorAll("img")[1];

images2.setAttribute("src",randomnumbersources1);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{

    document.querySelector("h1").innerHTML="Draw try again!";
}
