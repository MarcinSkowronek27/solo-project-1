function toggleMenu(visible) {
    document.querySelector('.sidebar-wrapper-all').classList.toggle('show', visible)
    document.querySelector('.hamburger').classList.toggle('shifted', visible)
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});
