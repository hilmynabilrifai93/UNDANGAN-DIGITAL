// ----------------- Tombol OPEN INVITATION -----------------
const openBtn = document.querySelector('.open-btn');
const cover = document.querySelector('.cover');
const invitation = document.querySelector('.invitation');

openBtn.addEventListener('click', () => {
  // Fade out cover
  cover.style.transition = 'opacity 0.8s ease';
  cover.style.opacity = '0';
  cover.style.pointerEvents = 'none';

  // Tampilkan invitation setelah fade out selesai
  setTimeout(() => {
    invitation.classList.add('active');
  }, 800);
});

// ----------------- Countdown -----------------
const countDownDate = new Date("Oct 4, 2025 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById('days').innerText = days >= 0 ? days : 0;
  document.getElementById('hours').innerText = hours >= 0 ? hours : 0;
  document.getElementById('minutes').innerText = minutes >= 0 ? minutes : 0;
  document.getElementById('seconds').innerText = seconds >= 0 ? seconds : 0;
}

// Jalankan countdown setiap detik
updateCountdown();
setInterval(updateCountdown, 1000);
