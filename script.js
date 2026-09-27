/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu when link is clicked */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   PROJECT MODAL
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");


projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.getAttribute("data-title");

        const description =
            card.getAttribute("data-description");

        const image =
            card.getAttribute("data-image");


        modalTitle.textContent = title;

        modalDescription.textContent =
            description;

        modalImage.src = image;

        modalImage.alt = title;


        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close modal */

modalClose.addEventListener("click", closeModal);


projectModal.addEventListener("click", event => {

    if (event.target === projectModal) {

        closeModal();

    }

});


function closeModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}



/* Close modal with Escape */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});



/* =========================================================
   SKILL BAR ANIMATION
========================================================= */

const skillBars =
    document.querySelectorAll(".progress span");


const skillObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.getAttribute("data-width");

                    entry.target.style.width = width;

                    skillObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .project-card, .about-content, .about-image, .skills-intro, .skill-bars, .contact-info, .contact-form-container"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color =
            "#b00020";

        return;

    }


    formMessage.textContent =
        "Message sent successfully!";

    formMessage.style.color =
        "#286b3b";


    contactForm.reset();


    setTimeout(() => {

        formMessage.textContent = "";

    }, 4000);

});



/* =========================================================
   DOWNLOAD CV BUTTON
========================================================= */

const downloadCV =
    document.getElementById("downloadCV");


downloadCV.addEventListener("click", event => {

    event.preventDefault();

    /*
        Replace "Raheem-CV.pdf" with
        the actual name of your CV file.

        Example:

        <a href="Raheem-CV.pdf"
           download>
    */

    const cvLink =
        document.createElement("a");

    cvLink.href = "Raheem-CV.pdf";

    cvLink.download = "Raheem-CV.pdf";

    document.body.appendChild(cvLink);

    cvLink.click();

    document.body.removeChild(cvLink);

});



/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(
        ".primary-button, .secondary-button, .dark-button, .submit-button, .header-button"
    );


buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(0.97)";


        setTimeout(() => {

            button.style.transform =
                "";

        }, 150);

    });

});



/* =========================================================
   PREVENT EMPTY SOCIAL LINKS FROM JUMPING
========================================================= */

const socialLinks =
    document.querySelectorAll(
        ".social-links a, .contact-socials a"
    );


socialLinks.forEach(link => {

    link.addEventListener("click", event => {

        const href =
            link.getAttribute("href");

        if (href === "#") {

            event.preventDefault();

        }

    });

});



/* =========================================================
   PAGE LOADING
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});