// codigo del cuadrado
console.group("Cuadrados")
// const LadoCuadrado = 5;
// console.log("Los lados del cuadrado Miden: " + LadoCuadrado + "cm")

// console.log("El perimetro Cuadrado " + perimetroCuadrado + "cm")

function perimetroCuadrado(lado){
    return lado * 4;
} 
function areaCuadrado(lado){
    return lado * lado;
} 


// const areaCuadrado = LadoCuadrado * LadoCuadrado;

// console.log("El area del Cuadrado es " + areaCuadrado + "cm^2")


// Codigo del triangulo
console.groupEnd()
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

// console.log(
//     "Lados del triangulo" 
//     + ladoTriangulo1 
//     +"cm" 
//     + ladoTriangulo2 
//    + "Lado Triangulo 3" 
//     + ladoTriangulo3 
//     + "cm")

    const alturaTriangulo = 5.5;

    // console.log("Altura del triangulo es de " + alturaTriangulo + "cm")

    function perimetroTriangulo( ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) {
        return  ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3
    }

    function areaTriangulo (ladoTriangulo3, alturaTriangulo){
        return ladoTriangulo3 * alturaTriangulo
    }


    console.groupEnd()

    console.group("Circulos")

        // radio
    // const RadioCirculo = 4;
    // console.log("El Radio del Circulo" + RadioCirculo + "cm")


    function DiametroCirculo (Radio){
        return Radio * 2;
    }


        // Diametro
    // const DiametroCirculo = RadioCirculo * 2;
    // console.log("El Diametro del Circulo" + DiametroCirculo + "cm")

        //PI
    const PI = Math.PI;
    console.log("El PI" + PI)

        // circunferencia
    function perimetroCirculo(radio){
        const diametro = DiametroCirculo(radio)
        return diametro* PI

    }
        
    // const perimetroCirculo = DiametroCirculo * PI;
    // console.log("El perimetro del Circulo" + perimetroCirculo + "cm")

        // AREA

    function areaCirculo(radio){
        return (radio * radio)* PI

    }
    console.groupEnd()

    // calculos del cuadrado
    function CalcularPerimetroCuadrado(){

       const input = document.getElementById("inputcuadrado");
       const value = input.value;

       const perimetro = perimetroCuadrado(value)
       alert(perimetro)
    }

    function CalcularareaCuadrado(){
        const input = document.getElementById("inputcuadrado");
        const value = input.value;
 
        const area = areaTriangulo(value)
        alert(area)
        
    }

    
    // calculos del circulo
    function CalcularPerimetrocirculo(){

        const input = document.getElementById("inputcuadrado");
        const value = input.value;
 
        const perimetro = perimetroTriangulo(value)
        alert(perimetro)
     }
 
     function Calcularareacirculo(){
         const input = document.getElementById("inputcuadrado");
         const value = input.value;
  
         const area = areaCuadrado(value)
         alert(area)
         
     }

     
    // calculos del triangulo
    function CalcularPerimetrotriangulo(){

        const input = document.getElementById("inputtriangulo");
        const value = input.value;
 
        const perimetro = perimetroCuadrado(value)
        alert(perimetro)
     }
 
     function Calcularareatriangulo(){
         const input = document.getElementById("inputcirculo");
         const value = input.value;
  
         const area = areaCirculo(value)
         alert(area)
         
     }
 
 

   

   