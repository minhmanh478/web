// ROUTING
function goPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('[data-page]').forEach(a => a.classList.remove('active'));
  const al = document.querySelector(`[data-page="${page}"]`);
  if (al) al.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // fix extra-courses grid on small screens
  const ec = document.getElementById('extra-courses');
  if (ec) ec.style.gridTemplateColumns = window.innerWidth < 640 ? '1fr' : '1fr 1fr';
}

// NAV
function toggleMenu() {
  const panel = document.getElementById('mobile-nav');
  const overlay = document.getElementById('overlay');
  panel.classList.toggle('open');
  overlay.style.display = panel.classList.contains('open') ? 'block' : 'none';
}

// FAQ
function toggleFaq(el) {
  const a = el.nextElementSibling;
  const arrow = el.querySelector('.faq-arrow');
  a.classList.toggle('open');
  arrow.classList.toggle('open');
}

// REGISTER
function selectOption(el, val) {
  document.querySelectorAll('.reg-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const sel = document.getElementById('r-service');
  if (sel) {
    for (let opt of sel.options) {
      if (opt.value && opt.value.toLowerCase().includes(val.split(' ')[0].toLowerCase())) { sel.value = opt.value; break; }
    }
  }
}

async function submitRegister() {
  const name = document.getElementById('r-name') ? document.getElementById('r-name').value.trim() : '';
  const phone = document.getElementById('r-phone') ? document.getElementById('r-phone').value.trim() : '';
  const email = document.getElementById('r-email') ? document.getElementById('r-email').value.trim() : '';
  const service = document.getElementById('r-service') ? document.getElementById('r-service').value : '';
  const level = document.getElementById('r-level') ? document.getElementById('r-level').value : '';
  const goal = document.getElementById('r-goal') ? document.getElementById('r-goal').value : '';
  const message = document.getElementById('r-message') ? document.getElementById('r-message').value.trim() : '';

  if (!name || !phone || !email) {
    alert('Vui lòng điền đầy đủ: Họ tên, Số điện thoại và Email!');
    return;
  }

  // ⚠️ URL ỨNG DỤNG WEB CỦA BẠN (APPS SCRIPT):
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxaNScsdPbwaAQ-5sMl79Zwg7xaaXyhE8bW_mvewjNqOqLJUd6vx9kNnsF-C73FqmP6XQ/exec';

  const btn = document.querySelector('.form-submit');
  const originalBtnText = btn ? btn.innerHTML : 'Gửi đăng ký tư vấn miễn phí';
  if (btn) btn.innerHTML = '⏳ Đang gửi dữ liệu...';

  try {
    const data = new URLSearchParams();
    data.append('name', name);
    data.append('phone', phone);
    data.append('email', email);
    data.append('service', service);
    data.append('level', level);
    data.append('goal', goal);
    data.append('message', message);

    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Quan trọng: tránh lỗi CORS từ Google
      body: data
    });

    document.getElementById('success-modal').classList.add('open');
    ['r-name', 'r-phone', 'r-email', 'r-service', 'r-level', 'r-goal', 'r-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  } catch (error) {
    alert('Đã xảy ra lỗi khi gửi. Vui lòng thử lại sau.');
    console.error(error);
  } finally {
    if (btn) btn.innerHTML = originalBtnText;
  }
}

document.getElementById('success-modal').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('open'); });

// SCROLL ANIMATION
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.why-card,.testi-card,.course-card,.reason-card,.recruit-benefit').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});

// Responsive extra-courses
window.addEventListener('resize', () => {
  const ec = document.getElementById('extra-courses');
  if (ec) ec.style.gridTemplateColumns = window.innerWidth < 640 ? '1fr' : '1fr 1fr';
});
