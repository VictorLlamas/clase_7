/*
Joel tiene que informar a sus alumnos las materias que reprobaron, el tiene una lista de alumnos, 
cada alumno tiene un nombre y una lista de materias, cada materia tiene su nombre y su calificación, 
el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre del alumno y la materia 
que reprobó.
*/

let alumnos = [
    {
        nombre: "Victor",
        calificaciones: [
            {
                nombre: "Matematicas",
                calificacion: 5
            }, 
            {
                nombre: "Espanol",
                calificacion: 7
            }
        ]
    },
    {
        nombre: "Karla",
        calificaciones: [
            {
                nombre: "Matematicas",
                calificacion: 8
            }, 
            {
                nombre: "Espanol",
                calificacion: 4
            }
        ]
    },
    {
        nombre: 'May',
        calificaciones: [
            {
                nombre: "Matematicas",
                calificacion: 8
            }, 
            {
                nombre: "Espanol",
                calificacion: 8
            }
        ]
    }
]

let cantidadDeAlumnos = alumnos.length;
for (let idxAlumno = 0; idxAlumno < cantidadDeAlumnos; idxAlumno++){
    let cantidadDeCals = alumnos[idxAlumno].calificaciones.length;
    console.log(alumnos[idxAlumno].nombre + ":")
    let reprobo = false;
    for (let idxcal = 0; idxcal < cantidadDeCals; idxcal++){
        if (alumnos[idxAlumno].calificaciones[idxcal].calificacion < 6){
            console.log(alumnos[idxAlumno].calificaciones[idxcal].nombre + ": " + alumnos[idxAlumno].calificaciones[idxcal].calificacion);
            reprobo = true;
        }
    }
    if (!reprobo){
        console.log("El alumno no reprobo materias")
    }
    console.log(" ")
}