const buttons = document.querySelector('#buttons')
const img = document.querySelector('#img-iphone')

const changeImg = (e) => {
    idColors[e.target.id]();

    const buttonsArray = Array.from(buttons.children);
    console.log(buttonsArray)

    buttonsArray.forEach(buttonContainer => {
        buttonContainer.querySelector('button').classList.remove('select');
        console.log(buttonContainer)
    });

    const button = e.target.parentElement.querySelector('button');
    console.log(button)
    button.classList.add('select');

}

    
const idColors = {
    'green': () => img.src = './img/iphone_green.jpg',
    'silver': () => img.src = './img/iphone_silver.jpg',
    'golden': () => img.src = './img/iphone_golden.jpg',
    'grafite': () => img.src = './img/iphone_grafite.jpg',
    'blue': () => img.src = './img/iphone_blue.jpg',
}


buttons.addEventListener('click', changeImg)


