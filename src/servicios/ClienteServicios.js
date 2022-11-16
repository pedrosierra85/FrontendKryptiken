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
 return axios.get("https://krypticket.herokuapp.com/");

    // return new Promise((resolve, reject)=>{ time que usamos en el pasado para q se detuviera 2 segundos
    //             setTimeout(()=>{
    //                 resolve(clientes);
    //             },2000);
    // })
    //return []; para ver si esta tomando el  listado vacio

}
ClienteServicios.buscarClientes=(criterio)=>{
    return axios.get("https://krypticket.herokuapp.com/?q="+criterio);
}

ClienteServicios.buscarCliente=(id)=>{
    return axios.get("https://krypticket.herokuapp.com/"+id);
}

ClienteServicios.guardarCliente =(cliente)=>{
    return axios.post("https://krypticket.herokuapp.com/",cliente);
}

ClienteServicios.guardarCliente =(cliente)=>{
    return axios.post("https://krypticket.herokuapp.com/",cliente);
}

ClienteServicios.modificarCliente =(id, cliente)=>{
    return axios.put("https://krypticket.herokuapp.com/"+id, cliente);
}

ClienteServicios.borrarCliente =(id)=>{
    return axios.delete("https://krypticket.herokuapp.com/"+id);
}

ClienteServicios.guardarTicket =(cliente)=>{
    return axios.post("https://krypticket.herokuapp.com/",cliente);
}

export default ClienteServicios;
