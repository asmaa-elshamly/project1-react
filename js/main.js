

(function() {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

 
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);


  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

// -------------------------------------------------------------------
const textElement = document.getElementById("changing-text");
const cursorElement = document.getElementById("cursor");
const words = ["Design", "Marketing", "Creation"];
let currentIndex = 0;
let currentWord = words[currentIndex];
let isDeleting = false;
let text = "";

function type() {
  if (isDeleting) {
    text = currentWord.slice(0, text.length - 1);
  } else {
    text = currentWord.slice(0, text.length + 1);
  }

  textElement.textContent = text;

  if (!isDeleting && text === currentWord) {
    setTimeout(() => {
      isDeleting = true;
    }, 3000); 
  } else if (isDeleting && text === "") {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % words.length; 
    currentWord = words[currentIndex];
  }

  const typingSpeed = 200;
  setTimeout(type, isDeleting ? 250 : typingSpeed); 
}

function handleCursor() {
  cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
}

setInterval(handleCursor, 500); 

type();



  // ----------------------------------------------------------------------------  // 
 
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });


  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }


  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);


  const glightbox = GLightbox({
    selector: '.glightbox'
  });

 
  new PureCounter();


  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

 
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

 
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

 
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// ---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var iso = new Isotope(".isotope-container", {
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows"
  });

  var filters = document.querySelectorAll(".portfolio-filters li");
  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      var filterValue = this.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });

      filters.forEach((btn) => btn.classList.remove("filter-active"));
      this.classList.add("filter-active");
    });
  });
});
