//Botones del index.html
const start = document.getElementById('start');
const addWord = document.getElementById('add-word');
const saveStart = document.getElementById('save-start');
const cancel = document.getElementById('cancel');
const desist = document.getElementById('desist');
const newGame = document.getElementById('new-game');

//Campo de texto del index.html
const text = document.getElementById('text');

//Secciones a las que se les va a cambiar el display según el botón que se oprima
const buttonsMain = document.getElementById('buttons-main');
const buttonsGame = document.getElementById('buttons-game');
const buttonsAdd = document.getElementById('buttons-add');
const drawZone = document.getElementById('draw-zone');

//Canvas
let screenCanvas = document.querySelector('canvas');
let paintbrush = screenCanvas.getContext('2d');

//Eventos botones
addWord.onclick = showAddWord;
start.onclick = showStartGame;
cancel.onclick = buttonCancel;
desist.onclick = buttonCancel;
 
//Función para mostrar la sección de añadir palabra
function showAddWord(){
    buttonsMain.style.display = 'none';
    drawZone.style.display = 'none';
    buttonsGame.style.display = 'none';
    text.style.display= 'block';
    buttonsAdd.style.display='grid';
}

//Función para mostrar la sección de iniciar el juego
function showStartGame(){
    text.style.display= 'none';
    buttonsAdd.style.display='none';
    buttonsMain.style.display = 'none';
    screenCanvas.style.display = 'block';
    buttonsGame.style.display = 'grid';
}

function buttonCancel(){
    text.style.display= 'none';
    buttonsAdd.style.display='none';
    buttonsMain.style.display = 'grid';
    screenCanvas.style.display = 'none';
    buttonsGame.style.display = 'none';
}







