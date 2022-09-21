//desestructuracion de objetos y Arrays 

interface Reproductor{
    volumen:number;
    segundo: number;
    cancion: string;
    detalles :Detalles;
}

interface Detalles{
    autor:string;
    year:number;

}

const reproductor: Reproductor={
    volumen:90,
    segundo:66,
    cancion:"Mañanitas",
    detalles:{
        autor:"cepillin",
        year:1978,
    }
}

const{volumen, segundo, cancion, detalles}=reproductor;//desestructurar un objeto 
const{autor}=detalles;


console.log(`El volumen actual es: ${volumen}`)
console.log(`El segundo actual es: ${reproductor.segundo}`)
console.log(`La cancion actual es: ${reproductor.cancion}`)
console.log(`El autor es: ${reproductor.detalles.autor}`)

const dbz:string[]=["Goku","Vegeta","Trunks","Yamcha"];//Propiedades del array se colocan dentro del corchete
console.log(`Personaje 1 : ${dbz[0]}`);
console.log(`Personaje 1 : ${dbz[1]}`);
console.log(`Personaje 1 : ${dbz[2]}`);
console.log(`Personaje 1 : ${dbz[3]}`);
const[a,,,d]=dbz;//desectructurar un array, dejar espacio si no existe

console.log(`Personaje 1 : ${a}`);
//console.log(`Personaje 1 : ${b}`);
//console.log(`Personaje 1 : ${c}`);
console.log(`Personaje 1 : ${d}`);