
// el segundo apartado ya esta

window.onload = function () {
    
    let farenheit = document.getElementsByTagName("input")[1];
    let celsius = document.getElementsByTagName("input")[2];

    

    farenheit.onclick = function() {

        let conversorTemperaturas = new ConversorTemperaturas;
        conversorTemperaturas.aFarenheit();
        
    }

    celsius.onclick = function() {

        let conversorTemperaturas = new ConversorTemperaturas;
        conversorTemperaturas.aCelsius();
        
    }

}


// let conversor = new ConversorTemperaturas();


class ConversorTemperaturas{
    constructor() {
        this.temp = "";
        this.aFarenheit = this.aFarenheit.bind(this);
        this.aCelsius = this.aCelsius.bind(this);
        
        let botonAFarenheit = document.getElementsByName("aFarenheit")[0];
        botonAFarenheit.addEventListener('click', this.aFarenheit);
        
        let botonACelsius = document.getElementsByName("aCelsius")[0];
        botonACelsius.addEventListener('click', this.aCelsius);
    }

    aFarenheit() {
        // Apartado 3

        let valor = document.getElementsByName("tempEntrada")[0].textContent;
        this.temp = valor;

        let conversion = `${(1.8) * temp + 32} ºF`;
        this.escribirDatos('Zona1',conversion);
        this.escribirFrase(conversion);
    }

    aCelsius() {
        // Apartado 4

        let valor = document.getElementsByTagName("input")[0].textContent;
        this.temp = valor;

        let conversion = `${((temp - 32)/1.8)} ºC`;
        this.escribirDatos('Zona1',conversion);
        this.escribirFrase(conversion);
    }

    escribirDatos(idElemento, conversion) {
        // Apartado 5

        let zona = document.getElementById(idElemento);
        zona.innerHTML(conversion);

        

    }

    escribirFrase(temperatura) {
        let cadena = "";
        if ((temperatura >= 14) && (temperatura < 32)) {
            cadena = 'Temperatura Baja';

        }
        if ((temperatura >= 32) && (temperatura < 68)) {
            cadena = 'Temperatura Moderada';
            
        }
        if ((temperatura >= 68) && (temperatura < 96)) {
            cadena = 'Temperatura Alta';
            
        }
        if (cadena == '-') {
            cadena = "Temperatura desconocida";
        }

        this.escribirDatos('Zona2', cadena);
    }
    
}