const navHover = document.querySelector(".work");
const dropMenuDisplay = document.querySelector(".drop-menu");

navHover.addEventListener("mouseover", () => {
  dropMenuDisplay.style.display = "initial";
});
navHover.addEventListener("mouseout", () => {
  dropMenuDisplay.style.display = "none";
});

const btnReserve = document.querySelector(".btn-appointment");

btnReserve.addEventListener("click", makeAppointment);

function makeAppointment() {}
