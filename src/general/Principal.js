import { useState } from "react"; // se usa para un estado general de la pagina, es un hub las varoables se declaran con usestate

const Principal =() => {
    const [valor, setValor] =useState(0);
    const sumar=()=>{
        setValor=(valor + 1);
        console.log(valor);
    }
return(
    
 

<div>




{/* <div className="d-grid gap-5 col-3 mx-auto" >

      <br></br>

  <iframe className="embed-responsive embed-responsive-16by9"  src="/imagenes/Kryptike.mp4" allowfullscreen></iframe>
</div> */}
<br></br>
<div className="d-grid gap-5 col-3 mx-auto embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src="/imagenes/Kryptike.mp4" allowfullscreen></iframe>
</div>

<div className="d-grid gap-2 col-6 mx-auto sticky-top">
  <div className="hero-container aling-center">
    <div className="content-hero aling-center">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Bienvenidos.</h1>
      <div className="text-box">
        <p className="animate-text aling-center" id="animate-text">En esta pagina tendra la posibilidad de gestionar sus solicitudes y hacer seguimiento con su numero de ticke.</p>
      </div>
      <a className="link-to-oficial-page aling-center" href="/clientes/FormularioClientes">Registrate Aqui</a>
    </div>
  </div>
</div>


</div>
)


}

export default Principal;