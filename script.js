
//Ejercicio  1
function imprimirNumero() {
    let numero = prompt("ingrese un numero entre el 1 y el 100");

    document.getElementById("button1").innerHTML = '<span>1</span> <br> Numero ingresado ' + numero + ' escrita hasta el numero 1';

    while (numero <= 100 && numero > 0) {
            numero--;

            document.getElementById("respuesta1").innerHTML += numero + 1 + " - ";
            console.log(numero + 1)
        }
    }


//Ejercicio  2
function napoleon() {
    document.getElementById("button2").innerHTML = '<span>2</span> <br> Tu respuesta es correcta';

    let color = prompt("¿De qué color es el caballo blanco de Napoleón?");

    while (color !== "blanco" && color !== "Blanco" && color !== "BLANCO") {
        alert("¡Respuesta incorrecta!");
        color = prompt("¡Intentalo otra vez! ¿De qué color es el caballo blanco de Napoleón?");
    }
    document.getElementById("respuesta2").innerHTML = '!Blanco¡';
    console.log("¡Respuesta Correcta!");
}



//Ejercicio 3
function nota() {
    
    let materia = ["matematicas", "ciencia", "fisica"],
    notas = [],
    total = 0;

    
    for (let i = 0; i < materia.length; i++) {
        notas.push(parseInt(prompt("Ingrese el promedio de notas " + materia[i])));
    }

    document.getElementById("button3").innerHTML = '<span>3</span> <br> Notas ingresadas de <br> Matematicas ' + notas[0] + ' - Ciencia ' + notas[1] + ' - Fisica ' + notas[2];
    
    for (let suma of notas) total += suma;
    
    let resultado = Math.round(total / materia.length);
    
    document.getElementById("respuesta3").innerHTML = 'El promedio de nota es ' + resultado;
    console.log("El promedio de nota es " + resultado);

}




// Ejercicio 4
function fruta() {
    
    document.getElementById("button4").innerHTML = '<span>4</span> <br> Fruta ingresadas';
    let frutas = []

    for (let i = 0; i < 3; i++) {
        frutas.push(prompt('Escribe el nombre de tu '  + (i + 1) + '° fruta'));
    }

    for (let j = 0; j < frutas.length; j++) {
        const manzana = /manzana/i;
        if (!frutas[j].match(manzana)) {
            document.getElementById("respuesta4").innerHTML += frutas[j] + ' ';
            console.log(frutas[j])
        }
    }
}



// Ejercicio 5
function letras() {    
    let palabra = prompt('escriba su nombre');
    while (palabra === '' || palabra == null) {
        alert("¡Respuesta incorrecta!");
        palabra = prompt('escriba su nombre');
    }

    let numeroVocales = palabra.match(/[aeiou]/gi).length;
    let numeroConsonantes = palabra.match(/[^aeiou]/gi).length;
    
    document.getElementById("button5").innerHTML = '<span>5</span> <br> Nombre ingresado es ' + palabra;

    document.getElementById("respuesta5").innerHTML = 'La palabra tiene ' + numeroVocales + ' vocales y ' + numeroConsonantes + ' consonantes';

    console.log('La palabra tiene ' + numeroVocales + ' vocales y ' + numeroConsonantes + ' consonantes')

}