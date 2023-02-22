window.onload = function () {

    let body = document.getElementsByTagName("body")[0];

    let p1 = document.createElement("p");
    p1.innerHTML = "Primer número:";
    body.appendChild(p1);

    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "valor1");
    body.appendChild(input1);

    let p2 = document.createElement("p");
    p2.innerHTML = "<br>Segundo número:";
    body.appendChild(p2);

    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "valor2");
    body.appendChild(input2);

    br1 = document.createElement("br");
    body.appendChild(br1);
    br2 = document.createElement("br");
    body.appendChild(br2);

    añadirBotones(4, "sumar, restar, multiplicar, dividir");

    añadirResultado();

}

function añadirBotones(i, operacionesHacer) {

    let body = document.getElementsByTagName("body")[0];
    let numBtns = i;
    let operaciones = operacionesHacer;
    
    let cadena = operacionesHacer;
    let array = cadena.split(", ");

    for (let j = 0; j < numBtns; j++) {

        operacion = operaciones.split(', ', [j]);
        let num = (j+1).toString();
        let name = "button";
        name = name + num;
        
        btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("name", name);
        btn.setAttribute("value", array[j]);

        body.appendChild(btn);
        
    }
}

function añadirResultado() {

    let body = document.getElementsByTagName("body")[0];

    let p = document.createElement("p");
    p.innerHTML = "Resultado: ";
    body.appendChild(p);

    inputResultado = document.createElement("input");
    inputResultado.setAttribute("type", "text");
    inputResultado.setAttribute("name", "resultado");

    body.appendChild(inputResultado);
    
}