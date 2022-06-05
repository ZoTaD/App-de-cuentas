const formCrear = document.getElementById('form-crear');
formCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    calculo();
});

var totalGastado = 0;
var cuantaGente = 0;

// Captura los datos
function capturar() {
    var nombre = document.getElementById('nombre');
    var monto = document.getElementById('monto');
    var lista = document.getElementById('lista-personas');
    


    if (nombre.value != '' && monto.value != '') {
        var li = document.createElement("li");
        li.className = "h6 items-lista";
        li.innerText = nombre.value + ": $" + monto.value;
        totalGastado = totalGastado + parseFloat(monto.value);
        nombre.value = '';
        monto.value = '';
        lista.appendChild(li);
        cuantaGente += 1;
    } else alert ('Por favor complete los campos vacios')
}

//Muestra los datos, saca el total y lo divide
function mostrarTotal() {
    if (isNaN(totalGastado)) {
        document.getElementById('subtotal').innerHTML = 'Total: $';
        document.getElementById('montoIndividual').innerHTML = 'Cada persona debe aboanr: $';
    }else {
        document.getElementById('subtotal').innerHTML = 'Total: $' + totalGastado;
        document.getElementById('montoIndividual').innerHTML = 'Cada persona debe abonar: $' + (totalGastado / cuantaGente);
    }
}

//llama a las funciones
function calculo() {
    capturar();
    mostrarTotal();
}

//Borra los items de la lista
var borrar = document.getElementById("boton2")
var listafunc = document.querySelector("ul")
borrar.addEventListener("click", function() {
    listafunc.removeChild(listafunc.lastChild);
});