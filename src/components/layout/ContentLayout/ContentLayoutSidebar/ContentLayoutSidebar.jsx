import {
  BiCart,
  BiHelpCircle,
  BiLock,
  BiLogOut,
  BiMessage,
  BiPackage,
  BiTrash,
  BiUser,
  BiWrench,
} from "react-icons/bi";
import "./ContentLayoutSidebar.css";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function ContentLayoutSidebar() {
  // const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  //   navigate("/WorkersRequestForm")
  // }
  return (
    // <div style={{ border: "5px solid red" }}>
      <div className="menu">
        <div className="menu--list">
          <div className="avatar">
            <RxAvatar className="avatar-icon" />
            <div className="avatar-name">
              <h3>Nom</h3>
              <h3>Prénom</h3>
            </div>
          </div>

          <Link to={"/workers_request_form"}>
            <span className="item">
              <BiWrench className="icon" />
              Demande d ouvriers
            </span>
          </Link>
          <Link to={"/materials_request_form"}>
            <span className="item">
            <BiPackage className="icon" />
              Demande de materiaux
            </span>
          </Link>
          
          <a href="#" className="item">
            <BiCart className="icon" />
            Achat de produits agricoles
          </a>
          <a href="#" className="item">
            <BiMessage className="icon" />
            Mes Demandes
          </a>

          <a href="#" className="item">
            <BiHelpCircle className="icon" />
            Help
          </a>
          <a href="#" className="item">
            <BiUser className="icon" />
            Mon profil
          </a>
          <a href="#" className="item">
            <BiLock className="icon" />
            Modifier mon mot de passe
          </a>
          <a href="#" className="item">
            <BiLogOut className="icon" />
            Se deconnecter
          </a>
          <a href="#" className="item">
            <BiTrash className="icon" />
            Supprimer mon compte
          </a>
        </div>
      </div>
  );
}
