function updateCountdown() {
  const weddingDate = new Date("2025-08-09T00:00:00");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "🎉 Свадьба уже началась!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `До свадьбы осталось: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// Генерация лепестков
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  petal.style.opacity = Math.random();

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 500);