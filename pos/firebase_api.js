// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

//createUserWithEmailAndPassword
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ2tr5BgD5euyA_Mdez-GyD0z6JFFb0lY",
    authDomain: "joelcheonghsdata.firebaseapp.com",
    databaseURL: "https://joelcheonghsdata-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "joelcheonghsdata",
    storageBucket: "joelcheonghsdata.appspot.com",
    messagingSenderId: "246172949748",
    appId: "1:246172949748:web:b6de0a64bba1f7f49892a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

// If logged out somewhere
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("[User Credential] " + user.uid);

        // Remove loading animation
        clearInterval(loading);
        document.getElementById("loading").remove();

        // ...
    } else {
        // User is signed out
        // ...
        alert("Oh no, you have been signed out.");
        window.location.href = "login.html"
    }
});

//Auto refresh staff status
var currentdate = new Date();
var date = currentdate.getFullYear() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getDate();