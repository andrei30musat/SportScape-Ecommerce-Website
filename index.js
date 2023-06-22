// Modificarea stilului unui element sau al unui grup de elemente;

const footer = document.querySelector('.footer')
footer.style.backgroundColor = 'black';
footer.style.color='#8a8a8a';
footer.style.fontSize='14px';
footer.style.padding='60 px 0 20px';

const reviewParagraphs = document.getElementsByClassName('review');
for (let i = 0; i < reviewParagraphs.length; i++) {
    reviewParagraphs[i].addEventListener('click', function(event) {
        const targetElement = event.target;
        const currentTargetElement = event.currentTarget;

        targetElement.style.color = 'yellow';
        targetElement.style.fontSize = '14px';
        targetElement.style.margin = '12px 0';

        // Remove the 'active' class from all reviewParagraphs and set text color to white
        for (let j = 0; j < reviewParagraphs.length; j++) {
            reviewParagraphs[j].classList.remove('active');
            reviewParagraphs[j].style.color = 'yellow';
        }

        // Add the 'active' class to the clicked reviewParagraph and set text color to yellow
        currentTargetElement.classList.add('active');
        currentTargetElement.style.color = 'white';
    });
}



const menuItems = document.querySelectorAll('.meniu li');
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
        const targetElement = event.target;
        const currentTargetElement = event.currentTarget;

        // Elimină clasa 'active' de la toate elementele din meniu
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Adaugă clasa 'active' doar elementului curent
        currentTargetElement.classList.add('active');
    });
});

const citat = document.getElementById('quote')
citat.style.color='darkslategrey';
citat.textContent="Success isn't always about greatness. It's about consistency. Consistent hard work gains \n" +
    "success. Greatness will come.";



const descriere = document.getElementsByTagName('h2')[0]
descriere.style.color = 'yellow';

function randomizeHeaderColor() {

    var tst = document.getElementById("testimonial");

    var color = getRandomColor();

    tst.style.background = color;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomizeHeaderColor();

const copyright = document.getElementById("copyright");
const year =new Date().getFullYear()
copyright.textContent="Copyright " + year+" - Mușat Andrei-Cătălin";
copyright.style.textAlign="center";

function slideInRight() {
    var startTime = Date.now();

    var interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;

        if (elapsedTime >= 60000) {
            clearInterval(interval); // Stop executing after 60 seconds
            return;
        }

        var element = document.getElementById('img-technology');
        element.style.animation = 'slideInRight 5s';
        element.style.animationFillMode = 'forwards';

        // Reset the animation after 5 second
        setTimeout(function() {
            element.style.animation = '';
        }, 5000);
    }, 12000); // Execute every 12 seconds
}

window.addEventListener('load', function() {
    slideInRight(); // Call the function when the page loads
});

