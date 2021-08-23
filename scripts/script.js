'use strict';

let registroVenta = [];

class registroVentas {
    constructor(nombre,direccion,nit,producto,Totalpago) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.nit = nit;
        this.producto = producto;
        this.Totalpago = Totalpago;
    }
}

//funcion para validar
function validateFields() {

    if(document.getElementById("nombre").value == "") {
        alert("Favor llenar nombre");
        return false;
    }

    if(document.getElementById("direccion").value == "") {
        alert("Favor llenar la dirección");
        return false;
    }

    if(document.getElementById("nit").value == "") {
        alert("Favor ingresar nit");
        return false;
    }

    if(document.getElementById("producto").value == "") {
        alert("Favor llenar productos");
        return false;
    }

    if(document.getElementById("Totalpago").value == "") {
        alert("Favor llenar total a pagar");
        return false;
    }

    return true;
}

//poblar arreglo
function addRecord() {
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let nit = document.getElementById("nit").value;
    let producto = document.getElementById("producto").value;
    let Totalpago = document.getElementById("Totalpago").value;

    registroVenta.push(new registroVentas (nombre,direccion,nit,producto,Totalpago));
}

function showData() {

    let rows = "";

    for (let index = 0; index < registroVenta.length; index++) {
        
        rows +='<tr>'
        rows +='<td>' + registroVenta[index].nombre + '<td>'
        rows +='<td>' + registroVenta[index].direccion + '<td>'
        rows +='<td>' + registroVenta[index].nit + '<td>'
        rows +='<td>' + registroVenta[index].producto + '<td>'
        rows +='<td>' + registroVenta[index].Totalpago + '<td>'
        rows += '</tr>'
    }

    document.getElementById("listado").innerHTML = rows;


}


//VOID MAIN
function addData() {

  
    //Validar datos
    if (validateFields() == false) {
        return;
    }
    alert("Todo bien...")


    //porblar arreglo
    addRecord();

    //mostrar datos
    showData();

    //limpiar controles
    
}