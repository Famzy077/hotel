{/* <script> */}
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".click-toggle");

  toggles.forEach(btn => {
    const menu = btn.nextElementSibling;   // the matching dropdown

    btn.addEventListener("click", e => {
      e.stopPropagation();

      const isOpen = menu.style.visibility === "visible"; // <‑‑ check first
      closeAllMenus();                                    // close everything

      if (!isOpen) {                                      // only open if it was closed
        openMenu(menu);
      }
    });
  });

  document.addEventListener("click", closeAllMenus);

  function openMenu(menu) {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
  }

  function closeAllMenus() {
    document.querySelectorAll(".click-menu").forEach(m => {
      m.style.visibility = "hidden";
      m.style.opacity = "0";
    });
  }
});
{/* </script> */}


(() => {
    const carousel = document.getElementById('heroCarousel');
    const slides   = carousel.querySelectorAll('.slide');
    const prevBtn  = carousel.querySelector('.prev');
    const nextBtn  = carousel.querySelector('.next');
    const dotsBox  = carousel.querySelector('.dots');
  
    let index = 0;                       // current slide
    const total = slides.length;
  
    /* -- build dots dynamically -- */
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.addEventListener('click', () => goTo(i));
      dotsBox.appendChild(dot);
    });
    const dots = dotsBox.querySelectorAll('button');
  
    /* -- helpers -- */
    function setActive(i) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach (d => d.classList.remove('active'));
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    }
    function goTo(i) {
      index = (i + total) % total;       // wrap around
      setActive(index);
    }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
  
    /* -- wire controls -- */
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });
  
    //  -- auto‑advance (optional) --
    const AUTO = 3000;                   // 7 s
    let timer = setInterval(next, AUTO);
    carousel.addEventListener('pointerenter', () => clearInterval(timer));
    carousel.addEventListener('pointerleave', () => timer = setInterval(next, AUTO));
    
  
    /* set initial state */
    setActive(index);
  })();

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    const items = menu.querySelectorAll("li");

    // Toggle menu open/close
    toggle.addEventListener("click", e => {
      e.stopPropagation();
      closeAllDropdowns(); // close others
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Handle selection
    items.forEach(item => {
      item.addEventListener("click", () => {
        toggle.textContent = item.textContent + " ⌄";
        menu.style.display = "none";
      });
    });
  });

  // Close on outside click
  document.addEventListener("click", closeAllDropdowns);

  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.display = "none";
    });
  }
});

const swiper = new Swiper('.myCarousel', {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
});