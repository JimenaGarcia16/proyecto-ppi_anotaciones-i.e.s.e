import React from "react";
import "../css/menuprincipal.css";
import { Link } from "react-router-dom";

function Formulario() {
  return (
    <footer className="page-footer Inferior">
      <div className="text-center">
        <Link to="/MenuAcudiente" className="Regresar">
          Regresar
        </Link>
      </div>
    </footer>
  );
}
export default Formulario;
