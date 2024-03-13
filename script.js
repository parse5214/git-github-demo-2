function handleClick() {
    alert('Button clicked!');

    var title = document.querySelector('h1');

    title.textContent = 'This is a new title';
}

function handleSpecialClick() {
    alert('Special Button was clicked');
}

var button = document.getElementById('btn');
var specialButton = document.getElementById('specialBtn');

button.addEventListener('click', handleClick);
specialButton.addEventListener('click', handleSpecialClick);
