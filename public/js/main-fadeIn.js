document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const butterflies = document.querySelectorAll(".butterfly");

    butterflies.forEach(butterfly => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        butterfly.style.left = `${randomX}px`;
        butterfly.style.top = `${randomY}px`;
    });
});



// MUSIC
  // JavaScript for handling toggle and music playback
  const music = document.getElementById("music");
  const toggleLeft = document.getElementById("vintageToggleLeft");
  const toggleRight = document.getElementById("vintageToggleRight");
  const toggleLeftDesktop = document.getElementById("vintageToggleLeftDesktop");
  const toggleRightDesktop = document.getElementById("vintageToggleRightDesktop");

  // Add event listeners to both mobile and desktop toggles
  toggleLeft.addEventListener("change", toggleMusic);
  toggleRight.addEventListener("change", toggleMusic);
  toggleLeftDesktop.addEventListener("change", toggleMusic);
  toggleRightDesktop.addEventListener("change", toggleMusic);

  function toggleMusic() {
    if (toggleLeft.checked || toggleRight.checked || toggleLeftDesktop.checked || toggleRightDesktop.checked) {
      music.play();
    } else {
      music.pause();
      music.currentTime = 0; // Reset the music
    }
  }