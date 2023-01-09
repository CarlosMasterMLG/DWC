function numeroEnlaces(){
    let divInformacion=document.getElementById("info");

    let parrafosDocumento=document.getElementsByTagName("p");
    let enlacesDocumento=document.getElementsByTagName("a");

    let numeroEnlaces=document.getElementsByTagName("a").length;
    let textoEnlaces=document.createElement('t');
    textoEnlaces.innerHTML=`Enlaces en la página= ${numeroEnlaces} <br>`;
    divInformacion.appendChild(textoEnlaces);

    let numeroParrafos=document.getElementsByTagName("p").length;
    let textoParrafos=document.createElement('t');
    textoParrafos.innerHTML=`Número de párrafos= ${numeroParrafos} <br>`;
    divInformacion.appendChild(textoParrafos);

    let penultimoEnlace=enlacesDocumento[enlacesDocumento.length-2];
    let textoPenultimoEnlace=document.createElement('t');
    textoPenultimoEnlace.innerHTML=`El penúltimo enlace apunta a= ${penultimoEnlace} <br>`;
    divInformacion.appendChild(textoPenultimoEnlace);

    let ultimoEnlace=enlacesDocumento[enlacesDocumento.length-1];
    let textoUltimoEnlace=document.createElement('t');
    textoUltimoEnlace.innerHTML=`El último enlace apunta a= ${ultimoEnlace} <br>`;
    divInformacion.appendChild(textoUltimoEnlace);

    let contadorEnlace=0;
    for(link in enlacesDocumento){
        if(link.href=='http://prueba/'){
            contadorEnlace++;
        }
    }
    let textoContadorEnlace=document.createElement('t');
    textoContadorEnlace.innerHTML=`${contadorEnlace} enlaces apuntan a http://prueba. <br>`;
    divInformacion.appendChild(textoContadorEnlace);

    for(let i=1;i<=parrafosDocumento.length;i++){
        let parrafoActual=parrafosDocumento[i-1];
        let enlacesDelParrafo=parrafoActual.getElementsByTagName("a").length;
        let enlaceContador=document.createElement('t');
        enlaceContador.innerHTML=`Enlaces del párrafo ${i} = ${enlacesDelParrafo} <br>`;
        divInformacion.appendChild(enlaceContador);
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    numeroEnlaces();
});