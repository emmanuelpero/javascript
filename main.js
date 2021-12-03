/**
 * @challenge: descripcion del desafio
 * 
 * @version: nro de version
 * @author: Emmanuel Peró
 * @fecha: 25/11/2021
 *
 * History:
 *  - v1.0.1 – Primera entrega
 *  - v1.0.2 – Correccion de nombre de variable.
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

// let invitados= "";

// for (let i = 0; i < 5; i++){
//     invitados += prompt ("Ingresa nombres de invitados") + "\n";
// }
// alert("Los invitados son: " + invitados);


// Desafio clase-4  ------------------------------------------------

let user  = prompt("Ingresa tu nombre de usuario");

function descuento(precio, porcentaje){
    return precio - ((precio * porcentaje) /100)
}
for (let index = 0; index < 5; index++) {
    let resultado = descuento (parseFloat(prompt("Hola " + user+ " ingresa el precio "))
    ,parseFloat(prompt("Ingresa el descuento de tu cupón")));
    
    alert(user + "el precio final es " + resultado);
}







