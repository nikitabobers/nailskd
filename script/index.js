import Modal from "./modal.js";

const navHover = document.querySelector(".work");
const dropMenuDisplay = document.querySelector(".drop-menu");

navHover.addEventListener("mouseover", () => {
  dropMenuDisplay.style.display = "initial";
});
navHover.addEventListener("mouseout", () => {
  dropMenuDisplay.style.display = "none";
});

const btnReserve = document.querySelector(".btn-appointment");

// Load class
const modal = new Modal({
  class: "calendar",
  width: "500px",
  closable: true,
  content: `
    <form id="form">
			<label for="name">Name</label>
			<input type="text" placeholder="Name" />
			<label for="phone">Phone git Number</label>
			<input type="number" placeholder="Phone Number" />
			<label for="date">Select Date</label>
			<div class="calendar-selector">
				<div class="date"></div>
				<div class="time">15:00</div>
			</div>
			<button type="submit" class="btn btn-submit">Make An Appointment</button>        
    </form>
  `
});
modal.create();

// Open window
btnReserve.addEventListener("click", openCalendarWindow);
function openCalendarWindow() {
  modal.open();

  document.querySelector(".btn-submit").addEventListener("click", () => {
    modal.close();
  });
}

function closeCalendarWindow() {
  document.querySelector(".calendar").addEventListener("click", () => {
    if (event.target.dataset.close) {
      modal.close();
    }
  });
}
closeCalendarWindow();
