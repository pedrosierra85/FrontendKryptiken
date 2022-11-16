import axios from "axios";

const loginServicios = {}
const URL = "http://localhost:8080/Login/"; 
    
loginServicios.Login = (credenciales) => {
    return axios.post(URL, credenciales);
}

export default loginServicios;