

const faqheader = document.querySelectorAll(".card .para");
faqheader.forEach((element, ia) => {
    element.addEventListener("click", (eo) => {
        element.nextElementSibling.classList.toggle("active");

        const btn = document.querySelector(".btn")

        if (element.nextElementSibling.classList.contains("active")) {
            btn.textContent = "expand_less";

        } else {
            element.classList.remove("active");
            btn.textContent = "expand_more";
        }
    })
});