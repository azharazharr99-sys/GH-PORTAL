// Ganti URL berikut dengan tautan undangan grup WhatsApp GEO HISTORY.
const GEO_HISTORY_WHATSAPP = "https://chat.whatsapp.com/Bl02rVq1H2i17mgE3mwgxX";

const joinButton = document.getElementById("joinButton");
if (joinButton) joinButton.href = GEO_HISTORY_WHATSAPP;

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
