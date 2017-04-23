(function(){
//green border around main image when mouse over it
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
//underline home in nav bar
  const doc = document;
  let phome = doc.querySelector("#phome");

phome.addEventListener("mouseover",function(){
  phome.style.textDecoration = "underline";
});

phome.addEventListener("mouseout",function(){
  phome.style.textDecoration = "none";
});

})();

(function(){
//underline about in nav bar
  const doc = document;
  let phome = doc.querySelector("#pabout");

pabout.addEventListener("mouseover",function(){
  pabout.style.textDecoration = "underline";
});

pabout.addEventListener("mouseout",function(){
  pabout.style.textDecoration = "none";
});

})();
