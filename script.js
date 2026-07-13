const reveals = document.querySelectorAll(".reveal");
const heroImage = document.getElementById("heroImage");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const serviceModal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalButton = document.getElementById("modalButton");
const closeModalButton = document.querySelector(".close");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const imageCloseButton = document.querySelector(".image-close");

const services = {
  fotografia: {
    title: "Fotografia",
    text: `Ensaios, eventos, produtos, empresas e retratos criados para transmitir profissionalismo.<br><br>
      ✔ Direcionamento durante as fotos<br>
      ✔ Tratamento profissional<br>
      ✔ Entrega digital organizada<br>
      ✔ Atendimento personalizado`,
    message: "Olá! Vi seu site e gostaria de solicitar um orçamento para Fotografia."
  },

  video: {
    title: "Produção de vídeos",
    text: `Vídeos pensados para apresentar a sua marca, prender a atenção e gerar conexão.<br><br>
      ✔ Reels e vídeos para redes sociais<br>
      ✔ Bastidores e eventos<br>
      ✔ Vídeos institucionais<br>
      ✔ Conteúdo promocional`,
    message: "Olá! Vi seu site e gostaria de solicitar um orçamento para Produção de Vídeos."
  },

  social: {
    title: "Social media",
    text: `Planejamento e criação de conteúdo para tornar a sua presença digital mais estratégica.<br><br>
      ✔ Planejamento de conteúdo<br>
      ✔ Posts, reels e carrosséis<br>
      ✔ Identidade visual para redes<br>
      ✔ Acompanhamento do perfil`,
    message: "Olá! Vi seu site e gostaria de solicitar um orçamento para Social Media."
  }
};

function revealSections() {
  const visibleArea = window.innerHeight - 100;

  reveals.forEach((section) => {
    if (section.getBoundingClientRect().top < visibleArea) {
      section.classList.add("active");
    }
  });
}

function openService(service) {
  const selectedService = services[service];

  if (!selectedService) return;

  modalTitle.textContent = selectedService.title;
  modalText.innerHTML = selectedService.text;
  modalButton.href = `https://wa.me/5544991080433?text=${encodeURIComponent(selectedService.message)}`;

  serviceModal.classList.add("open");
  serviceModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeServiceModal() {
  serviceModal.classList.remove("open");
  serviceModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function openImage(imagePath, altText) {
  modalImage.src = imagePath;
  modalImage.alt = altText;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => openService(card.dataset.service));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openService(card.dataset.service);
    }
  });
});

document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("click", () => {
    openImage(item.dataset.image, item.querySelector("img").alt);
  });
});

closeModalButton.addEventListener("click", closeServiceModal);
imageCloseButton.addEventListener("click", closeImageModal);

serviceModal.addEventListener("click", (event) => {
  if (event.target === serviceModal) closeServiceModal();
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeImageModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeServiceModal();
    closeImageModal();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

window.addEventListener("mousemove", (event) => {
  if (!heroImage || window.innerWidth < 900) return;

  const x = (window.innerWidth / 2 - event.clientX) / 55;
  const y = (window.innerHeight / 2 - event.clientY) / 55;

  heroImage.style.setProperty("--pointer-x", `${x}px`);
  heroImage.style.setProperty("--pointer-y", `${y}px`);
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", () => {
  document.body.classList.add("ready");
  revealSections();
});
