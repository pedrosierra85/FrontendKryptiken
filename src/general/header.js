const Header = () => {
    return (
        <header className="p-3 text-bg-light">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-rigth mb-md-0">
                    <img src="/imagenes/logo.jpg" width="38" height="30" class="me-3" alt="Bootstrap"></img>
                        
                        <li><p href="" className="lead">Kryptiken</p></li>
                           
                        
                    </ul>            

                    <div className="text-end">
                        
                        <a href="/" type="button" className="btn btn-warning me-2">Home</a>
                        <a href="/contacto" type="button" className="btn btn-warning me-2">Contactenos</a>
                        <a href="/login" type="button" className="btn btn-warning me-2">Login</a>
                        
                    </div>
                </div>
            </div>
        </header>


    );



}
export default Header;