const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    nav.classList.add("nav-light");
  } else {
    nav.classList.remove("nav-light");
  }
})