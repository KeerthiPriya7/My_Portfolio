document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    const modal = document.createElement("div");
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.left = "50%";
    modal.style.top = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "white";
    modal.style.padding = "2em";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    modal.innerHTML = `
        <p id="modal-message"></p>
        <button id="close-modal" style="
            padding: 0.5em 1em;
            background-color: #4b0082;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        ">Close</button>
    `;
    document.body.appendChild(modal);

    const modalMessage = document.getElementById("modal-message");
    const closeModal = document.getElementById("close-modal");

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (name === "" || email === "" || message === "") {
            modalMessage.textContent = "Please fill in all fields.";
            modal.style.display = "block";
            return;
        }

        // Form validation for email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            modalMessage.textContent = "Please enter a valid email address.";
            modal.style.display = "block";
            return;
        }

        // Simulate sending form data to a server
        console.log("Form submitted:", { name, email, message });
        modalMessage.textContent = `Thank you for your message, ${name}! We will get back to you shortly.`;
        modal.style.display = "block";

        // Reset form
        contactForm.reset();
    });
});
