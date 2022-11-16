import { useEffect, useState } from "react";
import Estados from "../enums/Estados";
import ClienteServicios from "../servicios/ClienteServicios";

const ListadoClientes = () => {
    const [listadoClientes, setListadoClientes] = useState([]);// todos estos son los useState
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");

    const cargarClientes = async () => { // funcion carga clientes en una lista
        try {
            const respuesta = await ClienteServicios.listadoClientes();
            console.log(respuesta.data); // cambie respuesta por respuesta.data
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            } else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.error);
        }
    }




    // creo metodo buscar clientes
    const buscarClientes = async (event) => {
        event.preventDefault();

        try {
            const respuesta = await ClienteServicios.buscarClientes(criterio);
            console.log(respuesta.data); // cambie respuesta por respuesta.data
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            } else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.error);
        }


    }
    //funcion confirmaciond e borrado en el modal
const confirmarBorrado =(id, nombre_completo) =>{
 // console.log(id+""+nombre_completo); para ver por sonsola si esta trayendo el ide y el nombre
 setIdBorrar(id);
 setNombreBorrar(nombre_completo)
}
//funcion borrar cliente
const borrarCliente = async () =>{  //cada vez qse coloca un metod de espera await se debe poner async
    try {
        await ClienteServicios.borrarCliente(idBorrar);
        cargarClientes();
    } catch (error) {
        
    }
  
}

    useEffect(() => { // esto es como un constructor sirve como para q esta actualizando y cargando nuevamente los clientes
        cargarClientes();
    }, [])

    //creo metodo cargar criterio
    const cambiarcriterio = (event) => {
        setCriterio(event.target.value);
    }
    return (
        <div className="container">
            <h3 className="mt-4">Clientes inscritos</h3>
            <div className="text-end">
                <a href="/Administrador" type="button" className="btn btn-warning me-2">Volver</a>
            </div>
            <form action="">
                <input type="text" value={criterio} onChange={cambiarcriterio} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={buscarClientes}>BUSCAR</button>
            </form>
            <table className="table table-striped table-hover container table-sm">
                <thead>
                    <tr>
                        <th>nombre_completo</th>
                        <th>cedula</th>
                      {/*   <th>direccion</th>
                        <th>ciudad</th>
                        <th>barrio</th>
                        <th>telefono</th>
                        <th>celular</th> */}
                        <th>email</th>
                        <th className="text-center">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //recomiendan no usar el if si no el operador ternario que realiza la misma funcion del if
                        estado === Estados.CARGANDO ?
                            (<tr><td>cargando....</td></tr>)
                            :
                            estado === Estados.error ?
                                (<tr><td>Ocurrio un error, intente mas tarde.</td></tr>)
                                :
                                estado === Estados.VACIO ?
                                    (<tr><td>No hay datos</td></tr>)
                                    :
                                    listadoClientes.map((cliente) => (
                                        <tr key={cliente._id}>
                                            <td>{cliente.nombre_completo}</td>
                                            <td>{cliente.cedula}</td>
                                          {/*   <td>{cliente.direccion}</td>
                                            <td>{cliente.ciudad}</td>
                                            <td>{cliente.barrio}</td>
                                            <td>{cliente.telefono}</td>
                                            <td>{cliente.celular}</td> */}
                                            <td>{cliente.email}</td>
                                            <td>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <a className="btn btn-warning me-2 float-md-right" href={"/clientes/FormularioClientes/" + cliente._id}>Editar</a>
                                                <button onClick={()=>{confirmarBorrado(cliente._id, cliente.nombre_completo)}} className="btn btn-danger me-2 btn-sm float-md-right" data-bs-toggle="modal" data-bs-target="#modalBorrado">Eliminar</button>
                                            </div>
                                            </td>
                                        </tr>
                                    ))}
                </tbody>
            </table>

            <div className="modal fade" id="modalBorrado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Esta seguro de borrar el cliente {nombreBorrar} ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-ligth" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarCliente} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListadoClientes;