const list1 = [
    100,
    200,
    300,
    400
]

const mediaList1 = parseInt(list1.length / 2);

function calcularMediaAritmetica(lista){
    const sumaList = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaList / lista.length
    return promedioLista
}

function esPar(numero){
    if(numero % 2 === 0){
        return true
    }else{
        //la posicon mitadLista dentro de la list es par
        return false
    }
}

let mediana; 

if(esPar(list1.length)){
    const elemento1 = list1[mediaList1 -1];
    const elemento2 = list1[mediaList1
    ];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ])

    mediana = promedioElemento1y2

}else{
    mediana = list1[mediaList1]
}




