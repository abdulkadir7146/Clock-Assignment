const clock = document.getElementById("clock");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");
const button = document.getElementById("formatBtn");

let is24 = true;

// Update clock
function updateClock() {
    const now = new Date();

    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Greeting
    if (hour < 12) {
        greeting.textContent = "Good Morning";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon";
    } else {
        greeting.textContent = "Good Evening";
    }

    // Handle 12-hour format
    let suffix = "";
    if (!is24) {
        suffix = hour < 12 ? " AM" : " PM";
        hour = hour % 12 || 12;
    }

    // Format time
    const hh = String(hour).padStart(2, "0");
    const mm = String(minute).padStart(2, "0");
    const ss = String(second).padStart(2, "0");

    clock.textContent = `${hh}:${mm}:${ss}${suffix}`;

    // Format date
    date.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// Toggle between 24-hour and 12-hour format
button.addEventListener("click", function () {
    is24 = !is24;

    button.textContent = is24
        ? "Switch to 12-Hour"
        : "Switch to 24-Hour";

    updateClock();
});

// Initial display
updateClock();

// Update every second
setInterval(updateClock, 1000);