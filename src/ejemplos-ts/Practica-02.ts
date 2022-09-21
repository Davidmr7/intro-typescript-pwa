//Practica 02

class formula{
    a:number;//Propiedades de la clase 
    b:number;
    c:number;

    formulaGeneralx1(a:number,b:number,c:number):number{//Resibe 3 parametros de a,b y c 
       //let x1 = a + b + c;  
       let x1 = (-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)//Formula general
       return x1;//Regresamos el resultado de la formula general y antes lo almacenamos en X1
}
    formulaGeneralx2(a:number,b:number,c:number):number{
        //let x2 = a + b;
        let x2 = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)
        return x2;
    }
};

let formula2 = new formula();//Creamos un nuevo objeto 
formula2.a = 6;//Asignamos valores a las propiedades del objeto
formula2.b = -19;
formula2.c = 7;
console.log("El resultado de X1 es " + formula2.formulaGeneralx1(formula2.a,formula2.b,formula2.c));
console.log("El resultado de X2 es " + formula2.formulaGeneralx2(formula2.a,formula2.b,formula2.c));
//Imprimimos y le asignamos las 3 propiedades y nos va a devolver el X1 y el X2


    


Math.pow(3,2);//Cuadrado 
Math.sqrt(2);//Raiz 
//Hcaer un pograma pedir 3 numeros 
//Pedir 3 numeros funciones propiedades 
//



