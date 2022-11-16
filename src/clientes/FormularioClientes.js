import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClienteServicios from "../servicios/ClienteServicios";
const FormularioClientes = () => {
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
                if(id == null){
                await ClienteServicios.guardarCliente(cliente);
                navegacion("/login");
                }else{
                    await ClienteServicios.modificarCliente(id,cliente);
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
                if (respuesta.data != null) {
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

                }
                setTitulo("Editar ")
            }else{
                setTitulo("Registrar ")
            }
        } catch (error) {
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
        <div className="container mt-3">
            <h3>{titulo}Registro de Clientes</h3>
            <form className="container" action="">
                <div className="cola-4">
                    <label htmlFor="nombre_completo">Nombre Completo *</label>
                    <input className="form-control form-control-sm" type="text" onChange={cambiarnombre_completo} value={nombre_completo} name="nombre_completo" id="nombre_completo" placeholder="ingresa tu nombre completo" required />
                </div>

                <div className="cola-4">
                    <label htmlFor="cedula">Numero cedula *</label> 
                    <input className="form-control form-control-sm" type="number" onChange={cambiarcedula} readOnly={id!=null ? true:false} value={cedula} name="cedula" id="cedula" placeholder="ingresa numero de cedula sin puntos" required />
                </div>
                <div className="cola-4">
                    <label htmlFor="direccion">Direccion</label>
                    <input className="form-control form-control-sm" type="text" onChange={cambiardireccion} value={direccion} name="direccion" id="direccion" placeholder="ingresa direccion" />
                </div>
                <div className="cola-4">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input className="form-control form-control-sm" type="text" onChange={cambiarciudad} value={ciudad} name="ciudad" id="ciudad" placeholder="ingresa ciudad" required />
                </div>
                <div className="cola-4">
                    <label htmlFor="barrio">Barrio</label>
                    <input className="form-control form-control-sm" type="text" onChange={cambiarbarrio} value={barrio} name="barrio" id="barrio" placeholder="ingresa barrio" required />
                </div>
                <div className="cola-4">
                    <label htmlFor="telefono">Telefono</label>
                    <input className="form-control form-control-sm" type="number" onChange={cambiartelefono} value={telefono} name="telefono" id="telefono" placeholder="ingresa telefono fijo" required />
                </div>
                <div className="cola-4">
                    <label htmlFor="celular">Celular</label>
                    <input className="form-control form-control-sm" type="number" onChange={cambiarcelular} value={celular} name="celular" id="celular" placeholder="ingresa numero celular" required />
                </div>
                <div className="cola-4">
                    <label htmlFor="email">Email *</label>
                    <input className="form-control form-control-sm" type="text" onChange={cambiaremail} value={email} name="email" id="email" placeholder="ingresa email " required />
                </div>
                <div className="cola-4">
                    <label htmlFor="password">Password</label>
                    <input className="form-control form-control-sm" type="password" onChange={cambiarpasswor} value={password} name="password" id="password" placeholder="digite el password" required />
                </div>
                <div className="cola-4">
                    <label htmlFor="passwordc">Confirmacion Password</label>
                    <input className="form-control form-control-sm" type="password" onChange={cambiarpassworc} value={passwordc} name="passwordc" id="passwordc" placeholder="escriba de nuevo el password" required />
                </div>
                <div className="mt-4">
                    <button onClick={guardarCliente} type="button" className="btn btn-success me-2">Guardar</button>
                    <a href="/" type="button" className="btn btn-danger">Cancelar</a>
                    <div id="mensaje">{mensaje}</div>

                </div>
            </form>
        </div>
    );
}

export default FormularioClientes;
