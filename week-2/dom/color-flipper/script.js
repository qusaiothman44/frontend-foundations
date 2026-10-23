let r = 0;
let g =0 ;
let b = 0;

document.querySelector(".btn").addEventListener("click", function () {
  r = Math.floor(Math.random() * 256) ;
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  document.body.style.background = `rgb(${r},${g},${b})`;

});
