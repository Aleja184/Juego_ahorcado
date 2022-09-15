//Botones del index.html
const start = document.getElementById('start');
const addWord = document.getElementById('add-word');
const saveStart = document.getElementById('save-start');
const cancel = document.getElementById('cancel');
const desist = document.getElementById('desist');
const newGame = document.getElementById('new-game');

//Campo de texto del index.html
let inputWord = document.getElementById('textareaInputWord');

//Secciones a las que se les va a cambiar el display según el botón que se oprima
const buttonsMain = document.getElementById('buttons-main');
const buttonsGame = document.getElementById('buttons-game');
const buttonsAdd = document.getElementById('buttons-add');
const drawZone = document.getElementById('draw-zone');
const text = document.getElementById('text');

//Canvas
let screenCanvas = document.querySelector('canvas');
let paintbrush = screenCanvas.getContext('2d');

//Eventos botones
addWord.onclick = showAddWord;
start.onclick = showStartGame;
cancel.onclick = buttonCancel;
desist.onclick = buttonCancel;
saveStart.onclick = saveWord;
 
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

//Botón para mostar el index
function buttonCancel(){
    text.style.display= 'none';
    buttonsAdd.style.display='none';
    buttonsMain.style.display = 'grid';
    screenCanvas.style.display = 'none';
    buttonsGame.style.display = 'none';
}

//Aquí empieza el código para la sección de añadir la palabra

//Evento para que cuando se haga click en el textarea se limpie
inputWord.addEventListener('click',()=>{
    inputWord.value = '';
    
});

//En este array se guardarán las palabras que se utilizarán en el juego
let words = ['hola','ola','soldado','botella','perro','gato','frijol','persona','orangutan','signo','afirmacion']
//El array se guardará en un localStorage 
localStorage.setItem('ArrayWords',JSON.stringify(words)); 


//Función para obetener el array que hay en el localStorage
function getDataLocalStorage(){
    let wordsLocalStorage = localStorage.getItem('ArrayWords');
    return wordsLocalStorage = JSON.parse(wordsLocalStorage);
}

//Función para comprobar que no haya acentos
function checkAccent(word){
    let validation = true;
    for(let i=0;i<word.length;i++){
        if(/[áéíóú]/.test(word.charAt(i))){
            validation = false;
            break;
        }   
    }
    return validation;
    
}

//Con esta variable podremos validar si la palabra ya se encuentra o no en el array
let validationWordInWords = false;
//Función para guardar la nueva palabra en el array
function saveWord(){
    //Obtendremos el array que se encuentra guardado en el LocalStorage
    let arrayWordSave = getDataLocalStorage();
    if(inputWord.value.length <= 8 && checkAccent(inputWord.value)){
        for(let i = 0;i<arrayWordSave.length;i++){
            if(inputWord.value.toLowerCase() == arrayWordSave[i]){
                inputWord.value = 'Esta palabra ya se encuentra registrada. Intenta de nuevo';
                validationWordInWords = false;
                break
            }else{
                validationWordInWords = true;
            }
        }
    }else{
        inputWord.value = 'La palabra debe tener máximo 8 letras y sin acentos'
    }

    if(validationWordInWords){
        arrayWordSave.push(inputWord.value.toLowerCase());
        localStorage.setItem('ArrayWords',JSON.stringify(arrayWordSave));
        validationWordInWords = false;
        showStartGame();
    }
}






