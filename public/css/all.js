
let moon = document.querySelector(".moon");
let all_main = document.querySelectorAll(".notify-bag").length;
let table = document.querySelectorAll(".table-l").length;
let row = document.querySelectorAll(".tr th").length;
let col = document.querySelectorAll(".tr td").length;
// Dark Mood
moon.addEventListener("click", function () {
  document.body.classList.toggle("moon-color");
  document.querySelector(".shadow-footer").classList.toggle("moon-color");
  document.querySelector(".sidebar").classList.toggle("moon-color");
  document.querySelector(".shadow").classList.toggle("moon-color");
  
  document.querySelector(".profile img").classList.toggle("moon-color");
  
  document.querySelector(".heading_name").classList.toggle("moon-color");
  
 

  for (let i = 0; i < all_main; i++) {
    document.querySelectorAll(".notify-bag")[i].classList.toggle("moon-color");
    document.querySelectorAll(".text")[i].classList.toggle("moon-color");
    document
      .querySelectorAll(".notify-bag-1")
      [i].classList.toggle("moon-color");
  }
  if (document.body.classList.contains("moon-color")) {
    moon.src = "../css/image/sun-icon-15.png";
  } else {
    moon.src = "../css/image/moon.png";
  }
});

moon.addEventListener("click", function () {
  document.querySelector(".table-title").classList.toggle("moon-color");
  for(let j = 0; j < table; j ++){
    document.querySelectorAll(".table-l")[j].classList.toggle("moon-color");
    document.querySelectorAll(".table-l span")[j].classList.toggle("moon-color");
  }

  for(let i = 0; i < row; i ++){
    document.querySelectorAll(".tr th")[i].classList.toggle("moon-color");
  }

  for(let i = 0; i < col; i ++){
    document.querySelectorAll(".tr td")[i].classList.toggle("moon-color");
  }
})



// Side-BAR 
document
  .querySelector(".sidebar .toggle-btn")
  .addEventListener("click", function() {
    document.body.classList.toggle("body-side");
    document.querySelector(".sidebar").classList.toggle("active");
    
    
    for(let i = 0; i < all_main; i++){
      document.querySelectorAll(".text")[i].classList.toggle("body-side");
    }
    
    
  });




  