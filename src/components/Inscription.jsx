import "../components/Inscription.css";
import { useNavigate } from "react-router-dom";

const Inscription = () => {

    const navigate = useNavigate();


  const handleSubmit = (e) => {
    // Annulation de l'action par défaut
    e.preventDefault();

    console.log("Form submitted");

    navigate('/dashboard')
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="mx-auto mt-10">
          <div className="text-3xl text-succes">
            <h2>Veuillez vous inscrire</h2>
          </div>
          <div className="form">
            <label htmlFor="">Nom</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form">
            <label htmlFor="">Prenom</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form">
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form">
            <label htmlFor="">Telephone</label>
            <input type="tel" className="form-control" required />
          </div>
          <div className="form">
            <label htmlFor="">Lieu de residence</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form">
            <label htmlFor="">Mot de passe</label>
            <input type="password" className="form-control" required />
          </div>
          <div>
            <button type="submit" className="btn btn-success btn-block mt-5">
              {" "}
              S {'&apos'} inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
