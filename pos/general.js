const nav = document.querySelector('.menu_import')
fetch("/menu.html")
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })