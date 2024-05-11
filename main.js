function hamburgerMenu() {
    var body = document.querySelector("body");
    var menu = document.getElementById("mobile-navigation-menu");

    if (body.classList.contains("open")) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }

    body.classList.toggle("open");
}

