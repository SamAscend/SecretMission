// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const button = form.querySelector('button');
  
    // 🔁 Real-time validation
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.value.trim() === '') {
          input.classList.add('border-red-500');
        } else {
          input.classList.remove('border-red-500');
          input.classList.add('border-green-500');
        }
      });
    });
  
    // 💥 On Submit
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Biar JS yang kontrol dulu
  
      const nama = form.querySelector('input[name="nama"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
  
      if (!nama || !email) {
        showToast("⚠️ Semua data wajib diisi!");
        return;
      }
  
      button.disabled = true;
      button.innerHTML = `<span class="loader"></span> Mengirim...`;
  
      setTimeout(() => {
        // ⏳ Simulasi submit dan redirect
        window.location.href = `prank.html?user=${encodeURIComponent(nama)}`;
      }, 2500); // Biar kerasa serius dulu 😈
    });
  });
  
  // ✅ Toast Fake Notif
  function showToast(message) {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.className = 'fixed bottom-5 right-5 bg-yellow-500 text-white px-4 py-2 rounded shadow-md animate-fadeIn';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
  
  // 🤡 Sound Effect (opsional prank.html)
  function playPrank() {
    const audio = new Audio('https://www.myinstants.com/media/sounds/troll-song.mp3');
    audio.play().catch(() => console.warn('Autoplay blocked'));
  }
  