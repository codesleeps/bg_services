// Hamburger menu
function toggleMenu() { const m = document.querySelector('.nav-menu'), t = document.querySelector('.nav-toggle'); m.classList.toggle('active'); t.classList.toggle('active') }

// Tab switching
function showTab(n) { document.getElementById('booking-form').classList.remove('active'); document.getElementById('quote-form').classList.remove('active'); document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); if (n === 'booking') { document.getElementById('booking-form').classList.add('active'); document.querySelector('.tab-btn[onclick="showTab(\'booking\')"]').classList.add('active') } else if (n === 'quote') { document.getElementById('quote-form').classList.add('active'); document.querySelector('.tab-btn[onclick="showTab(\'quote\')"]').classList.add('active') } }

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(l => l.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(e.target.getAttribute('href')); if (t) { window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' }); document.querySelector('.nav-menu').classList.remove('active'); document.querySelector('.nav-toggle').classList.remove('active') } }));

    // Set date min
    const today = new Date().toISOString().split('T')[0]; document.querySelectorAll('input[type="date"]').forEach(i => i.min = today);

    // Form validation
    const validateForm = f => { const r = f.querySelectorAll('[required]'); let v = true; r.forEach(field => { if (!field.value.trim()) { field.style.borderColor = '#e74c3c'; v = false } else { field.style.borderColor = '#e0e0e0' } }); return v };

    // Booking form
    const bf = document.getElementById('bookingForm'); if (bf) bf.addEventListener('submit', e => { if (!validateForm(bf)) { e.preventDefault(); alert('Please fill in all required fields.'); return } bf.querySelector('button[type="submit"]').textContent = 'Submitting...'; bf.querySelector('button[type="submit"]').disabled = true });

    // Quote form  
    const qf = document.getElementById('quoteForm'); if (qf) qf.addEventListener('submit', e => { const sc = qf.querySelectorAll('input[name="services"]:checked'); if (!validateForm(qf) || sc.length === 0) { e.preventDefault(); alert('Please fill in all required fields and select at least one service.'); return } qf.querySelector('button[type="submit"]').textContent = 'Submitting...'; qf.querySelector('button[type="submit"]').disabled = true });

    // Header scroll effect
    let ticking = false; window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(() => { const h = document.querySelector('.header'); h.style.background = window.scrollY > 100 ? 'rgba(255,255,255,0.95)' : '#fff'; ticking = false }); ticking = true } });

    // Initialize booking tab
    showTab('booking');
});