import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClienteServicios from "../servicios/ClienteServicios";
const FormularioTicket = () => {
    const { id } = useParams();
    const navegacion = useNavigate()

    const [nombre_completo, setnombre_completo] = useState("");
    const [cedula, setCedula] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [barrio, setBarrio] = useState("");
    const [telefono, setTelefono] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordc, setPasswordc] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [titulo, setTitulo] = useState("");

    //metodo guardar
    const guardarCliente = async (event) => {
        event.preventDefault();


        if (password === passwordc) {
            try {
                //ahora armo el objeto
                const cliente = {
                    nombre_completo: nombre_completo,
                    cedula: cedula,
                    direccion: direccion,
                    ciudad: ciudad,
                    barrio: barrio,
                    telefono: telefono,
                    celular: celular,
                    email: email,
                    password: password,
                    passwordc: passwordc
                }
                console.log(cliente);
                if (id == null) {
                    await ClienteServicios.guardarCliente(cliente);
                    navegacion("/login");
                } else {
                    await ClienteServicios.modificarCliente(id, cliente);
                    navegacion("/clientes");
                }


            } catch (cliente) {
                setMensaje("Error al guardar" + cliente);
            }
        } else {
            setMensaje("las contraseñas no coinciden, Digitala nuevamente");
        }
    }

    const cargarCliente = async () => {
        try {
            if (id != null) {
                const respuesta = await ClienteServicios.buscarCliente(id);
                
                    console.log(respuesta.data)
                    setnombre_completo(respuesta.data.nombre_completo);
                    setCedula(respuesta.data.cedula);
                    setDireccion(respuesta.data.direccion);
                    setCiudad(respuesta.data.ciudad);
                    setBarrio(respuesta.data.barrio);
                    setTelefono(respuesta.data.telefono);
                    setCelular(respuesta.data.celular);
                    setEmail(respuesta.data.email);
                    setPassword(respuesta.data.password);
                    setPasswordc(respuesta.data.password); // se deja password para q llene ambas con el mismo no con la confirmacion

           
            
             }} catch (error) {
            console.log("ocurrio un error");
        }

    }
    useEffect(() => {
        cargarCliente();
    }, [])

    const cambiarnombre_completo = (event) => {
        setnombre_completo(event.target.value);
    }
    const cambiarcedula = (event) => {
        setCedula(event.target.value);
    }
    const cambiardireccion = (event) => {
        setDireccion(event.target.value);
    }
    const cambiarciudad = (event) => {
        setCiudad(event.target.value);
    }
    const cambiarbarrio = (event) => {
        setBarrio(event.target.value);
    }
    const cambiartelefono = (event) => {
        setTelefono(event.target.value);
    }
    const cambiarcelular = (event) => {
        setCelular(event.target.value);
    }
    const cambiaremail = (event) => {
        setEmail(event.target.value);
    }
    const cambiarpasswor = (event) => {
        setPassword(event.target.value);
    }
    const cambiarpassworc = (event) => {
        setPasswordc(event.target.value);
    }
    return (


        <div className="container col-lg-8">
                <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex"></div>
                <h3>{titulo}Registra tu Solicitud</h3>
                <form className="container" action="">
                    <div className="container cola-4">
                        <label htmlFor="nombre_completo">Nombre Completo *</label>
                        <input className="form-control form-control-sm" type="text" onChange={cambiarnombre_completo} value={nombre_completo} name="nombre_completo" id="nombre_completo" placeholder="ingresa tu nombre completo" required />
                    </div>

                    <div className="container cola-4">
                        <label htmlFor="cedula">Numero cedula *</label>
                        <input className="form-control form-control-sm" type="number" onChange={cambiarcedula} readOnly={id != null ? true : false} value={cedula} name="cedula" id="cedula" placeholder="ingresa numero de cedula sin puntos" required />
                    </div>
                    <div className="container cola-4">
                        <label htmlFor="direccion">Direccion</label>
                        <input className="form-control form-control-sm" type="text" onChange={cambiardireccion} value={direccion} name="direccion" id="direccion" placeholder="ingresa direccion" />
                    </div>
                    <div className="container cola-4">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input className="form-control form-control-sm" type="text" onChange={cambiarciudad} value={ciudad} name="ciudad" id="ciudad" placeholder="ingresa ciudad" required />
                    </div>
                    <div className="container cola-4">
                        <br></br>
                        <div class="input-group">
  <span class="input-group-text ">Descripcion de la Solicitud</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>

<div><br></br></div>
<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"></input>
  <label class="input-group-text" for="inputGroupFile02">Subir</label>
</div>
                </div>


                    <div className="mt-4">
                        <button onClick={guardarCliente} type="button" className="btn btn-success me-2">Guardar</button>
                        <a href="/" type="button" className="btn btn-danger">Cancelar</a>
                        <div id="mensaje">{mensaje}</div>

                    </div>
                </form>
            </div></div></div>
  
    );
}

export default FormularioTicket;
