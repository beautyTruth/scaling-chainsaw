Array.from(document.querySelectorAll(".navigation-button")).forEach(
  (boobie) => {
    boobie.onclick = () => {
      boobie.parentElement.parentElement.classList.toggle("change");
    };
  }
);
