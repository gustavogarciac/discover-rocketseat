const iconeMenu = document.getElementById('menu-icon')
const container = document.querySelector('div.container')
const html = document.querySelector('html')
const aside = document.querySelector('.container aside')

function toggleSidebar() {
    if (html.classList.contains("html-sidebar-off")) {
        html.classList.remove('html-sidebar-off')
        aside.classList.remove('sideoff')
        aside.classList.add('sideon')
    } else {
        html.classList.add('html-sidebar-off')
        aside.classList.add('sideoff')
        aside.classList.remove('sideon')
    }
}

iconeMenu.addEventListener('click', toggleSidebar)