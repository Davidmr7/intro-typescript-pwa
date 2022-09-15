//Funciones 
//Funcion que no regresa nada con void 
function sumar(a,b):void{
    console.log(a+b)
}
const resultado = sumar("Roberto" , "Cardiel");
console.log(resultado);

//sumar(4,3);

//la funcion al invocarla me regresa 9 
//El tercer number es el tipo de dato que regresa la funcion 
function sumar2(n1:number,n2:number):number{
    return n1 + n2;
}
console.log(sumar2(6,3));

//La posicion de los parametros importan 
//? se coloca el numero de interrogacion para que le datos sea opcional 
function multiplicar(n1:number, otronumero?:number,base:number=3):number{
    let tem = n1*base;

    return tem;
}
console.log(multiplicar(3,5));//se deja el espacio para el parametro opcional 

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;//Prototipo de un metodo 
}

function calcular(mascota:Mascota,x:number):void{//La funcion recibe un objeto y un numbre que es una edad
    mascota.edad+=x;
    console.log(mascota);
    //mascota.edad = mascota.edad + edad;

}
const nuevaMascota:Mascota={
    nombre:"Miau",
    edad:2,
    mostrarEdad() {
        console.log("La edad es", this.edad);//This hacer referencia del objeto actual esta mencionando valos e la proiedad edda que es igual a 2
    },
}

calcular(nuevaMascota, 3);
console.log(nuevaMascota,3);