// 3 Creare

var divElement = document.getElementById("mesaj");
var paragraph = document.createElement("p");
paragraph.innerText = "Ne bucurăm să te revedem!😄".toUpperCase(); // 9 string
paragraph.style.color="yellow";
paragraph.style.textAlign="center";
paragraph.style.fontSize='20px';
paragraph.style.padding="40px 20px";
divElement.appendChild(paragraph);

// 4 si 5 tastatura
document.addEventListener("keydown", function(event) {

    if (event.keyCode === 27) {

        var divElement = document.getElementById("mesaj");
        divElement.remove();
    }
});


const footer = document.querySelector('.footer')
footer.style.backgroundColor = 'black';
footer.style.color='#8a8a8a';
footer.style.fontSize='14px';
footer.style.padding='60 px 0 20px';



var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){

    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login(){

    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}
// 6 si 8
const form = document.getElementById('LoginForm');
const usernameInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener('input', function() {
    // Get the input values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Store data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
});

function displayStoredData() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Set input values from stored data
    usernameInput.value = storedUsername || '';
    passwordInput.value = storedPassword || '';
}

displayStoredData();


<!-- Adăugați codul următor într-un fișier separat numit "account.js" -->

// Funcția care este apelată la înregistrare

///12

// Funcția pentru validarea formularului de login
function validateLoginForm() {
    var username = document.forms["LoginForm"]["username"].value;
    var password = document.forms["LoginForm"]["password"].value;

    // Expresia regulată pentru validarea numelui de utilizator
    var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    // Expresia regulată pentru validarea parolei
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!username.match(usernameRegex)) {
        alert("Numele de utilizator trebuie să conțină între 3 și 16 caractere și să fie alcătuit doar din litere, cifre, - și _.");
        return false;
    }

    if (!password.match(passwordRegex)) {
        alert("Parola trebuie să conțină între 6 și 20 de caractere, cel puțin o literă mare, o literă mică și o cifră.");
        return false;
    }

    return true;
}

// Funcția pentru validarea formularului de înregistrare
function validateRegForm() {
    var username = document.forms["RegForm"]["username"].value;
    var email = document.forms["RegForm"]["email"].value;
    var password = document.forms["RegForm"]["password"].value;

    // Expresia regulată pentru validarea numelui de utilizator
    var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    // Expresia regulată pentru validarea adresei de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresia regulată pentru validarea parolei
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!username.match(usernameRegex)) {
        alert("Numele de utilizator trebuie să conțină între 3 și 16 caractere și să fie alcătuit doar din litere, cifre și _.");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Vă rugăm să introduceți o adresă de email validă.");
        return false;
    }

    if (!password.match(passwordRegex)) {
        alert("Parola trebuie să conțină între 6 și 20 de caractere, cel puțin o literă mare, o literă mică și o cifră.");
        return false;
    }

    return true;
}

// Funcția pentru a atașa funcțiile de validare la evenimentul de submit al formularelor
document.getElementById("LoginForm").addEventListener("submit", function(event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Opriți trimiterea formularului dacă nu este validat
    }
});

document.getElementById("RegForm").addEventListener("submit", function(event) {
    if (!validateRegForm()) {
        event.preventDefault(); // Opriți trimiterea formularului dacă nu este validat
    }
});

