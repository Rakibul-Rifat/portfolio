const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

var i = 0;
var txt = 'Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff. Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff. Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff..';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

var typed = new Typed('#typing', {
  strings: ['Web Designer &', 'Frontend Developer.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,

});
var typed2 = new Typed('#typed2', {
  strings: ['Thank you!!!!!','Have a nice day...'],
  typeSpeed: 0,
  backSpeed: 0,
  fadeOut: true,
  loop: true
});
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('image__container');

    // Hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show curr image
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';

    // Repeat after 2 sec (2000ms)
    setTimeout(showSlides, 3000);}

//this part is simple user input form related javascript function
    function getText(){

var a = document.getElementById("name").value
var b = document.getElementById("email").value
var c = document.getElementById("subject").value
var d = document.getElementById("message").value
 document.getElementById("demo2").innerHTML =  "Hello! " + a + ', ' + b + "<br>"+ "<br>" +  "[ Thank you, Your message has been submitted.] ";
  console.log();
  }

