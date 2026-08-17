// ^ Write your JavaScript code here
let btnToggle = document.getElementById("theme-toggle-button");
let scrollToTopBtn = document.getElementById("scroll-to-top");
// slider
let nextBtn = document.getElementById("next-testimonial");
let prevBtn = document.getElementById("prev-testimonial");
let testimonialsContainer = document.getElementById("testimonials-carousel");
let cardWidth = document.querySelector(".testimonial-card").offsetWidth;
let carsoulInicator = document.querySelectorAll(".carousel-indicator");
//  scroll spy
let links = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");
// slide scroll
let settingsToggle = document.getElementById("settings-toggle");
let settingsSidebar = document.getElementById("settings-sidebar");
let closeSettings = document.getElementById("close-settings");
// fonts
let fontButtons = document.querySelectorAll(".font-option");
// let colorButtons = document.querySelectorAll(".color-option");
let resetButton = document.getElementById("reset-settings");

// _______ start dark/night mood ______________
btnToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  let isDark = document.documentElement.classList.contains("dark");
  btnToggle.setAttribute("aria-pressed", isDark);
});
// _______ start scrollToTopBtn ______________
window.addEventListener("scroll", function () {
  if (window.scrollY > 670) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "invisible");
    scrollToTopBtn.classList.remove("opacity-100", "visible");
  }
});
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// _______ start scrollright/left ______________
cardIndex = 0;
nextBtn.addEventListener("click", function () {
  cardIndex++;
  if (cardIndex === 4) {
    cardIndex = 0;
  }
  testimonialsContainer.style.transform = `translatex(${cardWidth * cardIndex}px)`;
  carsoulInicator[cardIndex].classList.add("active");
});
prevBtn.addEventListener("click", function () {
  cardIndex--;
  if (cardIndex < 0) {
    cardIndex = 3;
  } else {
  }
  testimonialsContainer.style.transform = `translatex(${cardWidth * cardIndex}px)`;
  carsoulInicator[cardIndex].classList.remove("active");
});
// _______ start scrollSpy ______________
window.addEventListener("scroll", function () {
  for (let i = 0; i < links.length; i++) {
    if (scrollY >= sections[i].offsetTop - 120) {
      sectionId = sections[i].getAttribute("id");
    }
    for (let i = 0; i < links.length; i++) {
      if (links[i].getAttribute("href") == `#${sectionId}`) {
        links[i].classList.add("active");
      } else {
        links[i].classList.remove("active");
      }
    }
  }
});

settingsToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  let isOpen = settingsSidebar.classList.toggle("translate-x-full");
  let sidebarOpen = !settingsSidebar.classList.contains("translate-x-full");

  if (sidebarOpen) {
    settingsToggle.style.transform = "translateY(-50%) translateX(-320px)";
    settingsToggle.setAttribute("aria-expanded", "true");
  } else {
    settingsToggle.style.transform = "translateY(-50%)";
    settingsToggle.setAttribute("aria-expanded", "false");
  }
});
settingsSidebar.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.style.transform = "translateY(-50%)";
});
closeSettings.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.style.transform = "translateY(-50%)";
});

// fonts
for (let i = 0; i < fontButtons.length; i++) {
  let currentButton = fontButtons[i];
  currentButton.addEventListener("click", function (e) {
    let fontName = e.target.dataset.font;
    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo",
    );
    document.body.classList.add("font-" + fontName);
  });
}
// colors

// reset btn
resetButton.addEventListener("click", function (){
    document.body.classList.remove(
      "font-alexandria",
      "font-cairo",
    );
      document.body.classList.add("font-tajawal");
})
