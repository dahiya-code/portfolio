console.log("hello");
// document.addEventListener("DOMContentLoaded", function (event) {
// array with texts to type in typewriter
var dataText = [
  "Hi, I am Navya Dahiya.",
  "Undergrad at IIT(BHU).",
  "Web Developer.",
  "Competitive programmer.",
];
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
  console.log("dark mode");
  app.setAttribute("data-light-mode", "dark");
}

function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    console.log("dark");
    localStorage.lightMode = "light";
    app.setAttribute("data-light-mode", "light");
  } else {
    console.log("light");
    localStorage.lightMode = "dark";
    app.setAttribute("data-light-mode", "dark");
  }
  console.log("lightMode = " + localStorage.lightMode);
}

document
  .getElementById("dark-mode-btn")
  .addEventListener("click", function (e) {
    const toggler = document.body;
    toggler.classList.toggle("dark-mode");
    const target = e.target;
    target.classList.toggle("fa-moon");
    target.classList.toggle("fa-sun");
  });
// type one text in the typwriter
// keeps calling itself until the text is finished
function typeWriter(text, i, fnCallback) {
  // chekc if text isn't finished yet
  if (i < text.length) {
    // add next character to p
    document.querySelector("p").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    // wait for a while and call this function again for next character
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  }
  // text finished, call callback if there is a callback function
  else if (typeof fnCallback == "function") {
    // call callback after timeout
    setTimeout(fnCallback, 700);
  }
}
// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 5);
  }
  // check if dataText[i] exists
  if (i < dataText.length) {
    // text exists! start typewriter animation
    typeWriter(dataText[i], 0, function () {
      // after callback (and whole text has been animated), start next text
      StartTextAnimation(i + 1);
    });
  }
}
// start the text animation
StartTextAnimation(0);
// });
