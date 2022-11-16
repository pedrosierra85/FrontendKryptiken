//const clientes=[  estos se hace para cunado no se tiene la informacion disponible en el bakend
// //*{
//     nombre:"edgar prada",
//     cedula:91541,
//     direccion:"calle44",
//     ciudad:"bucaramanga",
//     barrio:"camopohermoso",
//     telefono:6545555,
//     celular:3197899890,
//     mail:"edgar pagra hotmal,com",
//     password:"******"
// },
// {
//     nombre:"peter sierra",
//     cedula:915,
//     direccion:"calle44",
//     ciudad:"bucaramanga",
//     barrio:"camopohermoso",
//     telefono:6545555,
//     celular:3197899890,
//     mail:"sierrahotmal,com",
//     password:"******"
// }

// ]
import axios from "axios";
const ClienteServicios={}; 

// se debe colocar para que en 2 segundo muestre en pantalla pero no tengo claro para que si es por error de la app al cargar y toca ponerlo a esperar
ClienteServicios.listadoClientes=()=>{
 return axios.get("http://localhost:5000/clientes");

    // return new Promise((resolve, reject)=>{ time que usamos en el pasado para q se detuviera 2 segundos
    //             setTimeout(()=>{
    //                 resolve(clientes);
    //             },2000);
    // })
    //return []; para ver si esta tomando el  listado vacio

}
ClienteServicios.buscarClientes=(criterio)=>{
    return axios.get("http://localhost:5000/clientes?q="+criterio);
}

ClienteServicios.buscarCliente=(id)=>{
    return axios.get("http://localhost:5000/clientes/"+id);
}

ClienteServicios.guardarCliente =(cliente)=>{
    return axios.post("http://localhost:5000/clientes",cliente);
}

ClienteServicios.guardarCliente =(cliente)=>{
    return axios.post("http://localhost:5000/clientes",cliente);
}

ClienteServicios.modificarCliente =(id, cliente)=>{
    return axios.put("http://localhost:5000/clientes/"+id, cliente);
}

ClienteServicios.borrarCliente =(id)=>{
    return axios.delete("http://localhost:5000/clientes/"+id);
}

ClienteServicios.guardarTicket =(cliente)=>{
    return axios.post("http://localhost:5000/clientes",cliente);
}

export default ClienteServicios;
