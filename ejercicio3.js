/* 
Paco no estudió mucho para sus últimos exámenes, quiere saber cuántos exámenes tendrá que 
realizar de nuevo, el programa recibirá la cantidad de exámenes y un arreglo de 
calificaciones para poder calcular el resultado
*/

let listaDeCalificaciones = [10,5,7,5,9];
let cantidadDeCalificaciones = listaDeCalificaciones.length;
let totalReprobados = 0;
let mensaje = "examenes"
for(let index = 0;index < cantidadDeCalificaciones; index++){
    if(listaDeCalificaciones[index] < 6){
        totalReprobados ++;
    }
}
if (totalReprobados === 1){
    mensaje = "examen";
}
console.log("Paco tendra que repetir: " + totalReprobados + " " + mensaje);
