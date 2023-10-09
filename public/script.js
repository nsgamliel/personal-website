const today = new Date();
const heroDate = document.querySelector('.intro').querySelector('.timeline-date');
heroDate.innerHTML = today.toDateString();