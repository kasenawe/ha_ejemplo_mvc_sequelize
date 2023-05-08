/**
 * Colocar aquí JS "propio".
 * Notar que este código se ejecutará en el navegador.
 */

// HARD CODED CALENDAR JS  ---------> esto despues se sustituye con codigo para generar los dias pero se injecta por ejs los dias con noticias

const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const calendarBody = document.querySelector(".calendar-body");

for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement("div");
  day.classList.add("day", "number");
  const dayLink = document.createElement("a");
  if (i === 5) {
    dayLink.href = "https://www.google.com/";
    dayLink.target = "_blank";
    day.style.backgroundColor = "red";
  } else if (i === 15) {
    dayLink.href = "https://www.abc.com/";
  } else if (i === 29) {
    dayLink.href = "https://www.youtube.com/";
  } else {
    dayLink.href = "#";
  }

  dayLink.textContent = i;
  if (dayLink.href !== "#") {
    dayLink.target = "_blank"; // add target attribute to open links in a new tab
  } else {
    dayLink.target = "";
  }
  day.appendChild(dayLink);

  calendarBody.appendChild(day);
}

const firstDayOfWeek = new Date(year, month, 1).getDay();
const lastDayOfWeek = new Date(year, month + 1, 0).getDay();

for (let i = 0; i < firstDayOfWeek; i++) {
  const day = document.createElement("div");
  day.classList.add("day", "grayed-out");
  calendarBody.insertBefore(day, calendarBody.firstChild);
}

for (let i = lastDayOfWeek + 1; i <= 6; i++) {
  const day = document.createElement("div");
  day.classList.add("day", "grayed-out");
  calendarBody.appendChild(day);
}

document.querySelector(".calendar-header").children[now.getDay()].classList.add("today");
