const ghForm = document.getElementById("ghForm");

ghForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("ghName").value.trim();
  const interest = document.getElementById("ghInterest").value;
  const agree = document.getElementById("ghAgree").checked;

  if (!name || !interest || !agree) {
    alert("Lengkapi formulir dan setujui peraturan GH.");
    return;
  }

  const phone = "6285600599514";

  const message =
`🌍 PENDAFTARAN ANGGOTA GEO HISTORY

Nama: ${name}
Minat: ${interest}

Status: Menyetujui peraturan GH.

Saya ingin mendaftar sebagai anggota Geo History.`;

  const whatsappURL =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
