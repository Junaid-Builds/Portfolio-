(function () {
  emailjs.init("VfqC-mZlhRJJkN-KZ"); // 🔑 Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Sending message...";

    emailjs.sendForm(
      "service_tnq7ddi",   // 🧩 Service ID
      "template_jttr218",  // 🧾 Template ID
      this
    ).then(
      function () {
        status.style.color = "lime";
        status.innerText = "Message sent successfully 🚀";
        form.reset();
      },
      function (error) {
        status.style.color = "red";
        status.innerText = "Failed to send message ❌";
        console.error("EmailJS Error:", error);
      }
    );
  });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

function openModal(element) {
  
  document.getElementById("modalTitle").innerText =
    element.getAttribute("data-title");

  document.getElementById("modalDesc").innerText =
    element.getAttribute("data-desc");

  document.getElementById("modalTech").innerText =
    element.getAttribute("data-tech");

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
window.onclick = function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeModal();
  }
};




