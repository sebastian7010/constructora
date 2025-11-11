// Hamburger Menu
const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Cerrar menú cuando se hace click en un link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
  })
})

// Cerrar menú cuando se hace click fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navLinks.classList.remove("active")
  }
})

// WhatsApp Button - Reemplaza 'YOUR_PHONE_NUMBER' con tu número
// Ejemplo: +34123456789 (incluye el código del país)
const whatsappPhone = "YOUR_PHONE_NUMBER"
const whatsappBtn = document.querySelector(".whatsapp-btn")
whatsappBtn.href = `https://wa.me/${whatsappPhone}?text=Estoy%20interesado%20en%20sus%20servicios`
