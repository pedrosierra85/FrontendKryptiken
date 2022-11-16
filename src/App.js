//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoClientes from "./clientes/ListadoClientes";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import FormularioClientes from "./clientes/FormularioClientes";
import Header from "./general/header";
import Principal from "./general/Principal";
import Login from "./general/Login";
import Administrador from "./servicios/Administrador";
import Usuarios from "./servicios/Usuarios";
import Contacto from "./general/Contacto";
import FormularioTicket from "./clientes/FormularioTicket";
//function App() { con esta se puede pero tambien se puede implmentar una funcion con la funcion flecha
  const App = () => {
  return (
    <div>
  <Header />  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal/>} exact></Route>
      <Route path="/login" element={<Login/>} exact></Route>
      <Route path="/clientes" element={<ListadoClientes/>} exact></Route>
      <Route path="/clientes/FormularioClientes" element={<FormularioClientes/>} exact></Route>
      <Route path="/clientes/FormularioClientes/:id" element={<FormularioClientes/>} exact></Route>
      <Route path="/empleados" element={<ListadoEmpleados/>} exact></Route>
      <Route path="/Administrador" element={<Administrador/>} exact></Route>
      <Route path="/Usuarios" element={<Usuarios/>} exact></Route>
      <Route path="/Contacto" element={<Contacto/>} exact></Route>
      <Route path="/clientes/FormularioTicket" element={<FormularioTicket/>} exact></Route>
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
