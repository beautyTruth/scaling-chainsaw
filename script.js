Array.from(document.querySelectorAll(".navigation-button")).forEach(
  (boobie) => {
    boobie.onclick = () => {
      boob.parentElement.parentElement.classList.toggle("change");
    };
  }
);
