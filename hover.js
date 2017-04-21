(function(){
  const doc = document;
  let img = doc.querySelector(".mainimg");

  img.addEventListener("mouseover",function(){
  img.style.borderColor = "#00ff00";
});

  img.addEventListener("mouseout",function(){
  img.style.borderColor = "#ffffff";
});

})();

(function(){

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

  const doc = document;
  let rightbutton = doc.querySelector("#right");

rightbutton.addEventListener("mouseover",function(){
  rightbutton.style.opacity = "0.8";
});

rightbutton.addEventListener("mouseout",function(){
  rightbutton.style.opacity = "1";
});

})();
