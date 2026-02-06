// src/MaterialRequestForm.js
import { useState } from "react";
// import "./WorkersRequestForm.css";

const WorkersRequestForm = () => {
  const [formData, setFormData] = useState({
    country: "Togo",
    materialType: "",
    quantity: 1,
    workLocation: "",
    startDate: "",
    endDate: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container">
      <div>
        <h1>Demande de matériel</h1>
        <p>
          Merci de nous fournir les informations nécessaires pour faire votre
          demande de matériel.
        </p>
      </div>
      <div className="sider-3input-container">
        <div className="sider-3input">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="country">Pays commande</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner le pays</option>
                <option value="Togo">Togo</option>
                <option value="Ghana">Ghana</option>
                <option value="Bénin">Bénin</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Côte d'Ivoire">Côte dIvoire</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantité</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Du</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
        <div className="sider-3input">
          <div className="form-group">
            <label htmlFor="materialType">Type douvriers</label>
            <select
              id="materialType"
              name="materialType"
              value={formData.materialType}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner le type douvrier</option>
              <option value="Workers A">Ouvriers A</option>
              <option value="Workers B">Ouvriers B</option>
              <option value="Workers C">Ouvriers C</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="workLocation">Lieu de travail</label>
            <select
              id="workLocation"
              name="workLocation"
              value={formData.workLocation}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner le lieu de travail</option>
              <option value="Lomé">Lomé</option>
              <option value="Kara">Kara</option>
              <option value="Sokodé">Sokodé</option>
              <option value="Atakpamé">Atakpamé</option>
              <option value="Kpalimé">Kpalimé</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="endDate">Au</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="text-area">
        <div className="form-group">
          <label htmlFor="additionalInfo">Infos Sup</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default WorkersRequestForm;
