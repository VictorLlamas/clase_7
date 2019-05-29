/*
Joel tiene que informar a sus alumnos quienes tienen que repetir curso, el tiene una lista de alumnos, 
cada alumno tiene un nombre y una lista de calificaciones que se tienen que promediar para saber si el 
alumno está aprobado, el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre 
de los alumnos que no aprobaron.
*/

let alumnos = [
    {
        nombre: "Victor",
        calificaciones: [10,10,10]
    },
    {
        nombre: "Karla",
        calificaciones: [5,7,5]
    },
    {
        nombre: 'May',
        calificaciones: [6,8,10]
    }
]
let cantidadDeAlumnos = alumnos.length;
for(let index = 0; index < cantidadDeAlumnos; index++){
    let promedio = 0;
    let cantidadDeCals = alumnos[index].calificaciones.length;
    for(let cal = 0; cal < cantidadDeCals; cal++){
        promedio += alumnos[index].calificaciones[cal];
    }
    promedio /= cantidadDeCals;
    if(promedio < 6){
        console.log(alumnos[index].nombre);
    } 
} 