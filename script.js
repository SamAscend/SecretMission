// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');
  const button = form.querySelector('button');

  // 🔁 Real-time validation
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() === '') {
        input.classList.remove('border-green-500');
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
        input.classList.add('border-green-500');
      }
    });
  });

  // 💥 On Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Cegah form auto-submit

    const nama = form.querySelector('input[name="nama"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();

    if (!nama || !email) {
      showToast("⚠️ Semua data wajib diisi!");
      return;
    }

    // 🌀 Simulasi loading
    button.disabled = true;
    button.innerHTML = `<svg class="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
    </svg>`;

    setTimeout(() => {
      // ⏳ Biar keliatan niat
      window.location.href = `prank.html?nama=${encodeURIComponent(nama)}`;
    }, 2500);
  });
});

// ✅ Toast fake warning
function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.className = 'fixed bottom-5 right-5 bg-yellow-500 text-white px-4 py-2 rounded shadow-md animate-fadeIn z-50';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// 🤡 Troll sound buat prank.html (optional)
function playPrank() {
  const audio = new Audio('https://www.myinstants.com/media/sounds/troll-song.mp3');
  audio.play().catch(() => console.warn('Autoplay blocked'));
}
