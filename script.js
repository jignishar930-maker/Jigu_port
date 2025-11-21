window.addEventListener("scroll", () => {
  let nav = document.querySelector("header");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});

function sayHello() {
  alert("Thanks for visiting my portfolio, Have a nice day 😊");
}
