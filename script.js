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

  // ✅ Validasi & loading
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (button.disabled) return;

    const nama = form.querySelector('input[name="nama"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ⚠️ Validasi kosong
    if (!nama || !email) {
      showToast("⚠️ Semua data wajib diisi!");
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 500);
      return;
    }

    // 📧 Validasi email
    if (!emailPattern.test(email)) {
      showToast("📧 Format email nggak valid, bro!");
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 500);
      return;
    }

    // 🌀 Simulasi loading
    button.disabled = true;
    button.innerHTML = `<div class="loader"></div>`;

    setTimeout(() => {
      window.location.href = `prank.html?nama=${encodeURIComponent(nama)}`;
    }, 2500);
  });
});

// ✅ Toast Message
function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.className = 'toast';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// 🤡 Troll sound (optional)
function playPrank() {
  const audio = new Audio('https://www.myinstants.com/media/sounds/troll-song.mp3');
  audio.play().catch(() => console.warn('Autoplay blocked'));
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.className = 'toast';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300); // Hapus setelah animasi
  }, 3000);
}

