let nombre = "Valentina";
let edad = 23;
let esMayorDeEdad = edad >= 18;
const TAU = Math.PI  * 2;



console.log("Hola " + nombre + " tienes " + edad + " años" + " y " + esMayorDeEdad + " y " + TAU);

function saludar(nombre="Mundo") {
    alert("Hola " + nombre);
}

saludar();
saludar(nombre);
saludar("Valentina");