// darkMode Svg
const darkModeSvg = `<svg viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg"  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.32"></g><g id="SVGRepo_iconCarrier"> <g id="Lager_94" data-name="Lager 94" transform="translate(0)"> <path id="Path_70" data-name="Path 70" d="M12.516,4.509A12,12,0,0,0,22.3,19.881,12.317,12.317,0,0,0,24,20a11.984,11.984,0,0,0,3.49-.514,12.1,12.1,0,0,1-9.963,8.421A12.679,12.679,0,0,1,16,28,12,12,0,0,1,12.516,4.509M16,0a16.5,16.5,0,0,0-2.212.15A16,16,0,0,0,16,32a16.526,16.526,0,0,0,2.01-.123A16.04,16.04,0,0,0,31.85,18.212,16.516,16.516,0,0,0,32,15.944,1.957,1.957,0,0,0,30,14a2.046,2.046,0,0,0-1.23.413A7.942,7.942,0,0,1,24,16a8.35,8.35,0,0,1-1.15-.08,7.995,7.995,0,0,1-5.264-12.7A2.064,2.064,0,0,0,16.056,0Z" ></path> </g> </g></svg>`;

// lightMode Svg
const lightModeSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#a)" > <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path> </g> <defs> <clipPath id="a"> <path  d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>`;

// pointer to toggle button
const darkModeButton = document.querySelector(".toggle-button");

// click event on toggle button
darkModeButton.addEventListener("click", () => {
  // toggle class on body to switch between dark and light mode
  document.body.classList.toggle("bright-mode");
  //   check if body contais bright-mode class and change the button icon accordingly
  if (document.body.classList.contains("bright-mode")) {
    darkModeButton.innerHTML = lightModeSvg;
  } else {
    darkModeButton.innerHTML = darkModeSvg;
  }
});

// months array for date display
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// setInterval to update the time and date every second
// this will run the function every 1000ms (1 second)
setInterval(() => {
  // get the current date and time
  let fullDate = new Date();
  let day = fullDate.getDate();
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();
  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  let second = fullDate.getSeconds();

// update the date in html elements with class name "date"   
  document.getElementsByClassName(
    "date"
  )[0].innerHTML = `${day} ${months[month]}, ${year}`;

//   update the time in html elements with class name "time"
  document.getElementsByClassName("time")[0].innerHTML = `${
    hour < 10 ? "0" : ""
  }${hour > 12 ? hour - 12 : hour}:${minute < 10 ? "0" : ""}${minute}`;

//   update the am/pm in html elements with class name "ampm"
  document.getElementsByClassName("ampm")[0].innerHTML = `${
    hour < 12 ? "AM" : "PM"
  }`;

//   update the second, minute and hour hands of the clock
  document.querySelector(
    ".second-hand"
  ).style.transform = `translate(-50%, -100%) rotate(${
    (second / 60) * 360
  }deg)`;

  document.querySelector(
    ".minute-hand"
  ).style.transform = `translate(-50%, -100%) rotate(${
    (minute / 60) * 360
  }deg)`;

  document.querySelector(
    ".hour-hand"
  ).style.transform = `translate(-50%, -100%) rotate(${(hour / 12) * 360}deg)`;
}, 1000);
