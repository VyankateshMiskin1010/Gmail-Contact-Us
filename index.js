document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit-button")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        Message: document.getElementById("message").value,
      };

      const serviceID = "service_9wbgkvj";
      const templateID = "template_mtwfjas";

      emailjs
        .send(serviceID, templateID, params)
        .then(() => {
          document.getElementById("name").value = "name";
          document.getElementById("email").value = "email";
          document.getElementById("phone").value = "phone";
          document.getElementById("message").value = "message";

          alert("Your Message send succesfully");
        })
        .catch((err) => console.log(err));
    });
});
