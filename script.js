/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =====================================
   SKILLS FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const skillCards =
    document.querySelectorAll(".skill-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Activate clicked button */
        button.classList.add("active");

        const selectedCategory =
            button.dataset.filter;


        skillCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =====================================
   COURSE SYLLABUS MODALS
===================================== */

const syllabusData = {

    computer: {

        title: "Computer Applications",

        topics: [
            "Computer hardware and software",
            "Operating systems",
            "File and folder management",
            "Microsoft Word",
            "Microsoft Excel",
            "Microsoft PowerPoint",
            "Internet and email",
            "Online collaboration",
            "Cybersecurity fundamentals",
            "Practical computer projects"
        ]

    },


    web: {

        title: "Web Development",

        topics: [
            "Introduction to web development",
            "HTML document structure",
            "Text, links and images",
            "HTML forms",
            "CSS selectors",
            "Colors and typography",
            "Flexbox and CSS Grid",
            "Responsive web design",
            "JavaScript fundamentals",
            "DOM manipulation",
            "Portfolio website project"
        ]

    },


    programming: {

        title: "Computer Programming",

        topics: [
            "Computational thinking",
            "Algorithms and flowcharts",
            "Variables and data types",
            "Conditional statements",
            "Loops",
            "Functions",
            "Arrays",
            "Debugging",
            "Problem-solving projects",
            "Introduction to object-oriented concepts"
        ]

    },


    robotics: {

        title: "Robotics & Automation",

        topics: [
            "Introduction to robotics",
            "Robot components",
            "Sensors and actuators",
            "Algorithms",
            "Programming robot movement",
            "Conditional logic",
            "Loops and repetition",
            "Obstacle detection",
            "Robot simulation",
            "Problem-solving robotics projects"
        ]

    }

};


const syllabusButtons =
    document.querySelectorAll(".syllabus-btn");

const modal =
    document.getElementById("syllabusModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");


syllabusButtons.forEach(button => {

    button.addEventListener("click", () => {

        const course =
            syllabusData[button.dataset.course];


        modalTitle.textContent =
            course.title;


        modalBody.innerHTML = `

            <ul>

                ${course.topics
                    .map(topic => `<li>${topic}</li>`)
                    .join("")}

            </ul>

        `;


        modal.classList.add("show");

    });

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


/* Close modal by clicking outside */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* Close modal with Escape */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});




/* =====================================
   CONTACT FORM
===================================== */

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

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        formMessage.textContent =
            "Please complete all fields.";

        return;

    }


    /*
       This is a front-end demonstration.
       A real website needs a backend,
       email service or form-processing API.
    */

    formMessage.textContent =
        `Thank you, ${name}. Your message has been prepared successfully.`;

    formMessage.style.color =
        "#15803d";


    contactForm.reset();

});


/* =====================================
   CURRENT YEAR
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();