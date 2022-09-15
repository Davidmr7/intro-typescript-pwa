interface alumnoUtl2{
    nombre:string;
    edad:number;
    direccion2:{
        calle:string;
        pais:string;
        estado:string;
    };
    mostrarDireccion:()=>void;
}

const AlumnoUTL2:alumnoUtl2={
    nombre:"David2",
    edad:23,
    direccion2:{
        calle:"Veracruz",
        pais:"MX",
        estado:"GTO",
    }, 

    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion2.calle + ', '+ this.direccion2.estado + ', '+ this.direccion2.pais;
    }
}

const direccion2 = AlumnoUTL2.mostrarDireccion();
console.log(direccion2);
//Todos los objetos tienen que tener tipado de datos 
