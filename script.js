const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const yearOutput = document.querySelector("#current-year");
const eventDate = document.querySelector('input[name="eventDate"]');
const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");
const customerPhone = bookingForm?.querySelector('input[name="phone"]');
const bookingWhatsAppNumber = "917295013327";

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

if (customerPhone) {
  customerPhone.addEventListener("input", () => {
    customerPhone.setCustomValidity(
      customerPhone.value && !/^\d{10}$/.test(customerPhone.value)
        ? "Enter exactly 10 digits, without the country code."
        : "",
    );
  });
}

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const rawEventDate = String(formData.get("eventDate") || "");
    const formattedEventDate = rawEventDate
      ? new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(rawEventDate))
      : "";
    const formats = formData.getAll("format").map(String);
    const customerPhoneNumber = `${formData.get("phoneCountryCode")}${formData.get("phone")}`;
    const message = [
      "Hi Snehavisuals, I'd like to enquire about booking a celebration.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone / WhatsApp: ${customerPhoneNumber}`,
      `Occasion: ${formData.get("eventType")}`,
      `Preferred formats: ${formats.length ? formats.join(", ") : "Not specified"}`,
      ...(formattedEventDate ? [`Event date & time: ${formattedEventDate}`] : []),
      ...(formData.get("venue") ? [`Venue & location: ${formData.get("venue")}`] : []),
      ...(formData.get("vision") ? [`Additional details: ${formData.get("vision")}`] : []),
    ].join("\n");
    const whatsappUrl = `https://wa.me/${bookingWhatsAppNumber}?text=${encodeURIComponent(message)}`;

    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }

    formStatus.replaceChildren(
      document.createTextNode("WhatsApp should open with your message ready. Review it and tap Send to submit your enquiry. "),
    );
    const fallbackLink = document.createElement("a");
    fallbackLink.href = whatsappUrl;
    fallbackLink.target = "_blank";
    fallbackLink.rel = "noopener noreferrer";
    fallbackLink.textContent = "Open WhatsApp";
    formStatus.append(fallbackLink);
  });
}
