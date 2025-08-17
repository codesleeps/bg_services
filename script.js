function toggleMenu(){document.querySelector('.nav-menu').classList.toggle('active')}
function showTab(n){document.getElementById('booking-form').classList.remove('active');document.getElementById('quote-form').classList.remove('active');document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.getElementById(n+'-form').classList.add('active');document.querySelector('.tab-btn[data-tab="'+n+'"]').classList.add('active')}
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById('nav-toggle').addEventListener('click',toggleMenu);
document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>showTab(btn.dataset.tab)));
document.querySelectorAll('input[type="date"]').forEach(i=>i.min=new Date().toISOString().split('T')[0]);
showTab('booking');
});