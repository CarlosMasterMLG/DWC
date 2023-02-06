const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

const registroPacientes2 = new Map();
let i = 1;

registroPacientes.forEach((value)=>{
    registroPacientes2.set(`Paciente: ${i}`, value);
    i++;
});

//console.log(registroPacientes2);

let arrayPacientes = [registroPacientes2];

console.log(arrayPacientes);

let stringPacientes = registroPacientes2.toString();

console.log(stringPacientes);