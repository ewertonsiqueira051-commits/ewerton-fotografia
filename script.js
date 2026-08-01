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
const galleryCaption = document.getElementById("galleryCaption");
const galleryCounter = document.getElementById("galleryCounter");
const previousButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");

let activeGallery = null;
let activeImageIndex = 0;
let touchStartX = 0;

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

const galleries = {
  floribella: {
    title: "Reinauguração Floribella",
    images: [
      "floribella-1.jpg",
      "floribella-2.jpg",
      "floribella-3.jpg",
      "floribella-4.jpg"
    ]
  },

  natureza: {
    title: "Natureza",
    images: [
      "natureza-1.JPG",
      "natureza-2.JPG",
      "natureza-3.jpg",
      "natureza-4.JPG"
    ]
  },

  animais: {
    title: "Animais",
    images: [
      "animais-1.jpg",
      "animais-2.jpg",
      "animais-3.JPG",
      "animais-4.JPG"
    ]
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

function updateGallery() {
  const gallery = galleries[activeGallery];

  modalImage.src = gallery.images[activeImageIndex];
  modalImage.alt = `${gallery.title} — foto ${activeImageIndex + 1}`;
  galleryCaption.textContent = gallery.title;
  galleryCounter.textContent = `${activeImageIndex + 1} / ${gallery.images.length}`;
}

function openGallery(galleryName) {
  activeGallery = galleryName;
  activeImageIndex = 0;

  updateGallery();

  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function showNextImage() {
  const gallery = galleries[activeGallery];

  activeImageIndex = (activeImageIndex + 1) % gallery.images.length;
  updateGallery();
}

function showPreviousImage() {
  const gallery = galleries[activeGallery];

  activeImageIndex =
    (activeImageIndex - 1 + gallery.images.length) % gallery.images.length;

  updateGallery();
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
  item.addEventListener("click", () => openGallery(item.dataset.gallery));
});

closeModalButton.addEventListener("click", closeServiceModal);
imageCloseButton.addEventListener("click", closeImageModal);

previousButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

serviceModal.addEventListener("click", (event) => {
  if (event.target === serviceModal) closeServiceModal();
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeImageModal();
});

modalImage.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

modalImage.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].screenX;

  if (touchStartX - touchEndX > 45) showNextImage();
  if (touchEndX - touchStartX > 45) showPreviousImage();
}, { passive: true });

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeServiceModal();
    closeImageModal();
  }

  if (!imageModal.classList.contains("open")) return;

  if (event.key === "ArrowRight") showNextImage();
  if (event.key === "ArrowLeft") showPreviousImage();
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
