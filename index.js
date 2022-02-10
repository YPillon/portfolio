//Displays the current year in the footer
document.getElementById("currentYear").innerText = new Date().getFullYear();

//Hamburger menu- on click of link, minimise overlay nav
for (let link of document.querySelectorAll("#navLinks li")) {
  link.onclick = function () {
    document.querySelector("input[type=checkbox]").checked = false;
  };
}
