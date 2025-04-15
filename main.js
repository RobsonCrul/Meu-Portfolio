document.addEventListener("DOMContentLoaded", function () {
    // Inicializa AOS
    AOS.init();
  
    // Inicializa EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
  
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        .then(function () {
          alert("Email enviado com sucesso!");
          form.reset();
        }, function (error) {
          alert("Erro ao enviar. Tente novamente.");
          console.error("Erro:", error);
        });
    });
  });
  