function handleClick() {
    alert('Button clicked!');

    var paragraph = document.querySelector('p');

    if (paragraph) {
        paragraph.textContent = 'Button clicked! Paragraph text changed.';
    }
}

function handleSpecialClick() {
    alert('Special Button was clicked');
}

var button = document.getElementById('btn');
var specialButton = document.getElementById('specialBtn');

button.addEventListener('click', handleClick);
specialButton.addEventListener('click', handleSpecialClick);
