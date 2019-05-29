/*
Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá la cantidad 
de asistencias y un arreglo de asistencias para poder calcular el resultado, cada elemento 
esta representado por un valor booleano
*/

let listaDeAsistencia = [true,false,true,true];
let cantidadDeClases = listaDeAsistencia.length;
let porcentajeDeAsistencia = 0;
let cantidadDeAsistencias = 0;
for(let index = 0; index < cantidadDeClases; index++){
    if (listaDeAsistencia[index]){
        cantidadDeAsistencias++;
    }
}
porcentajeDeAsistencia = (cantidadDeAsistencias / cantidadDeClases) * 100;
console.log("Joel asistio: "+ cantidadDeAsistencias + " veces a clase de un total de: " +cantidadDeClases );
console.log("El porcentaje de asistencia es: " +  porcentajeDeAsistencia + "%");