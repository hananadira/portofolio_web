function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function ubahMode() {
  var ubah = document.body;
  ubah.classList.toggle("dark");
}
