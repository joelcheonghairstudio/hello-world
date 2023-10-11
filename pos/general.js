//Import HTML by using Javascript

const nav = document.querySelector('.menu_import')
fetch("https://joelcheonghairstudio.github.io/pos/menu.html")
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })

//**


//General Function

var loading;

//Start up
window.onload = function () {
    //Get data from session storage
    var user = sessionStorage.getItem("user");
    if (user) {
        document.getElementById("Account").innerHTML = user;

        // Loading animation
        var rotate = 0;
        loading = setInterval(() => {
            document.getElementById("loading").style.transform = ("translate(-50%, -50%) rotate(" + rotate + "deg)");
            rotate += 10;
            if (rotate > 360) {
                rotate = 0;
            }
        }, 10);

        setTimeout(() => {
            clearInterval(loading);
        }, 3000);

    } else {

        //session outdated
        var info = "Session outdated.\n Please login again.";
        document.body.innerHTML += `
            <div style="position: absolute; left: 0px; top: 0px; height: 100%; width: 100%; z-index: 1;">
                <div style="font-size: 30px; white-space: pre-line; text-align: center; position: absolute; top: 50%; left: 50%; padding: 10px 30px 10px 30px; transform: translate(-50%, -50%); border: 1px solid rgba(0, 0, 0, 0.6); background-color: rgba(255, 255, 255, 0.6);"
                >${info}
                    <button type="button" onclick="window.location.href = 'login.html'">Return to Login</button>
                </div>
            </div>
        `;
    }

}

function logout() {
    //Clear session storage *temp
    var user = sessionStorage.getItem("user");
    if (user) {
        window.sessionStorage.removeItem("user");
        window.location.href = "login.html";
    }
}

if(document.getElementById("logoutBtn")){
    document.getElementById("logoutBtn").addEventListener("click", logout());
}