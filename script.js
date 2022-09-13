let addWord = document.getElementById('add-word');
let save = document.getElementById('save');
let test = document.getElementById('prueba');
let palabras = ["hola","ola","abeja","pajaro","perro","frijol"];
save.onclick = saveWord;
addWord.addEventListener('click',() =>  addWord.value = " ");
function saveWord(){ //Función para verificar que la palabra tenga 8 letras, y  guardarla en el arreglo palabras
        for(let i=0;i<palabras.length;i++){
            if(addWord.value == palabras[i]){
                addWord.value = "Esta palabra ya se encuentra registrada";
                break
        }else{
                if(addWord.value.length<=8){
                    palabras.push(addWord.value);
                    localStorage.setItem('myArray',JSON.stringify(palabras));
            }else{
                    addWord.value = "Palabra no permitida.Máximo 8 letras.";

            }
        }
    }

}







