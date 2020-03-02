export default class Modal {
  constructor(options) {
    this.modal = document.createElement("div");
    this.options = options;
  }
  create() {
    const DEFAULT_WIDTH = "500px";
    this.modal.classList.add(this.options.class);
    this.modal.setAttribute("data-close", "true");
    this.modal.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="calendar-form open animated wobble delay-1s"  style= "width: ${this.options.width || DEFAULT_WIDTH}">
      ${
        this.options.closable
          ? `<button class="close" data-close="true"><i class="fas fa-times fa-2x close-icon" data-close="true"></i></button>`
          : ""
      }
    	${this.options.content}
    </div>
    `
    );
    document.querySelector(".front").appendChild(this.modal);
  }
  open() {
    this.modal.classList.add("open");
  }
  close() {
    this.modal.classList.remove("open");
  }
  destroy() {}
}
