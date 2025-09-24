(function () {
  emailjs.init("qVzCyqB_-vT8P3tK3"); // EmailJS public key
})();

const form = document.querySelector('form[action^="mailto"]');
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default mailto behavior

  emailjs.sendForm("service_n6uhgkw", "template_z3mr1ah", this).then(
    function () {
      alert("✅ Message sent successfully!");
      form.reset();
    },
    function (err) {
      alert("❌ Oops! Something went wrong: " + JSON.stringify(err));
    }
  );
});
