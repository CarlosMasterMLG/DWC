class NIF{

    constructor(numero, letra){
        this.numero = numero;
        this.letra = letra;
    }

    esCorrecto(numero, letra){

        let restoArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
        let letraArray = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

        let restoNum = 0;

        let resto = numero % 23;

        for (let i = 0; i < restoArray.length; i++) {
            
            if (resto == restoArray[i]) {
                restoNum == resto;
                break;
            }
            
        }

        if (letra == letraArray[restoNum]) {
            
            return true;

        }else{
            return false;
        }
        
    }
}