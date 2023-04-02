var pass = document.getElementById("password");

function showPassword() {
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

var bgNav = document.getElementById("navbar");

window.onscroll = function () {
  window.scroll_nav = window.scrollY;

  if (scroll_nav >= 100) {
    bgNav.classList.add("after-scroll-navbarList");
  } else {
    bgNav.classList.remove("after-scroll-navbarList");
  }
};
