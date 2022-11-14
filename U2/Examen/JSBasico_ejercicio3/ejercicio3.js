// No especifica el limite de los números generados, asi que lo hare entre 1 y 10
let arrayRandoms = [];

for (let i = 0; i < 15; i++) {
    
    arrayRandoms[i] = Math.floor(Math.random() * 10 + 1);
    
}

for (let i = 0; i < 15; i++) {
    
    //document.write(arrayRandoms[i] + ("<br>"));

    let numAsteriscos = arrayRandoms[i];
    
    for (let j = 0; j < numAsteriscos; j++) {
        
        document.write("*");
        
    }

    document.write("<br>")
    
}
