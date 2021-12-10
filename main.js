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

// let user  = prompt("Ingresa tu nombre de usuario");

// function descuento(precio, porcentaje){
//     return precio - ((precio * porcentaje) /100)
// }
// for (let index = 0; index < 2; index++) {
//     let resultado = descuento (parseFloat(prompt("Hola " + user+ " ingresa el precio "))
//     ,parseFloat(prompt("Ingresa el descuento de tu cupón")));
    

    
//     alert(user + "el precio sin iva es " + resultado);
// }

// let ingreso = '';
// for ( i =0; i < 3; i++) {
// let reserva = new Reserva(prompt("ingresa tu nombre"),
//                           parseInt(prompt("edad")),
//                           parseInt(prompt("Para cuantas personas es la reserva")));


// ingreso+= "Reserva: "+reserva.nombre+" "+
//          "Edad: "   +reserva.edad+""+
//          "Comensales: " +reserva.comensales+"\n";
// }
// alert(ingreso);


// Desafio clase 5----------------------------------------------






class Reserva {
        constructor(nombre, edad, comensales) {
            this.nombre = nombre;
            this.edad = edad;
            this.comensales = comensales;
        }
}

let ingreso = '';
    for ( i =0; i < 2; i++) {
        let reserva = new Reserva(prompt("ingresa tu nombre"),
                          parseInt(prompt("edad")),
                          parseInt(prompt("Para cuantas personas es la reserva")));


ingreso+= "Reserva: " +reserva.nombre +"\n"+
         "Edad: " +reserva.edad+ "\n"+
         "Comensales: " +reserva.comensales+"\n";
}
console.log(ingreso);

const reservas = [];

reservas.push(new Reserva("EDUARDO", 34, 6));
reservas.push(new Reserva("MARTIN", 18, 3));
reservas.push(new Reserva("VICTORIANO", 56, 3));
reservas.push(new Reserva("ELVIRA", 43, 4));



console.log(reservas);


function buscarReserva(reser, user){
    return reser.find(objeto => objeto.nombre === user.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarReserva(reservas, prompt('INGRESAR NOMBRE DE RESERVA'));
    if(busqueda != undefined){
        alert('Reserva:  '+busqueda.nombre+"\n" +'Mesa para: '+busqueda.comensales + " personas" + "\n" + 'Edad: '+busqueda.edad+ " años");
    }else{
        alert('NO EXISTE LA RESERVA');
    }
}



