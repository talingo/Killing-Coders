let btn = document.querySelector('button');
let inputnamebox = document.querySelector("input[type='text']")
let arrayNombres = [];

function myFunction() {
    const div = document.createElement("div");
    div.setAttribute("class", "column");
    const div2 = document.createElement("div");
    div2.setAttribute("class", "raw");
    const node = document.createElement("li");
     const btnlista= document.createElement("button");
    btnlista.setAttribute("class", "btnli");
     const salto= document.createElement("br");
    btnlista.textContent = "-";
    const textnode = document.createTextNode(inputnamebox.value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(div);
    document.querySelector(".column").appendChild(div2);
    
    document.querySelector(".raw").appendChild(node);
    document.querySelector(".raw").appendChild(btnlista);
    

   

    arrayNombres.push(inputnamebox.value);
    inputnamebox.value="";
    console.log(arrayNombres);
    
    }


// añadir el btn al elemento de la lista q imprimo y darle funcion (event.target
//     remove.appendChild)


    // btn.addEventListener('click', ()=> {
//     let name = document.createElement('li');
//     let value = document.createTextNode(inputnamebox.value)
//     console.log(value);
//     name.appendChild(value);


// document.getElementById("myList").appendChild(name);

// })