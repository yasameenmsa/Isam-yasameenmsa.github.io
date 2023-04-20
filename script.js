/* JavaScript */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
}

/* Send email using EmailJS */
function sendMail(event) {
event.preventDefault();
// generate a five digit number for the contact number
const contactNumber = Math.floor(Math.random() * 100000);


// send email
emailjs.sendForm('service_g8zv5yo', 'template_uixnlji', event.target, `user_dMfbE5a5V5H5WDr29Xv5K`)
  .then((result) => {
      console.log(result.text);
      alert("Your message has been sent. We'll get back to you shortly.");
  }, (error) => {
      console.log(error.text);
      alert("An error occurred. Please try again.");
  });

// reset form fields
document.querySelector('#contact-form').reset();
}





/* Smooth scrolling for links */
$(document).ready(function(){
$("a").on('click', function(event) {


    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

/* Code for navbar animation */
const navbar = document.querySelector(".navbar");
window.onscroll = function () {
    if (window.pageYOffset > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
};

/* Code for portfolio section */
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((item) => {
    item.addEventListener("click", () => {
        window.open(item.dataset.url, "_blank");
    });
});

/* Code for contact form submission */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector(".form-control[name='name']").value;
    const email = form.querySelector(".form-control[name='email']").value;
    const message = form.querySelector(".form-control[name='message']").value;

    // Code for sending form data to the server would go here
    // For this demo, we will just log the data to the console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    form.reset();
});
