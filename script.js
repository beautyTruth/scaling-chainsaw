Array.from(document.querySelectorAll(".navigation-button")).forEach(
  (boobie) => {
    boobie.onclick = () => {
      boobie.parentElement.parentElement.classList.toggle("change");
    };
  }
);

const oldeYear = document.querySelector(".year");
const newYear = new Date().getFullYear();
oldeYear.textContent = newYear;
