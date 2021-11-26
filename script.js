const dropdown = document.querySelector(".dropdown_content");
const dropbtn = document.querySelector("#dropbtn");
const dropicon = document.querySelector(".fa-angle-right");

dropbtn.addEventListener("click", function() {
  dropdown.classList.toggle("show_drop");
  dropicon.classList.toggle("rotateArrow");
});
