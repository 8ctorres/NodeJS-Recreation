(function(){
//green border around main image when mouse over it
  const doc = document;
  let img = doc.querySelector(".mainimg");

img.addEventListener("mouseover",function(){
  img.style.border-color = "#00ff00";
});

img.addEventListener("mouseout",function(){
  img.style.border-color = "ffffff";
});

})();

(function(){
//diminish opacity of left button when mouse over it
  const doc = document;
  let leftbutton = doc.querySelector("#left");

leftbutton.addEventListener("mouseover",function(){
  leftbutton.style.opacity = "0.8";
});

leftbutton.addEventListener("mouseout",function(){
  leftbutton.style.opacity = "1";
});

})();

(function(){
//diminish opacity of right button when mouse over it
  const doc = document;
  let rightbutton = doc.querySelector("#right");

rightbutton.addEventListener("mouseover",function(){
  rightbutton.style.opacity = "0.8";
});

rightbutton.addEventListener("mouseout",function(){
  rightbutton.style.opacity = "1";
});

})();

(function(){

  const doc = document;
  let phome = doc.querySelector("#phome");

phome.addEventListener("mouseover",function(){
  phome.style.opacity = "0.5";
  phome.style.text-decoration = "underline";
  phome.style.text-decoration-color = "currentColor";

});

})();

// .example {
//    text-decoration: underline;
//    text-decoration-color: red;
//}

//https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color
