
    // side contect form
      const contactHoverButton = document.getElementById("contactHoverButton");
      const contactForm = document.getElementById("contactForm");
      const closeForm = document.getElementById("closeForm");

      contactHoverButton.addEventListener("mouseenter", () => {
        contactForm.classList.add("active");
      });

      contactForm.addEventListener("mouseleave", () => {
        contactForm.classList.remove("active");
      });

      closeForm.addEventListener("click", () => {
        contactForm.classList.remove("active");
      });
      document.addEventListener("DOMContentLoaded", function () {
        const toggleArrow = document.getElementById("toggleArrow");
        const contactBar = document.getElementById("contactBar");

        toggleArrow.addEventListener("click", function () {
          contactBar.classList.toggle("expanded");

          const icon = toggleArrow.querySelector("i");

          if (contactBar.classList.contains("expanded")) {
            icon.classList.remove("fa-arrow-right");
            icon.classList.add("fa-arrow-left");
            d.style.display = "none";
            contactBar.style.top = "50%";
          } else {
            icon.classList.remove("fa-arrow-left");
            icon.classList.add("fa-arrow-right");
            d.style.display = "block";
            contactBar.style.top = "30%";
          }
        });
      });