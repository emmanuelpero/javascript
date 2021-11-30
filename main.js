/**
 * @challenge: descripcion del desafio
 * 
 * @version: nro de version
 * @author: Emmanuel Peró
 * @fecha: 25/11/2021
 *
 * History:
 *  - v1.0.1 – Desafio Clase 1
 *  - v1.0.2 – Correccion de nombre de variable.
 *  - v1.0.3 – Ciclo for - lista de invitados. 
 */
// Código de aquí en adelante


// Desafio clase-2


// let user = prompt("ingresa tu nombre");

// let sector = prompt("Hola " + user + " indica el sector donde trabajas");

// if (((user == "Emmanuel") || (user== "emmanuel")) && ((sector == "Diseño") || (sector == "diseño"))){
//     alert("Puedes ingresar al sitio");
// }else{
//     alert("No tienes acceso o ingresa los datos de nuevo");
// }


// Desafio clase-3------------------------------------------------


let invitados= "";

for (let i = 0; i < 5; i++){
    invitados += prompt ("Ingresa nombres de invitados") + "\n";
}
alert("Los invitados son: " + invitados);


