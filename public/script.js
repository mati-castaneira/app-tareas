let popup = document.getElementById("AddPopUp");
let btnAdd = document.getElementById("btnAdd");
let noHay = document.getElementById("noHay");

btnAdd.addEventListener("click", function () {
  popup.style.display = "block";
});

let btnAddTask = document.getElementById("btnAddTask");

btnAddTask.addEventListener("click", function () {
  let titulo = document.getElementById("titleTask").value;
  let category = document.getElementById("categoryTask").value;
  let description = document.getElementById("descriptionTask").value;
  let listado = document.getElementById("listado");
  let advertencia = document.getElementById('advertencia')
  if(titulo == '' || category == '') {
    advertencia.style.display = 'block'
  } else {
  popup.style.display = "none";
  noHay.style.display = "none";
  listado.style.display = "flex";
  let seleccion = `<li><img class="iconoCategoria" src="./img/${category}.png"><p class="destitule">${titulo}</p><button id="miFlechita" style="background-color: transparent;
        border: none;" class="bntFlecha"  onclick= "cdetalle('${category}', '${titulo}', '${description}')"><img class="flechita" src="./img/arrow-right.svg"></button></li>`
        listado.innerHTML += seleccion
  }
})


function cdetalle(category,titulo,description) {
  let descripcionTarea = document.getElementById('descripciontarea')
  let containerTarea = document.getElementById('containerdescripción')
  let texto = `<button id="cerrar" onclick="cerrarCuadro()">X</button>
  <img id="icoSelec" src="./img/${category}.png">
  <h3 id="prodSelec">${titulo}</h3>
  <p id="descSelec">${description}</p>`
  descripcionTarea.style.display = 'block'
  containerTarea.innerHTML = texto
  
}

function cerrarCuadro(){
  let descripcionTarea = document.getElementById('descripciontarea')
  descripcionTarea.style.display = 'none'
}

