/*
 A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio
 es suficiente para tener una beca este año, el promedio mínimo que necesita es 8, 
 el programa recibirá la cantidad de calificaciones y un arreglo de calificaciones 
 para poder calcular el resultado
 */

let listaDeCalificaciones = [10,8,7,9,10];
let sumaDeCalificaciones = 0;
let promedio = 0;
for (let cal = 0; cal < listaDeCalificaciones.length; cal++){
    sumaDeCalificaciones += listaDeCalificaciones[cal];
}
promedio = sumaDeCalificaciones / listaDeCalificaciones.length;

console.log("El promedio es: " + promedio);