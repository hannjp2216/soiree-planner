const TOTAL_SECONDS = 3 * 24 * 60 * 60;
let remainingSeconds = TOTAL_SECONDS;
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
function pad(n) { return String(n).padStart(2, "0"); }
function renderCountdown() {
  const days = Math.floor(remainingSeconds / 86400);
  const hours = Math.floor((remainingSeconds % 86400) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  daysEl.textContent = pad(days); hoursEl.textContent = pad(hours); minutesEl.textContent = pad(minutes); secondsEl.textContent = pad(seconds);
}
setInterval(() => { if (remainingSeconds > 0) { remainingSeconds--; renderCountdown(); } }, 1000);
const rsvpForm = document.getElementById("rsvp-form");
const guestList = document.getElementById("guest-list");
const emptyGuests = document.getElementById("empty-guests");
const guestCounterEl = document.getElementById("guest-counter");
const guests = [];
rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("guest-name").value.trim();
  const status = rsvpForm.querySelector('input[name="rsvpStatus"]:checked').value;
  const plusOne = document.getElementById("plus-one").checked;
  if (!name) return;
  guests.push({ name, status, plusOne });
  renderGuestList(); rsvpForm.reset();
});
function renderGuestList() {
  guestList.innerHTML = "";
  let totalAttending = 0;
  guests.forEach((g) => {
    const li = document.createElement("li");
    const sClass = g.status === "Attending" ? "status-attending" : g.status === "Maybe" ? "status-maybe" : "status-declined";
    li.innerHTML = <div><strong>${g.name}</strong><div>${g.plusOne ? "+1 guest" : "Solo"}</div></div><span class="status-badge ${sClass}">${g.status}</span>;
    guestList.appendChild(li);
    if (g.status === "Attending") {
      totalAttending += 1;
      if (g.plusOne) { totalAttending += 1; }
    }
  });
  guestCounterEl.textContent = Total Attending: ${totalAttending};
  emptyGuests.hidden = guests.length > 0;
}
renderCountdown();
