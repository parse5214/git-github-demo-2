function handleClick() {
    alert('Button clicked!');

    var paragraph = document.querySelector('p');

    if (paragraph) {
        paragraph.textContent = 'Button clicked! Paragraph text changed.';
    }
}

function handleClick2() {
    alert('Second button clicked!');

    var subtitle = document.querySelector('h2')

    if (subtitle) {
        subtitle.textContent = 'The second button has been pressed.'
    }
}

function handleSpecialClick() {
    alert('Special Button was clicked');
}

var button = document.getElementById('btn');
var button2 = document.getElementById('btn2');
var specialButton = document.getElementById('specialBtn');

button.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick2);
specialButton.addEventListener('click', handleSpecialClick);
