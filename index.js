const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});


gsap.to(".services", {
  y:-55,
  duration: 3,
  scrollTrigger: {
    trigger: ".services",
  toggleActions: "restart reverse none none",
 }
})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-me img",
    toggleActions: "play reverse none none"
  }
})
tl.to (".about-me img",{y:-10, duration: 3})

gsap.to(".about-me p", {
  y: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".services",
    toggleActions: "play reverse none none",
  },
});
