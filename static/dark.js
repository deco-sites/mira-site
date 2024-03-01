const htmlElement = document.querySelector('html');
const toggles = document.querySelectorAll('[data-toggle-darkmode]');

Array.from(toggles).forEach(tgl => {
    tgl.addEventListener('change', (e) => {   
        if (e.target.checked) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    });
})