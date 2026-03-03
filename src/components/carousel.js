let index = 0;

export function initCarousel() {
  const track = document.getElementById("track");
  const items = document.querySelectorAll(".carousel-item");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  function move(dir) {
    index += dir;
    if (index < 0) index = 0;
    if (index > items.length - 1) index = items.length - 1;

    const width = items[0].offsetWidth + 32;
    track.style.transform = `translateX(${-index * width}px)`;
  }

  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
}