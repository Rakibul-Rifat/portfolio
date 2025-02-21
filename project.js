//  this type js part
var i = 0;
var txt = 'Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff. Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff. Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff..';

var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

var typed = new Typed('#typing', {
  strings: ['Web Designer ', '&' ,'Frontend Web Developer.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,

});
var typed2 = new Typed('#typed2', {
  strings: ['Thank you!!!!!',' Have a nice day...'],
  typeSpeed: 0,
  backSpeed: 0,
  fadeOut: true,
  loop: true
});
//this part is simple user input form related javascript function
function getText(){

  var a = document.getElementById("name").value
  var b = document.getElementById("email").value
  var c = document.getElementById("subject").value
  var d = document.getElementById("message").value
   document.getElementById("demo2").innerHTML =  "Hello! " + a+ ', ' + b + "<br>" + c + "<br>" + d + "<br>" +  "[Thank you, Your information has been submitted.] ";
    console.log();
    }
 //this part is testimonial slider ooooooooooo
 const slider = document.querySelector(".testimonial-slider");
 const testimonials = slider.querySelectorAll(".testimonial");
 const nextBtn = slider.querySelector(".next");
 const prevBtn = slider.querySelector(".prev");
 const dotsContainer = slider.querySelector(".dots-container");
 let currentIndex = 0;
 let touchStartX = 0;
 let touchEndX = 0;
 let autoSlideInterval;
 //* event listeners
 function initApp() {
   slider.addEventListener("touchstart", handleTouchStart);
   slider.addEventListener("touchend", handleTouchEnd);
   slider.addEventListener("mouseover", stopAutoSlide);
   slider.addEventListener("mouseleave", startAutoSlide);
  //  nextBtn.addEventListener("click", nextTestimonial);
  //  prevBtn.addEventListener("click", prevTestimonial);
 }
 //* auto slide
 function startAutoSlide() {
   autoSlideInterval = setInterval(nextTestimonial, 2000); // 5s
 }
 function stopAutoSlide() {
   clearInterval(autoSlideInterval);
 }
 //* touch navigation
 function handleTouchStart(event) {
   touchStartX = event.touches[0].clientX;
 }
 function handleTouchEnd(event) {
   touchEndX = event.changedTouches[0].clientX;
   handleTouchSwipe();
 }
 function handleTouchSwipe() {
   const swipeThreshold = 50; // swipe sensitivity
   if (touchStartX - touchEndX > swipeThreshold) {
     nextTestimonial(); // swipe left
   } else if (touchEndX - touchStartX > swipeThreshold) {
     prevTestimonial(); // swipe right
   }
 }
 //* dot navigation
 function renderDotButtons() {
   for (let i = 0; i < testimonials.length; i++) {
     const button = document.createElement("button");
     button.classList.add("dot");
     button.classList.toggle("active", i === currentIndex);
     button.ariaLabel = `Jump to Testimonial ${i + 1}`;
     button.addEventListener("click", () => showTestimonial(i));
     dotsContainer.appendChild(button);
   }
 }
 //* slide functions
 function showTestimonial(index) {
   currentIndex = index;
   // update slide position
   testimonials.forEach((testimonial) => {
     testimonial.style.transform = `translateX(${-index * 100}%)`;
   });
   // update active dot
   const dots = document.querySelectorAll(".dot");
   dots.forEach((dot, i) => {
     dot.classList.toggle("active", i === currentIndex);
   });
 }
 function nextTestimonial() {
   const nextIndex = (currentIndex + 1) % testimonials.length;
   showTestimonial(nextIndex);
 }
 function prevTestimonial() {
   const prevIndex =
     (currentIndex - 1 + testimonials.length) % testimonials.length;
   showTestimonial(prevIndex);
 }
 //* initialize
 renderDotButtons();
 startAutoSlide();
 initApp();
 
// <!-- ======this is image slider part====== -->
const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prevv");
const nextEl = document.getElementById("nextt");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
// <!-- ======this is image slider part====== -->
