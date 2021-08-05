const openButton = document.getElementById('myMenu');
const menuSection = document.getElementById('menuid')
const closeButton = document.getElementById('close');

function openMobileMenu() {
    openButton.style.display = 'none';
    menuSection.style.display = 'block';
    closeButton.style.display = 'block';
}

function closeMobileMenu() {
    menuSection.style.display ='none';
    closeButton.style.display = 'none';
    openButton.style.display = 'block';
}

openButton.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);
