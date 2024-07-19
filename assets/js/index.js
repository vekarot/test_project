function setActive(element) {
    const items = document.getElementsByClassName('nav-item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active')
    }
    element.classList.add('active')
}