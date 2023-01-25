
/**
 * Función para para hacer ejercicios
 */
function validarEjercicios() {
    let patron = /^[1234567890]{9}$/;

    /*
    1-let patron = /^[1234567890]{9}$/;
    2-
    */

    this.className = "";
    if (patron.test(this.value)) {
        this.className = "verde";
    }
}

window.addEventListener('load', function(){
    let ejercicios = document.getElementById('ejercicios');

    ejercicios.addEventListener('keyup', validarEjercicios);
});
