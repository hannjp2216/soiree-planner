const TOTAL_SECONDS = 3 * 24 * 60 * 60;
let remainingSeconds = TOTAL_SECONDS;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownEl = document.getElementById("countdown");
const countdownEndedEl = document.getElementById("countdown-ended");

function pad(n) {
  return String(n).padStart(2, "0");
}

function renderCountdown() {
  const days = Math.floor(remainingSeconds / 86400);
  const hours = Math.floor((remainingSeconds % 86400) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

function tickCountdown() {
  if (remainingSeconds <= 0) {
    countdownEl.hidden = true;
    countdownEndedEl.hidden = false;
    return;
  }
  remainingSeconds -= 1;
  renderCountdown();
}

renderCountdown();
setInterval(tickCountdown, 1000);

const rsvpForm = document.getElementById("rsvp-form");
const guestList = document.getElementById("guest-list");
const emptyGuests = document.getElementById("empty-guests");

const guests = [];

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("guest-name").value.trim();
  const status = rsvpForm.querySelector('input[name="rsvpStatus"]:checked').value;
  const plusOne = document.getElementById("plus-one").checked;

  if (!name) return;

  guests.push({ name, status, plusOne });
  renderGuestList();
  rsvpForm.reset();
});

function renderGuestList() {
  guestList.innerHTML = "";

  guests.forEach((guest) => {
    const li = document.createElement("li");

    const statusClass =
      guest.status === "Attending" ? "status-attending" :
      guest.status === "Maybe"     ? "status-maybe"     : "status-declined";

    li.innerHTML = `
      <div class="guest-info">
        <strong>${escapeHtml(guest.name)}</strong>
        <div class="guest-meta">${guest.plusOne ? "+1 guest" : "Solo"}</div>
      </div>
      <span class="status-badge ${statusClass}">${guest.status}</span>
    `;
    guestList.appendChild(li);
  });

  emptyGuests.hidden = guests.length > 0;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
