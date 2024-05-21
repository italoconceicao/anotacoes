const createNote = (anotationText) => {
    const box = document.createElement('div');
    const text = document.createElement('p')
    const boxAnotation = document.createTextNode(anotationText);
    text.appendChild(boxAnotation);
    box.appendChild(text);

    document.getElementById('main').appendChild(box);
};

const button = document.getElementById('button');
button.addEventListener('click', createNote)




