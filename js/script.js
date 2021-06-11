function toggleMenu(visible) {
    document.querySelector('.side-bar-wrapper').classList.toggle('show', visible)
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});
