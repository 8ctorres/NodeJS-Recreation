(function hoverimg(){
  const doc = document
  let img = doc.querySelector("div.mainimg img")

  img.addEventListener("mouseOver")
  img.style.border-color = "00ff00"

  img.addEventListener("mouseOut")
  img.style.border-color = "ffffff"

})()
