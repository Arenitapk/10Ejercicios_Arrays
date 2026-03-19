if((window.location.pathname.includes("index.html"))) {
    alert("Bienvenido Soldad@");

alert("A continuacion los 10 ejercicios de arrays 😈😈😈🤑🤑");
}

//Funcion de sonido de video de fondo makiaaa
//==================================================================================================================================
function activarSonido() {
    const video = document.getElementById("videoFondo");
    const gif = document.getElementById("miGif");
    const btn = document.querySelector(".btnSonidoVideoFondo");

    if (video.muted) {
        // activar sonido
        video.muted = false;
        video.play();

        // mostrar gif
        gif.style.display = "block";

        // cambiar icono
        btn.textContent = "🔇";
    } else {
        // quitar sonido
        video.muted = true;

        // ocultar gif
        gif.style.display = "none";

        // cambiar icono
        btn.textContent = "🔊";
    }
}

//


//BOTONES PRINCIPALES DE EJERCICIOS
//=============================================================================================================================
let btnEjercicio1 = document.getElementById("btnEjercicio1");
let btnEjercicio2 = document.getElementById("btnEjercicio2");
let btnEjercicio3 = document.getElementById("btnEjercicio3");
let btnEjercicio4 = document.getElementById("btnEjercicio4");
let btnEjercicio5 = document.getElementById("btnEjercicio5");
let btnEjercicio6 = document.getElementById("btnEjercicio6");
let btnEjercicio7 = document.getElementById("btnEjercicio7");
let btnEjercicio8 = document.getElementById("btnEjercicio8");
let btnEjercicio9 = document.getElementById("btnEjercicio9");
let btnEjercicio10 = document.getElementById("btnEjercicio10");

if(btnEjercicio1){
btnEjercicio1.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio1.html";
})}
if(btnEjercicio2)
btnEjercicio2.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio2.html";
})
if(btnEjercicio3)
btnEjercicio3.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio3.html";
})
if(btnEjercicio4)
btnEjercicio4.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio4.html";
})
if(btnEjercicio5)
btnEjercicio5.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio5.html";
})
if(btnEjercicio6)
btnEjercicio6.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio6.html";
})
if(btnEjercicio7)
btnEjercicio7.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio7.html";
})
if(btnEjercicio8)
btnEjercicio8.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio8.html";
})
if(btnEjercicio9)
btnEjercicio9.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio9.html";
})
if(btnEjercicio10)
btnEjercicio10.addEventListener("click", function(){
    window.location.href = "ejercicios/ejercicio10.html";
})

//Ejercicio 1
//======================================================================================================================

let btnRegistroNumeroEjercicio1 = document.getElementById("btnRegistroNumeroEjercicio1");

let arregloEjercicio1 = [];
if(btnRegistroNumeroEjercicio1){
btnRegistroNumeroEjercicio1.addEventListener("click", function(){

    let input1 = document.getElementById("datoEjercicio1");
    let valor1 = Number(input1.value);

    if(valor1<=0){
        alert("Escribe un valor valido");
        return;
    }

    arregloEjercicio1.push(valor1); //se guarda en el array

    console.log(arregloEjercicio1);

    //limpiar input
    input1.value = "";

    //focus automático
    input1.focus();

    if (arregloEjercicio1.length >= 5) {

    //ocultar input
        input1.style.display = "none";

    //también ocultar botón
        btnRegistroNumeroEjercicio1.style.display = "none";

        if (arregloEjercicio1.length === 5) {

        document.getElementById("btnRegresar1").style.display = "block";

        let sumaEjercicio1 = 0;

        for (let i=0; i < arregloEjercicio1.length; i++) {
        sumaEjercicio1 = sumaEjercicio1 + arregloEjercicio1[i];
        }
    alert("La suma total es: " + sumaEjercicio1);
    }
}});

}
let btnRegresar1 = document.getElementById("btnRegresar1");

if(btnRegresar1){
    btnRegresar1.addEventListener("click", function(){
        window.location.href = "../index.html"; 
    });
}
//Ejercicio 2
//========================================================================================================================


let btnAlertEjercicio2 = document.getElementById("btnAlertEjercicio2")

if(btnAlertEjercicio2){
btnAlertEjercicio2.addEventListener("click", function(){

    btnRegresar2.style.display = "block";
    btnAlertEjercicio2.style.display = "none";

    let arregloEjercicio2 = [5, 2, 9, 1, 7];
    let mayor = arregloEjercicio2[0];

    for (let i = 0; i < arregloEjercicio2.length; i++){
    if(arregloEjercicio2[i] > mayor){
        mayor = arregloEjercicio2[i];
        }
    
    }
    alert("El numero mayor es: " + mayor);
})
}
    //Regresar pagina Index

let btnRegresar2 = document.getElementById("btnRegresar2");
    
    if(btnRegresar2){
    btnRegresar2.addEventListener("click", function(){
        window.location.href = "../index.html"; 
    });
}

//Ejercicio 3
//========================================================================================================================

let arregloEjercicio3 = [];

    let btnRegistroNumeroEjercicio3 = document.getElementById("btnRegistroNumeroEjercicio3")
if(btnRegistroNumeroEjercicio3){
    btnRegistroNumeroEjercicio3.addEventListener("click", function(){

        let inputEjercicio3 = document.getElementById("datoEjercicio3");
        let valorEjercicio3 = Number(inputEjercicio3.value);

            //limpiar input
            inputEjercicio3.value = "";

            //focus automático
            inputEjercicio3.focus();

        if(valorEjercicio3<=0){
            alert("Valor invalido")
        }

        arregloEjercicio3.push(valorEjercicio3);

        if (arregloEjercicio3.length === 10){

            let arregloPares = [];

            for(let i = 0; i < arregloEjercicio3.length; i++){

            if(arregloEjercicio3[i] % 2 === 0){
                arregloPares.push(arregloEjercicio3[i]);
            }
        }
        alert("Los numeros pares son: " + arregloPares);

        //ocultar input
        inputEjercicio3.style.display = "none";
        //también ocultar botón
        btnRegistroNumeroEjercicio3.style.display = "none";
        //aparecer boton regresar
        document.getElementById("btnRegresar1").style.display = "block";    
    }  

});
}
//Ejercicio 4
//==========================================================================================================================

let btnRespuestaEjercicio4 = document.getElementById("btnRespuestaEjercicio4");

let arregloFrutal = ["mandarina","kiwi","fresa","papaya","durazno"];

if(btnRespuestaEjercicio4){
btnRespuestaEjercicio4.addEventListener("click", function(){
    let invertido = arregloFrutal.reverse();

    alert("El arreglo invertido es: " + invertido);

    btnRespuestaEjercicio4.style.display = "none";
    document.getElementById("btnRegresar1").style.display = "block";  

})
}

//Ejercicio 5
//=============================================================================================================================

let btnIngresarNombreEjercicio5 = document.getElementById("btnIngresarNombreEjercicio5");

if(btnIngresarNombreEjercicio5){
        btnIngresarNombreEjercicio5.addEventListener("click", function(){

    if (window.location.pathname.includes("ejercicio5.html")) {
        let arrlego5nombres = ["kevin", "daniel", "david", "darwin", "isa"];
        let NombreAdivinar = prompt("Escribe un nombre: ");
        NombreAdivinar = NombreAdivinar.toLowerCase();

        if(NombreAdivinar === "isa"){
        alert("Adivinaste maldita sea!!!!!")

            btnIngresarNombreEjercicio5.style.display = "none";
            document.getElementById("btnRegresar1").style.display = "block"; 

        } else {
            alert("Vuelve a intentar maloo")
        }

    }
    })
}

//Ejercicio 6
//============================================================================================================================

//Dado un arreglo con colores repetidos, pide al usuario que ingrese un color con prompt() y muestra cuántas veces aparece con alert().

let btnAdivinarEjercicio6 = document.getElementById("btnAdivinarEjercicio6");
let arregloColores = ["naranja", "naranja", "morado", "morado", "morado", "azul", "verde", "verde", "rojo", "rojo", "rojo", "rojo", "rosa", "rosa", "rosa"];

if(btnAdivinarEjercicio6){
    btnAdivinarEjercicio6.addEventListener("click", function(){
        let adivinarColor = prompt("Escribe el color para saber cuantos hay en el array:");
        adivinarColor = adivinarColor.toLowerCase();

        if(arregloColores.includes(adivinarColor)){
            let contadorColor = 0;

        for (let i = 0; i<arregloColores.length; i++){
            if(arregloColores[i] === adivinarColor){
                contadorColor = contadorColor + 1;
            }
        }
        alert("El color que escribiste esta en el array: " + contadorColor + " Veces!");
            btnAdivinarEjercicio6.style.display = "none";
            document.getElementById("btnRegresar1").style.display = "block";
    } else {
        alert("invalido manito");
        return;
    }
    });
}

//Ejercicio 7
//=======================================================================================================================


let btnRegistrarNotasEjercicio7 = document.getElementById("btnRegistrarNotasEjercicio7");

let arregloEjercicio7 = [];
if(btnRegistrarNotasEjercicio7){
btnRegistrarNotasEjercicio7.addEventListener("click", function(){

    let inputEjercicio7 = document.getElementById("datoEjercicio7");
    let valorEjercicio7 = Number(inputEjercicio7.value);

    if(valorEjercicio7>10){
        alert("Escribe un valor valido");
        return;
    }
    if(valorEjercicio7<0){
        alert("Escribe un valor valido");
        return;
    } 

    arregloEjercicio7.push(valorEjercicio7);

    console.log(valorEjercicio7)

    //limpiar input
    inputEjercicio7.value = "";

    //focus automático
    inputEjercicio7.focus();

    if(arregloEjercicio7.length === 5){
        //ocultar input
        datoEjercicio7.style.display = "none";
        //ocultar boton de registrar notas
        btnRegistrarNotasEjercicio7.style.display = "none";
        //Mostrar boton de calcular promedio
        document.getElementById("btnCalcularPromedioEjercicio7").style.display = "block";
        
    }

});
}

    let btnCalcularPromedioEjercicio7 = document.getElementById("btnCalcularPromedioEjercicio7");
    let promedio = 0;
    let suma = 0;
    if(btnCalcularPromedioEjercicio7){
        btnCalcularPromedioEjercicio7.addEventListener("click", function(){
            for(let i = 0; i<arregloEjercicio7.length;i++){
                suma = suma + arregloEjercicio7[i];
                promedio = suma / 5;
            }
            alert("Tu promedio es: " + promedio);
            btnCalcularPromedioEjercicio7.style.display = "none";
            document.getElementById("btnRegresar1").style.display = "block";
        })
    }


    //Ejercicio 8
//======================================================================================================================

    let btnMostrarRepetidosEjercicio8 = document.getElementById("btnMostrarRepetidosEjercicio8");
    let arregloOriginal = [1, 2, 3, 2, 4, 3, 5, 1, 6, 4];
    let arregloSinRepetidos = [];

if(btnMostrarRepetidosEjercicio8){
    btnMostrarRepetidosEjercicio8.addEventListener("click", function(){

    for (let i = 0; i < arregloOriginal.length; i++) {
        let numero = arregloOriginal[i];

    // Solo agregar si no está en el arregloSinRepetidos no me sabia esa mano
    if (!arregloSinRepetidos.includes(numero)) {
        arregloSinRepetidos.push(numero);
    }
}
    console.log("Arreglo original:", arregloOriginal);
    console.log("Arreglo sin repetidos:", arregloSinRepetidos);

            btnMostrarRepetidosEjercicio8.style.display = "none";
            document.getElementById("btnRegresar1").style.display = "block";
            document.getElementById("mireConsoleEjercicio8").style.display = "block";

    });
}

//Ejercicio 9
//========================================================================================================================

let btnOrdenarEjercicio9 = document.getElementById("btnOrdenarEjercicio9");
let arregloCiudades = ["cali", "bogota", "medellin", "tunja", "chiquinquira", "ibague"];

if(btnOrdenarEjercicio9){
    btnOrdenarEjercicio9.addEventListener("click", function(){
        arregloCiudades.sort();

    alert("Ciuades en orden alfabetico mano: " + arregloCiudades.join(", "))

            btnOrdenarEjercicio9.style.display = "none";
            document.getElementById("btnRegresar1").style.display = "block";
    })
}

//Ejercicio 10
//========================================================================================================================

let btnMostrarResultadoEjercicio10 = document.getElementById("btnMostrarResultadoEjercicio10");

if(btnMostrarResultadoEjercicio10){
    btnMostrarResultadoEjercicio10.addEventListener("click", function(){
            let estudiantes = [
        { nombre: 'Ana', nota: 8 },
        { nombre: 'darwin', nota: 5 },
        { nombre: 'isa', nota: 9 }
    ];

    for (let estudiante of estudiantes) {
        if (estudiante.nota >= 6) {
            console.log(estudiante.nombre + " aprobó con nota " + estudiante.nota);
    } else {
        console.log(estudiante.nombre + " reprobó con nota " + estudiante.nota);
    }
}
            btnMostrarResultadoEjercicio10.style.display = "none";
            document.getElementById("btnRegresar1").style.display = "block";
            document.getElementById("MirarConsoleEjercicio10").style.display = "block";
});
}