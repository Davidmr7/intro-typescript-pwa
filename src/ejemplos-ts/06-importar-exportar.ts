import{calcularIVA2,Producto} from "./05-desescructurar-funciones"

const carrito:Producto[]=[{
    desc:"Telefono1",
    precio: 1000
},
{
    desc:"Telefono2",
    precio: 1000
},
{
    desc:"Telefono3",
    precio: 1000
},
];

const[total, iva] = calcularIVA2(carrito);
console.log(`Total3: ${total}`);
console.log(`IVA3: ${iva}`);

   







