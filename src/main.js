import "./style.css";

let index = 0;

const track = document.getElementById("track");
const items = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function move(dir){
  index += dir;
  if(index < 0) index = 0;
  if(index > items.length - 1) index = items.length - 1;

  const itemWidth = items[0].offsetWidth + 32;
  track.style.transform = `translateX(${-index * itemWidth}px)`;
}

prev.addEventListener("click", () => move(-1));
next.addEventListener("click", () => move(1));

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();