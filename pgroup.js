// RESPONSIVE NAVBAR //

// Afficher le dropdown menu lorsqu'on clique sur l'icone Burger //
const toggleMenu = document.querySelector('.toggle_menu')
const toggleMenuIcon = document.querySelector('.toggle_menu i')
const dropDownMenu = document.querySelector('#dropdown_navbar')

toggleMenu.onclick = function () {
  dropDownMenu.classList.toggle('open')
  //  Fermer le dropdown menu avec l'icone xmark //
  const isOpen = dropDownMenu.classList.contains('open')

  toggleMenuIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

}


//  DEBUT CAROUSSEL AVIS  //

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//  FIN CAROUSSEL AVIS  ///


//  DEBUT CAROUSSEL REALISATION  //

let currentSlideDone = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    document.getElementById(`s${currentSlideDone}`).checked = true;
    currentSlideDone++;
    if (currentSlideDone > 5) {
      currentSlideDone = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    pauseSlide();
    container.classList.add('zoomed');
    container.style.overflow = 'visible'; // Change overflow to visible when zoomed
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
    container.classList.remove('zoomed');
    container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
  });
  container.addEventListener('mousemove', (event) => {
    if (!container.classList.contains('zoomed')) {
      return;
    }
    const boundingRect = container.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    if (
      offsetX < 0 || offsetX > boundingRect.width ||
      offsetY < 0 || offsetY > boundingRect.height
    ) {
      container.classList.remove('zoomed');
      container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
    }
  });
});



//  FIN CAROUSSEL REALISATION  //


//  DEBUT  CAROUSSEL CONFIANCE  //

// imagesLoaded.js, Hammer.js, and Sequence.js loaded as external assets


let sequenceElement = document.getElementById("sequence");

let options = {
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true
}

let mySequence = sequence(sequenceElement, options);

//  FIN CAROUSSEL CONFIANCE  //
