const imagenes = [
    "img1", "img2",
    "img4"
]

const puzzle = document.getElementById("juego");
const piezas = document.getElementById("piezas");
puzzle.setAttribute('ondrop', 'drop(event)')
puzzle.setAttribute('ondragover', 'allowDrop(event)')

while(imagenes.length){
    
    const index = Math.floor(Math.random()*imagenes.length);
    const div = document.createElement("img");
    div.className='pieza';
    div.id=imagenes[index];
    div.src = `img/ejercicio1/${imagenes[index]}ejercicio1.jpg`
    div.draggable = 'true'
    div.setAttribute('ondragstart', 'drag(event)')    
    piezas.appendChild(div);
    piezas.appendChild(document.createElement("br"))
    imagenes.splice(index, 1)
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    puzzle.style.backgroundColor = "yellow";
    puzzle.style.border = "1px dotted black"
}
  
function dropPiezas(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function drop(ev) {
    if(puzzle.childElementCount == 0){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}