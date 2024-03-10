// --- Animation on scroll ------//
const sr = ScrollReveal();

sr.reveal(".type-service-1", {
  origin: "bottom",
  distance: "50px",
  scale: "0.7",
  interval: 100,
  mobile: true,
  reset: false,
  duration: 2000,
});

sr.reveal("#titre-service", {
  origin: "left",
  distance: "50px",
  scale: "1",
  interval: 600,
  mobile: true,
  reset: false,
  duration: 6000,
});

sr.reveal(".avis", {
  origin: "left",
  scale: "0.5",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  mobile: true,
  reset: false,
  duration: 3500,
});

sr.reveal("#confiance", {
  origin: "left",
  scale: "0.5",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  mobile: true,
  reset: false,
  duration: 3500,
});

sr.reveal("#titre-realisation", {
  flip: "left",
  dictance: "50px",
  scale: "0.5",
  interval: 600,
  mobile: true,
  reset: false,
  duration: 3500,
});

sr.reveal("#titre-evenement", {
  flip: "left",
  dictance: "50px",
  scale: "0.5",
  interval: 600,
  mobile: true,
  reset: false,
  duration: 3500,
});

// -- FIN ANIMATION ONSCROLL --//

//--  DEBUT ANIMATION BANDEROLE HEADER ---//


const scrollingText = document.getElementById("annonce_header");


scrollingText.addEventListener("finish", () => {
    scrollingText.scrollLeft = 0;
});

//--  FIN  ANIMATION BANDEROLE HEADER ---//

//---------------------------------------  DEBUT POPUP ZOOM LOGO     ------------------------------------- //

const logoZoom = document.getElementById("logo");

function logoDisplay() {
   document.getElementById("blur_logo").style.display = "block";
}

logoZoom.addEventListener("click", logoDisplay);

function closeLogoDisplay() {
 
  document.getElementById("blur_logo").style.display = "none";
}

const closeLogoZoom = document.querySelector(".close_logo");
closeLogoZoom.addEventListener("click", closeLogoDisplay);

window.addEventListener("scroll", closeLogoDisplay);

// ---------------------------------------------   FIN POPUP ZOOM LOGO   --------------------------------------//

//----------------------- -  DEBUT NAVBAR DISPLAY ON SCROLL  -------------------------------------- //

let lastScrollTop = 0;
let scrollTimeout;
let isHeaderAtTop = false;

window.addEventListener(
  "scroll",
  () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    clearTimeout(scrollTimeout);

    
    if (currentScroll > lastScrollTop) {
      
      document.getElementById("header").classList.add("hidden");
      isHeaderAtTop = false;
    } else if (currentScroll < lastScrollTop && currentScroll > 0) {
      
      if (!isHeaderAtTop) {
        document.getElementById("header").classList.remove("hidden");
      }
      isHeaderAtTop = false;
    }

    if (currentScroll === 0) {
      document.getElementById("header").classList.remove("hidden");
      isHeaderAtTop = true;
    } else {
      if (
        !document.getElementById("header").matches(":hover") &&
        currentScroll > 115
      ) {
        scrollTimeout = setTimeout(() => {
          document.getElementById("header").classList.add("hidden");
        }, 1500);
      }
    }

    if (currentScroll >= 0.02 * windowHeight) {
      document.getElementById("header").style.backgroundColor =
        "rgb(0, 0, 0, 0.650)";
    } else {
      document.getElementById("header").style.backgroundColor = "";
    }

    lastScrollTop = Math.max(currentScroll, 0);
  },
  false
);

document.getElementById("header").addEventListener("mouseenter", () => {
  clearTimeout(scrollTimeout);
});

document.getElementById("header").addEventListener("mouseleave", () => {
  if (
    !document.getElementById("header").matches(":hover") &&
    window.scrollY > 115
  ) {
    scrollTimeout = setTimeout(() => {
      document.getElementById("header").classList.add("hidden");
    }, 1500);
  }
});

// --------------------    FIN NAVBAR DISPLAY ON SCROLL   -------------------------- //

const toggleMenu = document.querySelector(".toggle_menu");
const toggleMenuIcon = document.querySelector(".toggle_menu i");
const dropDownMenu = document.querySelector("#dropdown_navbar");

function closeDropDownMenu() {
  dropDownMenu.classList.remove("open");
  toggleMenuIcon.classList = "fa-solid fa-bars";
}

toggleMenuIcon.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleMenuIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

window.addEventListener("scroll", closeDropDownMenu);

//  --------------- DEBUT   MARQUAGE MENU AU DISPLAY   --------------------------- //

$(document).ready(function () {
  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();
    $(".dropdown_link li").each(function () {
      let currLink = $(this);
      let refElement = $($(currLink.children("a").attr("href")));
      if (refElement.length) {
        let refElementTop = refElement.offset().top;
        let refElementBottom = refElementTop + refElement.outerHeight();

        let tolerance = 100;

        if (
          scrollPos + tolerance >= refElementTop &&
          scrollPos < refElementBottom - tolerance
        ) {
          $(".dropdown_link li").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      }
    });
  });
});

//  ------------------ FIN   MARQUAGE MENU AU DISPLAY   --------------------------- //

// --------------- -  DEBUT   DEFILEMENT VERS HAUT ACCUEIL  -- -- -------------------- //

$(document).ready(function () {
  
  $(".dropdown_link li:first-child a").click(function (e) {
    
    if (window.scrollY === 0) {
      e.preventDefault();
      location.reload(); 
    }
    else {
      e.preventDefault(); 
      $("html, body").animate({ scrollTop: 0 }, "slow"); 
    }
  });

  
  $(".navbar_link li:first-child a").click(function (e) {
    
    if (window.scrollY === 0) {
      e.preventDefault(); 
      location.reload(); 
    }
    else {
      e.preventDefault(); 
      $("html, body").animate({ scrollTop: 0 }, "slow"); 
    }
  });

  
  document.getElementById("accueil").addEventListener("click", function(event) {
    if (window.scrollY === 0) { 
        event.preventDefault(); 
        location.reload(); 
    }
  });
});
// ---------------      FIN  DEFILEMENT VERS HAUT ACCUEIL    ------------------------ //

//---------------------------------------------------  DEBUT  LOGIN   --------------------------//

const loginRegister = document.getElementById("icon_login");
const loginRegisterDropdown = document.getElementById("icon_login_dropdown");

function showLogin() {
  document.getElementById("blur_login").style.display = "block";
  document.container.style.filter = "blur(5px)";
}

loginRegister.addEventListener("click", showLogin);
loginRegisterDropdown.addEventListener("click", showLogin);

function closeLogin() {
  document.getElementById("blur_login").style.display = "none";
  document.container.style.filter = "none";
}

const closeLoginRegister = document.querySelector(".close_login");
closeLoginRegister.addEventListener("click", closeLogin);

//window.addEventListener("scroll", closeLogin);//

// ----------------------------------------------   FIN  LOGIN   ----------------------------------//

//---------------------------------------------  DEBUT POPUP LOGIN INDISPONIBLE  ----------------------------------//

const loginUnavailable = document.getElementById("btn_login");
const registerUnavailable = document.getElementById("btn_register");
const buttonPublish = document.querySelector(".btn_publish");

function showMaintenance() {
  document.getElementById("maintenance_message").style.display = "block";
  document.container.style.filter = "blur(5px)";
}

loginUnavailable.addEventListener("click", showMaintenance);
registerUnavailable.addEventListener("click", showMaintenance);
buttonPublish.addEventListener("click", showMaintenance);

function closeMaintenance() {
  document.getElementById("maintenance_message").style.display = "none";
  document.container.style.filter = "none";
}

const closeWindowMaintenance = document.querySelector(".close_maintenance");
closeWindowMaintenance.addEventListener("click", closeMaintenance);

window.addEventListener("scroll", closeMaintenance);

//  --------------------------------------------------  FIN  POPUP LOGIN INDISPONIBLE  ------------------------------------//

//  --------------------------------------------------  DEBUT caroussel bg parallax  ------------------------------------//

let slideIndexBg = 0;
let timeoutBg; // Variable pour stocker le délai de l'autoplay

const slidesBg = document.querySelectorAll(".slide_bg");
const dotsBg = document.querySelectorAll(".dot_bg");

function showSlideBg(n) {
  slidesBg.forEach((slide) => {
    slide.style.display = "none";
  });
  dotsBg.forEach((dot) => {
    dot.classList.remove("active");
  });
  slidesBg[n].style.display = "block";
  dotsBg[n].classList.add("active");
}

function currentSlideBg(n) {
  slideIndexBg = n;
  showSlideBg(slideIndexBg);
  restartAutoPlayBg();
}

function nextSlideBg() {
  slideIndexBg++;
  if (slideIndexBg >= slidesBg.length) {
    slideIndexBg = 0;
  }
  showSlideBg(slideIndexBg);
}

function startAutoPlayBg() {
  timeoutBg = setInterval(() => {
    nextSlideBg();
  }, 5500);
}

function restartAutoPlayBg() {
  clearInterval(timeoutBg);
  startAutoPlayBg();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlideBg(slideIndexBg);
  startAutoPlayBg();

  dotsBg.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlideBg(index);
    });
  });
});

//----------------------- scroll scale slider image BG  ---------------------//

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  const image = document.querySelector(".caroussel-bg");

  const scale = 1 + (scrollY * 0.06) / window.innerHeight;

  image.style.transform = `scale(${scale})`;
});
//  --------------------------------------------------  FIN caroussel bg parallax  ------------------------------------//

//  DEBUT CAROUSSEL AVIS  //

let slideIndexAvis = 0;
let timeoutAvis; // Variable pour stocker le délai de l'autoplay

const slidesAvis = document.querySelectorAll(".slide_avis");
const dotsAvis = document.querySelectorAll(".dot_avis");

function showSlideAvis(n) {
  slidesAvis.forEach((slide) => {
    slide.style.display = "none";
  });
  dotsAvis.forEach((dot) => {
    dot.classList.remove("active");
  });
  slidesAvis[n].style.display = "block";
  dotsAvis[n].classList.add("active");
}

function currentSlideAvis(n) {
  slideIndexAvis = n;
  showSlideAvis(slideIndexAvis);
  restartAutoPlayAvis();
}

function nextSlideAvis() {
  slideIndexAvis++;
  if (slideIndexAvis >= slidesAvis.length) {
    slideIndexAvis = 0;
  }
  showSlideAvis(slideIndexAvis);
}

function startAutoPlayAvis() {
  timeoutAvis = setInterval(() => {
    nextSlideAvis(); // Démarre l'autoplay après 10 secondes
  }, 8000);
}

function restartAutoPlayAvis() {
  clearInterval(timeoutAvis); // Arrête l'autoplay
  startAutoPlayAvis(); // Redémarre l'autoplay
}

document.addEventListener("DOMContentLoaded", () => {
  showSlideAvis(slideIndexAvis); // Afficher la première image au chargement de la page
  startAutoPlayAvis(); // Démarre l'autoplay initialement

  dotsAvis.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlideAvis(index); // Appelle currentSlide avec l'index du point cliqué
    });
  });
});

//  FIN CAROUSSEL AVIS  ///

//  ------------------     DEBUT CAROUSSEL REALISATION    ------------------------- //
$(".work").click(function () {
  $(".work").removeClass("active");
  $(this).addClass("active");
});

// -------------------   FIN CAROUSSEL REALISATION   ----------------------------//

//--------------------------    DEBUT CAROUSSEL EVENEMENT     ----------------------------------//

let currentSlideDone = 1;
let isPaused = false; // Variable to check if the slideshow is paused

const changeSlide = () => {
  if (!isPaused) {
    document.getElementById(`s${currentSlideDone}`).checked = true;
    currentSlideDone++;
    if (currentSlideDone > 5) {
      currentSlideDone = 1;
    }
  }
};

let slideInterval = setInterval(changeSlide, 5000);

const pauseSlide = () => {
  isPaused = true;
};

const resumeSlide = () => {
  isPaused = false;
};

document.querySelectorAll(".zoom-container").forEach((container) => {
  container.addEventListener("mouseover", () => {
    pauseSlide();
    container.classList.add("zoomed");
    container.style.overflow = "visible";
  });
  container.addEventListener("mouseout", () => {
    resumeSlide();
    container.classList.remove("zoomed");
    container.style.overflow = "hidden";
  });
  container.addEventListener("mousemove", (event) => {
    if (!container.classList.contains("zoomed")) {
      return;
    }
    const boundingRect = container.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    if (
      offsetX < 0 ||
      offsetX > boundingRect.width ||
      offsetY < 0 ||
      offsetY > boundingRect.height
    ) {
      container.classList.remove("zoomed");
      container.style.overflow = "hidden";
    }
  });
});

// ------------------------------    FIN CAROUSSEL EVENEMENT    -----------------------------------//

// --------------------------------- DEBUT  TRANSITION EVENEMENT LEFT-RIGHT  -------------------------------//

const container = document.getElementById("bloc_eve");
const publishBtn = document.getElementById("btn_publish_toggle");
const reserveBtn = document.getElementById("btn_reserve_toggle");

publishBtn.addEventListener("click", () => {
  container.classList.add("active");
  container.classList.remove("reserve-active");
});

reserveBtn.addEventListener("click", () => {
  container.classList.remove("active");
  container.classList.add("reserve-active");
});

// ---------------------------------FIN  TRANSITION EVENEMENT LEFT-RIGHT  -------------------------------//

/*----------------------------  DEBUT UPLOAD ANNONCE  JS -----------------------*/

const fileInput = document.getElementById("file");
const fileNameDisplay = document.getElementById("file-name");
const deleteIcon = document.querySelector(".delete-icon");
const previewIcon = document.querySelector(".preview-icon");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    fileNameDisplay.textContent = file.name;
    deleteIcon.style.display = "inline";
    previewIcon.style.display = "inline";
  } else {
    fileNameDisplay.textContent = "";
    deleteIcon.style.display = "none";
    previewIcon.style.display = "none";
  }
});

deleteIcon.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  fileInput.value = "";
  fileNameDisplay.textContent = "";
  deleteIcon.style.display = "none";
  previewIcon.style.display = "none";
});

previewIcon.addEventListener("click", () => {
  const file = fileInput.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  }
});

/*------------------------------    FIN UPLOAD ANNONCE JS     -----------------------------*/

//---------------------------------------  pop up button reserve    ------------------------------------- //

const buttonReserve = document.querySelector(".btn_reserve");

function showPopup() {
  document.getElementById("blur_popup").style.display = "block";
}

buttonReserve.addEventListener("click", showPopup);
function closePopup() {
  document.getElementById("blur_popup").style.display = "none";
}

const closeButton = document.querySelector(".close_popup");
closeButton.addEventListener("click", closePopup);
window.addEventListener("scroll", closePopup);

// ---------------------------------------------   fin popup reseve   --------------------------------------//


// --------------------- RESPONSIVE  DEBUT CAROUSSEL REALISATION  --------------  //_

const works = document.querySelectorAll(".work");

works.forEach((work) => {
  work.addEventListener("click", () => {
    works.forEach((item) => {
      item.classList.remove("active");
    });

    work.classList.add("active");
  });
});




//  --------------------  RESPONSIVE FIN CAROUSSEL REALISATION   ----------------//


