const htmlElement = document.querySelector('html');
const toggles = document.querySelectorAll('[data-toggle-darkmode]');

// Criar um elemento meta
var metaThemeColor = document.createElement('meta');

// Definir os atributos do elemento meta
metaThemeColor.setAttribute('name', 'theme-color');
metaThemeColor.setAttribute('content', '#000000');

// Adicionar o elemento meta ao cabeçalho da página
document.head.appendChild(metaThemeColor);

Array.from(toggles).forEach(tgl => {
    tgl.addEventListener('change', (e) => {   
        if (e.target.checked) {
            metaThemeColor.setAttribute('content', '#FFFFFF');
            htmlElement.classList.add('dark');
        } else {
            metaThemeColor.setAttribute('content', '#000000');
            htmlElement.classList.remove('dark');
        }
    });
})