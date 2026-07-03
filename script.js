const clock = document.getElementById("clock");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");
const button = document.getElementById("formatBtn");

let is24 = true;

function updateClock(){

    const now = new Date();

    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    if(hour < 12){
        greeting.textContent = "Good Morning";
    }
    else if(hour < 18){
        greeting.textContent = "Good Afternoon";
    }
    else{
        greeting.textContent = "Good Evening";
    }

    let period = "";

    if(!is24){
        period = hour >= 12 ? " PM" : " AM";
        hour = hour % 12 || 12;
    }

    clock.textContent =
    ${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}${period};

    date.textContent = now.toDateString();
}

button.onclick = function(){

    is24 = !is24;

    if(is24){
        button.textContent = "Switch to 12-Hour";
    }
    else{
        button.textContent = "Switch to 24-Hour";
    }

    updateClock();
};

updateClock();

setInterval(updateClock,1000);