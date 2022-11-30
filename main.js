// function toggleAudio(){
//     var audio = document.getElementById("ambient");
//     if (audio.paused) audio.play();
//     else audio.pause();
//  }

//  FUNCTION PARA CREAR LISTA Y ARRAY CODERS

let btn = document.querySelector('#addName');
let inputnamebox = document.querySelector("input[type='text']");
let arrayNombres = [];

function createList() {
    
    const node = document.createElement("li");
    
    const textnode = document.createTextNode(inputnamebox.value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    
    
    arrayNombres.push(inputnamebox.value);
    inputnamebox.value="";
    console.log(arrayNombres);
    
    }

  