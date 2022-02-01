// Obtener Altura
// let operacion = function(lado1,base){
//     let adyacente = base/2;
//     let uno = (base * base) + (lado1 * lado1);
//     let dos = (Math.sqrt(uno)).toFixed(1);
//     return dos;
// }
// const llamar = function(){
//     let valor1 = document.getElementById("dato1");
//     let input1 = valor1.value;
//     let valor2 = document.getElementById("dato2");
//     let input2 = valor2.value;
//     let valor3 = document.getElementById("dato3");
//     let input3 = valor3.value;
    
//     if(input1 !== input2){
//         console.log("Ups!! Los lados deben ser iguales");
//     }else{
//         const traer = operacion(input1,input3);
//         console.log(traer);
//     }

// }


// CALCULAR MEDIANA

let salarios = [
    260,
    300,
    450,
]

let a = function(salarios){
    let b = salarios.length;
    return b;
}

let calcular = (lista) => {
    if(esPar(a(salarios)) === true){
        let posicion = parseInt(lista.length/2);
        let operacion = lista[posicion - 1] + lista[posicion];
        let ya = operacion/2;
        return ya;
    }else{
        let dividir = parseInt(lista.length/2);
        return lista[dividir];
    }
}
let agregar = () =>{
    let input1 = document.getElementById("dato1");
    let valor1 = Number(input1.value);
    let input2 = document.getElementById("dato2");
    let valor2 = Number(input2.value);
    let input3 = document.getElementById("dato3");
    let valor3 = Number(input3.value);
    let add = salarios.push(valor1,valor2,valor3);
    console.log(calcular(salarios));
}

const esPar = (div) =>{
    if(div % 2 === 0){
        return true;
    }else{
        return false;
    }
}