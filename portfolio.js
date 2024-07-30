// let theme = "Light";

// const changeTheme = document.getElementById("change-button");

// function on() {
//   if (changeTheme.innerHTML === "Light theme") {
//     changeTheme.innerHTML = "Dark theme";
//     const link = document.getElementById("blackTheme");
//     link.setAttribute("href", "darkportfolio.css");
//   } else {
//     changeTheme.innerHTML = "Light theme";
//     const link = document.getElementById("blackTheme");
//     link.setAttribute("href", "portfolio.css");
//   }
// }
// changeTheme.addEventListener("click", on);

let theme = "Light";

const changeTheme = document.getElementById("change-button");

function on() {
  if (theme === "Light") {
    theme = "dark";
    const webTheme = document.getElementById("blackTheme");
    webTheme.setAttribute("href", "darkportfolio.css");
  } else {
    theme = "Light";
    const webTheme = document.getElementById("blackTheme");
    webTheme.setAttribute("href", "portfolio.css");
  }
}
changeTheme.addEventListener("click", on);
