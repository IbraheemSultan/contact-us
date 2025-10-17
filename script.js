
    // ✅ Initialize EmailJS
    (function () {
        emailjs.init("Hv88N5fcD7iWjmLdZ"); 
    })();

    const contactForm = document.forms["contactForm"];
    const nameField = contactForm["name"];
    const emailField = contactForm["email"];
    const subjectField = contactForm["subject"];
    const messageField = contactForm["message"];

    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Reset error styles
        [nameField, emailField, subjectField, messageField].forEach(f => {
            f.classList.remove("border-red-500");
        });

        // Trim values
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const subject = subjectField.value.trim();
        const message = messageField.value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill out all fields!",
            });

            [nameField, emailField, subjectField, messageField].forEach(f => {
                if (!f.value.trim()) f.classList.add("border-red-500");
            });

            return;
        }

        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address!",
            });
            emailField.classList.add("border-red-500");
            return;
        }

        // ✅ Send Email via EmailJS
        const serviceID = "service_l19vo8b";   
        const templateID = "template_9oht09o";

        emailjs.send(serviceID, templateID, {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message Sent Successfully!",
                text: "We’ll get back to you soon.",
                showConfirmButton: false,
                timer: 1000
            });
            contactForm.reset();
        })
        .catch((err) => {
            console.error("EmailJS Error:", err);
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: "Please try again later.",
            });
        });
    });

