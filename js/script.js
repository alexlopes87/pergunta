let button = document.getElementById('nao')
let height = window.innerHeight - 60
let width = window.innerWidth - 60

button.addEventListener('mouseover', function () {
    button.style.position = "absolute"
    button.style.top = Math.random() * height + "px"
    button.style.left = Math.random() * width + "px"
})