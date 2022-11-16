const ListadoEmpleados = () => {
    return (
        <div className="container">
            <h3 className="mt-3">Empleados</h3> 
                    <div className="text-end">                  
                               <a href="/Administrador" type="button" className="btn btn-warning me-2">Volver</a>                        
                    </div>
            <table className="table table-sm container">
                <thead>
                    <tr>
                        <td>nombre_completo</td>
                        <td>cedula</td>
                        <td>direccion</td>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pedro sierra</td>
                        <td>91541</td>
                        <td>calle44</td>
                       
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListadoEmpleados;