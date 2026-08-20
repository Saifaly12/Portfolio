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
let carouselIndicator = document.querySelectorAll(".carousel-indicator");
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
//______________ aside slider opening with gear icon________________
settingsToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  let isOpen = settingsSidebar.classList.toggle("translate-x-full");
  let sidebarOpen = !settingsSidebar.classList.contains("translate-x-full");

  if (sidebarOpen) {
    settingsToggle.style.transform = "translateY(-50%) translateX(-665%)";
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
let colors = ["#0ea5e9", "#10b981", "#f97316", "#8b5cf6", "#f59e0b", "#ef4444"];
// colorsGrid === the container will contain html content
let colorsGrid = document.getElementById("theme-colors-grid");
let cartona = "";
for (let i = 0; i < colors.length; i++) {
  cartona += `
  <div class="color-swatch w-10 h-10 rounded-full cursor-pointer" data-color="${colors[i]}" style="background-color:${colors[i]};"></div>
  `;
}
// going into container named colorsGrid and make it = cartona and make any event on
colorsGrid.innerHTML = cartona;
colorsGrid.addEventListener("click", function (e) {
  if (e.target.classList.contains("color-swatch")) {
    let colorContainer = e.target.dataset.color;
    document.documentElement.style.setProperty(
      "--color-primary",
      colorContainer,
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      colorContainer,
    );
    document.documentElement.style.setProperty(
      "--color-accent",
      colorContainer,
    );
  }
});
// reset btn
resetButton.addEventListener("click", function () {
  document.body.classList.remove("font-alexandria", "font-cairo");
  document.body.classList.add("font-tajawal");
  document.documentElement.style.removeProperty("--color-secondary");
  document.documentElement.style.removeProperty("--color-primary");
  document.documentElement.style.removeProperty("--color-accent");
});
//________________ aside slider end with reset setting___________________

// #########################################################################################

//________________ nav &  tabs___________________
// 👇that was buttons for all nav tabs(filter)
let navButtons = document.querySelectorAll(".portfolio-filter");
// 👇that was cards for all nav tabs
let navCards = document.querySelectorAll(".portfolio-item");
// will loop on all buutons
for (let i = 0; i < navButtons.length; i++) {
  let filter = navButtons[i];
  filter.addEventListener("click", function (e) {
    // new loop in inner click function to do event when i just click
    for (let m = 0; m < navButtons.length; m++) {
      navButtons[m].classList.remove("active");
      navButtons[m].classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
    }

    e.currentTarget.classList.add("active");
    e.currentTarget.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    let clickedFilter = e.currentTarget.dataset.filter;
    for (let n = 0; n < navCards.length; n++) {
      let isMatch =
        clickedFilter === "all" ||
        navCards[n].dataset.category === clickedFilter;
      navCards[n].style.display = isMatch ? "block" : "none";
    }
  });
}

//_______________________form____________________

let fullName = document.getElementById("full-name");
let fullNameError = document.getElementById("full-name-error");
fullName.addEventListener("input", function () {
  let name = fullName.value.trim();
  let namePattern = /^[a-zA-Zء-ي][a-zA-Zء-ي\s]{2,19}$/;
  if (namePattern.test(name)) {
    fullNameError.textContent = "";
    fullName.classList.remove("border-red-500");
  } else {
    fullNameError.textContent =
      "الاسم لازم يبدأ بحرف ويكون من 3 إلى 20 حرف/رقم";
    fullName.classList.add("border-red-500");
  }
});
fullName.addEventListener("blur", function () {
  if (fullName.value.trim() === "") {
    fullNameError.textContent = "";
    fullName.classList.remove("border-red-500");
  }
});

let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
email.addEventListener("input", function () {
  let emailAddress = email.value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(emailAddress)) {
    emailError.textContent = "";
    emailError.classList.remove("border-red-500");
  } else {
    emailError.textContent = "من فضلك أدخل بريد إلكتروني صحيح";
    emailError.classList.add("border-red-500");
  }
});
email.addEventListener("blur", function () {
  if (email.value.trim() === "") {
    emailError.textContent = "";
    email.classList.remove("border-red-500");
  }
});

let phone = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
phone.addEventListener("input", function () {
  let phoneNumber = phone.value.trim();
  let phonePattern = /^01[0125][0-9]{8}$/;
  if (phonePattern.test(phoneNumber)) {
    phoneError.textContent = "";
    phoneError.classList.remove("border-red-500");
  } else {
    phoneError.textContent =
      "رقم الهاتف لازم يبدأ بـ 010 أو 011 أو 012 أو 015 ويتكون من 11 رقم";
    phone.classList.add("border-red-500");
  }
});
phone.addEventListener("blur", function () {
  if (phone.value.trim() == "") {
    phoneError.textContent = "";
    phone.classList.remove("border-red-500");
  }
});

let contactForm = document.querySelector('form[aria-label="نموذج التواصل"]');
let submitBtn = document.querySelector('form button[type="submit"]');

contactForm.addEventListener("submit", function (e) {
  let isValid = true;
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let phoneInput = document.querySelector("#phone");

  if (nameInput.value.trim() === "") {
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
  }
  if (phoneInput.value.trim() === "") {
    isValid = false;
  }
  if (!isValid) {
    e.preventDefault();
    
  }
});