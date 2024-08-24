const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
// Left side of the container hover effects
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
// Right side of the container hover effects
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
