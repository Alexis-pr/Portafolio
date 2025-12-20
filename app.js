/* ======================
   FORMULARIO
====================== */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const telefono = document.getElementById("tel").value;
    const mensaje = document.getElementById("mensaje").value;

    alert(
      "Datos enviados correctamente:\n\n" +
      "Nombre: " + nombre + "\n" +
      "Teléfono: " + telefono + "\n" +
      "Mensaje: " + mensaje
    );

    form.reset();
  });
}

/* ======================
   MODAL CARDS
====================== */
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");

if (cards.length && modal) {
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.querySelector("img").src;
      modalTitle.textContent = card.querySelector("h3").textContent;
      modalText.textContent = card.querySelector("p").textContent;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
