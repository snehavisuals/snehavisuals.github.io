const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const packageSelect = document.querySelector("#package-select");
const yearOutput = document.querySelector("#current-year");
const eventDate = document.querySelector('input[name="eventDate"]');

if (yearOutput) {
  yearOutput.textContent = String(new Date().getFullYear());
}

if (eventDate) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  eventDate.min = now.toISOString().slice(0, 16);
}

function closeMenu() {
  if (!menuToggle || !navigation) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
    document.body.classList.toggle("menu-open", !isExpanded);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

if (packageSelect) {
  document.querySelectorAll(".package-select").forEach((link) => {
    link.addEventListener("click", () => {
      packageSelect.value = link.dataset.package;
    });
  });
}
