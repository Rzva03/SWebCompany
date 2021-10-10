/* -------------------------------------------------------------------------- */
/*                                Console Title                               */
/* -------------------------------------------------------------------------- */
consoleText(
  [
    "Bienvenido a Solution Web Company",
    "Tecnología avanzada para el desarrollo de su empresa.",
  ],
  "text",
  ["white", "white", "white"]
);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";
      visible = true;
    }
  }, 400);
}

/* -------------------------------------------------------------------------- */
/*                             Change class active                            */
/* -------------------------------------------------------------------------- */
let liActive = 0;
let liMenu = document.querySelectorAll(".gtr-menu__li");

liMenu.forEach((element, index) => {
  element.addEventListener("click", function () {
    changeActive(index);
  });
});

function changeActive(index) {
  liMenu[liActive].classList.remove("active");
  liMenu[index].classList.add("active");
  liActive = index;
}
/* -------------------------------------------------------------------------- */
/*                                  dark mode                                 */
/* -------------------------------------------------------------------------- */
const chk = document.getElementById("chk");
const body = document.querySelector("body");
chk.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});
