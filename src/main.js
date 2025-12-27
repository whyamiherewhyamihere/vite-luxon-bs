import "./styles.scss";

import { DateTime } from "luxon";
import Modal from "bootstrap/js/dist/modal";

const modalEl = document.getElementById("timeModal");
const timeText = document.getElementById("timeText");
const btn = document.getElementById("showTimeBtn");

const closeX = document.getElementById("closeX");
const closeBtn = document.getElementById("closeBtn");

const modal = new Modal(modalEl, { backdrop: true, keyboard: true });

let timerId = null;

function renderTime() {
  timeText.textContent = DateTime.local()
    .setLocale("ru")
    .toFormat("dd.MM.yyyy HH:mm:ss");
}

btn.addEventListener("click", () => modal.show());
closeX.addEventListener("click", () => modal.hide());
closeBtn.addEventListener("click", () => modal.hide());

modalEl.addEventListener("shown.bs.modal", () => {
  renderTime();
  timerId = setInterval(renderTime, 1000);
});

modalEl.addEventListener("hidden.bs.modal", () => {
  if (timerId) clearInterval(timerId);
  timerId = null;
});
