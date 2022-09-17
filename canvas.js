//Aquí hare el código del diseño del muñeco 

//Canvas

let screenCanvas = document.querySelector('canvas');
let paintbrush = screenCanvas.getContext('2d');

//Clase donde se creará todo lo que contiene el muñeco

class Hangman{
    makeHead(){   
        paintbrush.fillStyle = "black";
        paintbrush.beginPath();
        paintbrush.arc(screenCanvas.width/1.5,30,10,0,360);
        paintbrush.stroke();
    }

    makeLine(width,longWidth,height,longHeight){
        paintbrush.beginPath();
        paintbrush.moveTo(width,height);
        paintbrush.lineTo(longWidth,longHeight);
        paintbrush.strokeStyle = "black";
        paintbrush.stroke();
    }  
}