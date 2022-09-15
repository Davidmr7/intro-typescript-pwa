//Objetos en TS
//Definicion de interface 

interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
    

}

let alumno:Alumno= {
    nombre:"juan", 
    matricula:176271,
    email:"juan@gmail.com"
};

let mascotas = ["perro","gato","perico",]

mascotas[1] = "shhh";

mascotas.push("nuevo")
let tem:(number | string)[]=[];
tem.push("Nombre");
tem.push(232);



console.log(mascotas);
console.log(alumno);
console.table(alumno);