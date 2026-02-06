import { useNavigate } from "react-router-dom";

const HeaderBottom = () => {
  const navigate = useNavigate();

  return (
      <div className="header-inner">
        {/* Header Inner */}
        <div className="container">
          <div className="inner">
            <div className="row">
              {/* Logo */}
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="index.html" className="navbar-brand ms-lg-5">
                      <h1 className="m-0 display-4">
                        <span className="text-secondary">Agri</span>Hub
                      </h1>
                    </a>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="col-lg-7 col-md-9 col-12">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active"><a href="#">Accueil</a></li>
                      <li><a href="#about">À propos</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#">Blogs</a></li>
                      <li><a href="#tarifs">Tarifs</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Boutons */}
              <div className="col-lg-1 col-6">
                <div className="get-quote">
                  <button className="btn small-text" onClick={() => navigate("/inscription")}>
                    Sinscrire
                  </button>
                </div>
              </div>

              <div className="col-lg-1 col-6">
                <div className="get-quote">
                  <button className="btn small-text" onClick={() => navigate("/Connexion")}>
                    Se connecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeaderBottom;
