const nav = document.querySelector('.menu_import')
fetch("joelcheonghairstudio.github.io/pos/menu.html")
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })