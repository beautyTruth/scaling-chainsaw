// card button code

Array.from(document.querySelectorAll(".navigation-button")).forEach(
  (boobie) => {
    boobie.onclick = () => {
      boobie.parentElement.parentElement.classList.toggle("change");
    };
  }
);

// end of card button code

// copyright year code

const oldeYear = document.querySelector(".year");
const newYear = new Date().getFullYear();
oldeYear.textContent = newYear;

// end of copyright year code

// navbar code

const navColors = ["#EB92BE", "#FFEF78", "#A8E7E9", "#B1FFFD", "#77D970"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((tummy) => {
  tummy.style.cssText = `background-color: ${navColors[i++]}`;
});

// end of navbar code

// code for change class

const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

// end of code for change class
