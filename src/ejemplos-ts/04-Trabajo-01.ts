interface alumnoUtl{
    nombre:string;
    edad:number;
    direccion:{
        calle:string;
        pais:string;
        estado:string;
    };
    mostrarDireccion:()=>void;
}

const AlumnoUTL:alumnoUtl={
    nombre:"David",
    edad:23,
    direccion:{
        calle:"Veracruz",
        pais:"MX",
        estado:"GTO",
    }, 

    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.calle + ', ' + this.direccion.estado + ', ' + this.direccion.pais;
    }
}

const direccion = AlumnoUTL.mostrarDireccion();
console.log(direccion);
//Todos los objetos tienen que tener tipado de datos 
