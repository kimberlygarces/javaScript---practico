// const list1 = [
//     100,
//     200,
//     300,
//     400
// ]

function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaList = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );


    const promedioLista = sumaLista / lista.length
    return promedioLista
}



