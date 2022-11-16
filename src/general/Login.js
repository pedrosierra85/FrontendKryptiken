import loginServicios from "../servicios/loginServicios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EstadoLogin from "../enums/EstadoLogin";
//import { ContextoUsuario } from "../general/ContextoUsuario";



const Login = () => {


  const navigateTo = useNavigate();    
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ mensaje, setMensaje ] = useState("");
  const [ recordar, setRecordar ] = useState(false);
  //const { usuario, setUsuario} = useContext(ContextoUsuario);

  const crearSesion = (datosPerfil) => {
      sessionStorage.setItem("nombres", datosPerfil.email);
      sessionStorage.setItem("estadologin", datosPerfil.EstadoLogin);
    //  setUsuario(datosPerfil);
  }

  const validar = async (event) => {
      event.preventDefault();
      try {
          const credenciales = { // creo objeto credenciales y guardo email y password
              email: email,
              password: password
          };
          const result = await loginServicios.Login(credenciales); // llamo el metodo login servicio
          console.log(result);
          const datosPerfil = {
              email: result.data.email,
              estadologin: result.data.es_admin ? EstadoLogin.ADMIN : EstadoLogin.CLIENTE
          }
          crearSesion(datosPerfil);
          if (datosPerfil.estadologin === EstadoLogin.ADMIN) {
              navigateTo("/Administrador");
          }
          else {
              navigateTo("/");
          }
      } catch (error) {
          if(error.response.status === 401) {
              setMensaje(error.response.data);
          }
      }
  }

  const cambiarEmail = (event) => {
      setEmail(event.target.value);
      setMensaje("");
  }

  const cambiarPassword = (event) => {
      setPassword(event.target.value);
      setMensaje("");
  }

  const cambiarRecordar = (event) => {
      setRecordar(event.target.checked);
  }

    return (



      <form onSubmit={validar} className="card shadow w-100 m-auto" style={{ maxWidth: "600px",  padding: "15px"}}>
            <h3 className="h3 mb-3">Ingresar</h3>
            <div><br></br></div>
      <div className="row mb-2">
          <label htmlFor="email" className="form-control-sm col-3">Email</label>
          <div className="col-9">
              <input type="email" className="form-control form-control-sm col-8" onChange={cambiarEmail} value={email} id="email" name="email" placeholder="nombre@ejemplo.com" required/>
          </div>
      </div>
      <div className="row mb-2">
          <label htmlFor="password" className="form-control-sm col-3">Contraseña</label>
          <div className="col-9">
              <input type="password" className="form-control form-control-sm" onChange={cambiarPassword} value={password} id="password" name="password" placeholder="Contraseña" required/>
          </div>
      </div>
      <div className="checkbox mb-3">
          <label className="form-control-sm">
              <input className="" type="checkbox" onChange={cambiarRecordar} checked={recordar} /> Recordar contraseña
          </label>
      </div>
    <button className="btn btn-primary me-2" type="submit">Ingresar</button>
      <a href="/" className="btn btn-light me-2" type="submit">Cancelar</a> {mensaje}
  </form>
)
}





  export default Login;