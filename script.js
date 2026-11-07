
const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");

openButton.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    opening.classList.add("hide");
    document.body.style.overflow = "auto";
  }, 1000);
});

document.body.style.overflow = "hidden";


/* WEDDING COUNTDOWN */

// Change your wedding date and time here
const weddingDate = new Date("2026-11-15T10:00:00");

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);



/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // Scroll ပြန်တက်သွားရင် animation ပြန်စမယ်
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".reveal, .photo").forEach(element => {
  observer.observe(element);
});
