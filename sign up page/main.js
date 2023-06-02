let darkmode = document.querySelector('.switch')

darkmode.onclick = function() {
    document.body.classList.toggle("dark-theme")
    darkmode.classList.toggle('active')
    content.classList.toggle('night')
}