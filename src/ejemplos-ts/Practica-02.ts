//Practica 02

class formula{
    a:number;//Propiedades de la clase 
    b:number;
    c:number;

    formulaGeneralx11(a:number,b:number,c:number):number{//Resibe 3 parametros de a,b y c 
       //let x1 = a + b + c;  
       let x1 = (-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)//Formula general
       return x1;//Regresamos el resultado de la formula general y antes lo almacenamos en X1
}
    formulaGeneralx22(a:number,b:number,c:number):number{
        //let x2 = a + b;
        let x2 = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)
        return x2;
    }
};
let a1 = prompt("Ingrese valor de a")//Preguntamos un numero
let valorA = parseInt(a1);//Lo convertimos en number
let b1 = prompt("Ingrese valor de b")
let valorB = parseInt(b1);
let c1 = prompt("Ingrese valor de c")
let valorC = parseInt(c1);

let formula5 = new formula();//Creamos un nuevo objeto 
formula5.a = valorA;//Asignamos valores a las propiedades del objeto
formula5.b = valorB;
formula5.c = valorC;
console.log("El resultado de X1 es " + formula5.formulaGeneralx11(formula5.a,formula5.b,formula5.c));//Le pasamos los valores que ingresamos
console.log("El resultado de X2 es " + formula5.formulaGeneralx22(formula5.a,formula5.b,formula5.c));

let formula3 = new formula();//Creamos un nuevo objeto 
formula3.a = 6;//Asignamos valores a las propiedades del objeto
formula3.b = -19;
formula3.c = 7;
console.log("El resultado del objeto de X1 es " + formula5.formulaGeneralx11(formula3.a,formula3.b,formula3.c));//Le pasamos los valores que ingresamos
console.log("El resultado del objeto de X2 es " + formula5.formulaGeneralx22(formula3.a,formula3.b,formula3.c));
//Imprimimos y le asignamos las 3 propiedades y nos va a devolver el X1 y el X2



