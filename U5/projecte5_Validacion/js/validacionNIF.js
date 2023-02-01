/**
 * Función para validar varios patrones
 */
function validarDatos(){
    let patrones = new Map();

    patrones.set("nombre", /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/);
    patrones.set("apellidos", /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ ]{2,}$/);
    patrones.set("email", /^.+@.+$/);
    patrones.set("telefonoNacional", /^([89][^09]|[67][0-9])[0-9]{7}$/);
    patrones.set("codigoPostal", /^(0[1-9]|[1-4][0-9]5[0-2])[0-9]{3}$/);
    patrones.set("hora", /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/);
    
    let targetaVisa ='4[0-9]{15}|4[0-9]{12}';
    let targetaMasterCard = '5[1-5][0-9]{14}';
    let targetaDiscover = '6011[0-9]{12}|5[0-9]{14}';
    let targetaAmericanExpress = '34[0-9]{13}|37[0-9]{13}';
    let targetaDinersClub = '36[0-9]{12}|38[0-9]{12}|30[0-5][0-9]{11}';
    let targetaJCB = '35[0-9]{14}|2131[0-9]{11}|1800[0-9]{11}';

    let tarjetas = `^(${targetaVisa}|${targetaMasterCard}|${targetaDiscover}|${targetaAmericanExpress}|${targetaDinersClub}|${targetaJCB})$`;

    let patronTarjetas = new RegExp(`${tarjetas}`);
    console.log(patronTarjetas);

    patrones.set("tarjeta", `${patronTarjetas}`);
    
    //console.log(patrones);
    


    this.className = "";
    if (patrones.get(this.id).test(this.value)) {
        this.className = "verde";
    }

} 

// Ejecución de la aplicación
    window.addEventListener('load', function(){
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');

    nombre.addEventListener('keyup', validarDatos);
    apellidos.addEventListener('keyup', validarDatos);
    email.addEventListener('keyup', validarDatos);
    
});