const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("bg-indigo-500/80", "backdrop-blur-sm", "shadow-md");
      } else {
        header.classList.remove("bg-indigo-500/80", "backdrop-blur-sm", "shadow-md");
      }
    });

    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        cards.forEach(card => {
          const category = card.dataset.category;

          if (filter === 'all' || category.includes(filter)) {
            card.classList.remove('hidden');
            setTimeout(() => card.classList.add('show'), 50);
          } else {
            card.classList.remove('show');
            setTimeout(() => card.classList.add('hidden'), 300);
          }
        });
      });
    });

    // Mostrar animación al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


    //////////////////Typelt////////////////
   
  

  document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#animated-text", {
    speed: 80,
    waitUntilVisible: true,
    cursorChar: "|",
     lifeLike: true,
     loop: false, // No lo repite
     breakLines: true, // Asegura saltos de línea reales
    
  })
    // .type("Building intuitive experiences and functional solutions.")
    // .break()
    .type("UX and code, together to create impact.")
    .go();
});


