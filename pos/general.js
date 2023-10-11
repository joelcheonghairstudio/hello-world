const nav = document.querySelector('.menu_import')
fetch("https://joelcheonghairstudio.github.io/pos/menu.html")
    .then(res => res.text())
    .then(data => {
        nav.outerHTML = data
    })