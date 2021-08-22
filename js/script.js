const bars = document.querySelector('#bars');
const navCollapse = document.querySelector('#navCollpase');

bars.addEventListener('click', () => {
    bars.classList.toggle('fa-times');
    navCollapse.classList.toggle('hidden')
})