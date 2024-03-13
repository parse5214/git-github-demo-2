function handleClick() {
    alert('Button clicked!');

    var paragraph = document.querySelector('p');

    if (paragraph) {
        paragraph.textContent = 'Button clicked! Paragraph text changed.'
    }
}

var button = document.getElementById('btn');

button.addEventListener('click', handleClick);
