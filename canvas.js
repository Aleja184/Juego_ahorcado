//Aquí hare el código del diseño del muñeco 

//Canvas

let screenCanvas = document.querySelector('canvas');
let paintbrush = screenCanvas.getContext('2d');

//Clase donde se creará todo lo que contiene el muñeco

class Hangman{
    makeHead(){   
        paintbrush.fillStyle = "black";
        paintbrush.beginPath();
        paintbrush.arc(screenCanvas.width/1.5,15,10,0,360);
        paintbrush.stroke();
    }

    makeBody(){
        paintbrush.beginPath();
        paintbrush.moveTo(screenCanvas.width/1.5,25);
        paintbrush.lineTo(screenCanvas.width/1.5,90);
        paintbrush.strokeStyle = "black";
        paintbrush.stroke();
    }

    makeLegLeft(){
        paintbrush.beginPath();
        paintbrush.moveTo(screenCanvas.width/1.5,90);
        paintbrush.lineTo(screenCanvas.width/1.7,100);
        paintbrush.strokeStyle = "black";
        paintbrush.stroke();
    }

    makeLegRight(){
        paintbrush.beginPath();
        paintbrush.moveTo(screenCanvas.width/1.5,90);
        paintbrush.lineTo(screenCanvas.width/1.2,100);
        paintbrush.strokeStyle = "black";
        paintbrush.stroke();
    }
    
  
}