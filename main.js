// function toggleAudio(){
//     var audio = document.getElementById("ambient");
//     if (audio.paused) audio.play();
//     else audio.pause();
//  }

//  FUNCTION PARA CREAR LISTA Y ARRAY CODERS

let btn = document.querySelector('#addName');
let inputnamebox = document.querySelector("input[type='text']");





function createList() { 

    
    
    const node = document.createElement("li");
    
    const textnode = document.createTextNode(inputnamebox.value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    
    
    // arrayNombres.push(inputnamebox.value);
    inputnamebox.value="";
 
    
    }

    const listCoders = document.getElementsByTagName('li');

    const createArray = listCoders.map(element => {
        const arrayNombres = [];
        arrayNombres.push(element);
        return arrayNombres;
        console.log(arrayNombres)
    });
   
  

    function  selectRandomCoder() {
    
        console.log(arrayNombres)
        const long = arrayNombres.length;
        console.log(long);
        const rnd = Math.floor(Math.random() * long )
        return array[rnd];
        console.log(rnd);
    }

 