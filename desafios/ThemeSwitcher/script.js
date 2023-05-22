const container = document.getElementsByClassName('container')[0]
const main = document.querySelector('body main')
const divBall = document.querySelector('main div div')
const html = document.querySelector('html')

const THEME_DARK = {
    backgroundColor: '#292C35',
    ballClass: 'ball-right'
};

const THEME_LIGHT = {
    backgroundColor: '#F1F1F1',
    ballClass: "ball-left"
};

function toggleTheme() {
    if (html.classList.contains('light')) {
        main.style.backgroundColor = THEME_DARK.backgroundColor
        html.classList.remove('light')
        divBall.classList.add(THEME_DARK.ballClass)
        divBall.classList.remove(THEME_LIGHT.ballClass)
    } else {
        main.style.backgroundColor = THEME_LIGHT.backgroundColor
        html.classList.add('light')
        divBall.classList.remove(THEME_DARK.ballClass)
        divBall.classList.add(THEME_LIGHT.ballClass)
    }
}

container.addEventListener('click', toggleTheme)