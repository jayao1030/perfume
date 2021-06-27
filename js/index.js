const burger = document.querySelector('.burger');
const dropDown = document.querySelector('.dropdown');
burger.addEventListener('click', (e) => {
  e.preventDefault();
  dropDown.classList.toggle('active');
})
