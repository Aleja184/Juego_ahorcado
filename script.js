//Botones del index.html
const start = document.getElementById('start');
const addWord = document.getElementById('add-word');
const saveStart = document.getElementById('save-start');
const cancel = document.getElementById('cancel');
const desist = document.getElementById('desist');
const newGame = document.getElementById('new-game');

//Campo de texto del index.html
const inputWord = document.getElementById('textareaInputWord');

//Etiqueta p donde estará la palabra a divinar
const wordGame = document.getElementById('word-game');

//Secciones a las que se les va a cambiar el display según el botón que se oprima
const buttonsMain = document.getElementById('buttons-main');
const buttonsGame = document.getElementById('buttons-game');
const buttonsAdd = document.getElementById('buttons-add');
const drawZone = document.getElementById('draw-zone');
const text = document.getElementById('text');
const word = document.getElementById('word');


//Eventos botones
addWord.onclick = showAddWord;
start.onclick = showStartGame;
cancel.onclick = buttonCancel;
desist.onclick = buttonCancel;
saveStart.onclick = saveWord;

/**
 * @Aquí empieza el código de las funciones que nos van a mostrar cierto contenido dependiendo del botón que se pulse
 */
 
//Función para mostrar la sección de añadir palabra
function showAddWord(){
    buttonsMain.style.display = 'none';
    screenCanvas.style.display = 'none';
    buttonsGame.style.display = 'none';
    text.style.display= 'block';
    buttonsAdd.style.display='grid';
    word.style.display = 'none';
}

//Función para mostrar la sección de iniciar el juego
function showStartGame(){
    text.style.display= 'none';
    buttonsAdd.style.display='none';
    buttonsMain.style.display = 'none';
    screenCanvas.style.display = 'block';
    buttonsGame.style.display = 'grid';
    word.style.display = 'grid';
    showWordRandom();
}

//Botón para mostar el index
function buttonCancel(){
    text.style.display= 'none';
    buttonsAdd.style.display='none';
    buttonsMain.style.display = 'grid';
    screenCanvas.style.display = 'none';
    buttonsGame.style.display = 'none';
    word.style.display = 'none';
}

/**
 * @Aquí empieza el código para la sección de añadir la palabra
 */

//Evento para que cuando se haga click en el textarea se limpie
inputWord.addEventListener('click',()=>{
    inputWord.value = '';
    
});

//En este array se guardarán las palabras que se utilizarán en el juego
let arrayWords = ['hola','ola','soldado','botella','perro','gato','frijol','persona','orangutan','signo','afirmacion']
//El array se guardará en un localStorage 
localStorage.setItem('ArrayWords',JSON.stringify(arrayWords)); 

//En este array se irán guardando las nuevas palabras que introduzca el usuario
let arrayWordSave = arrayWords;


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
    arrayWordSave = getDataLocalStorage();
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


/**
 * @Aquí empieza el código para dibujar el muñeco
 */
//Objeto donde se instancia un nuevo Ahorcado
let hangman = new Hangman();

//Función donde se llama al método de hangman que hace la cabeza del muñeco
function drawHead(){
    hangman.makeHead();
}
//Función para dibujar el cuerpo
function drawBody(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/1.5,40,90);
}

//Función para dibujar la pierna izquierda
function drawLeftLeg(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/1.6,90,110);
}

//Función para dibujar la pierna derecha
function drawRightLeg(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/1.4,90,110);
}

//Función para dibujar la mano izquierda
function drawLeftHand(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/1.6,45,65);
}

//Función para dibujar la mano derecha
function drawRightHand(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/1.4,45,65);
}

//Función para dibujar la soga
function drawRope(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/1.5,5,20);
}

//Función para dibujar la línea superior
function drawLineTop(){
    hangman.makeLine(screenCanvas.width/1.5,screenCanvas.width/2,5,5);
}

//Función para dibujar la linea vertical
function drawLineVertical(){
    hangman.makeLine(screenCanvas.width/2,screenCanvas.width/2,5,120);
}

//Función para dibujar el soporte
function drawLineHorizontal(){
    hangman.makeLine(screenCanvas.width/2,screenCanvas.width/1.2,120,120);
}





//Llamado a las funciones
drawHead();
drawBody();
drawLeftLeg();
drawRightLeg();
drawLeftHand();
drawRightHand();
drawRope();
drawLineTop();
drawLineVertical();
drawLineHorizontal();

/**
 * @Aquí empieza el código para adivinar la palabra
 */


//Función que lanza aleatoriamente una posición en el array de las palabras
function randomNumber(){
    let number = Math.round(Math.random()*arrayWordSave.length);
    return number;
}

//Función que retorna la palabra aleatoria
function randomWord(){
    let number = randomNumber();
    return arrayWordSave[number]; 
}

//Variable donde se guardará la palabra aleatoria
let wordRandom;

//Número de fallos que se le permiten al usuario
let trys = 10;

//Array donde se guardará los guiones bajos según el número de carácteres de la palabra
let arrayWordRandom = new Array();

//Array donde se guardará cada letra de la palabra
let arrayWordRandom2 = new Array();

//Esta función guarda los guiones y caracteres en cada array, y muestra los guiones en pantalla de la palabra
//a adivinar
function showWordRandom(){
    wordRandom = randomWord();
    if(arrayWordRandom.length>0 && arrayWordRandom2.length>0){
        arrayWordRandom.splice(0,arrayWordRandom.length);
        arrayWordRandom2.splice(0,arrayWordRandom2.length);
    }

    for(let i =0;i<wordRandom.length;i++){
        arrayWordRandom2.push(wordRandom.charAt(i));
    }
    for(let i = 0;i<wordRandom.length;i++){
        arrayWordRandom.push('_');
    }

    wordGame.innerHTML = arrayWordRandom.join(' ');
   
}





showWordRandom();

newGame.onclick = showWordRandom;


