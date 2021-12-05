import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Hola profesor ¿Como va todo?</h1>
        </div>
        <div className="body">
          <p>La siguiente ventana trata de un hook de react, permite el despliegue de un componente a forma de una ventana.

              Estaría muy agradecido si me subes la calificación a 10 dando en el boton de continuar 🙏 estaría bastante agradecido.
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancelar
          </button>
          <button onClick={(e) => {
              e.preventDefault();
              window.location.href="http://micampus.unir.net"
          }}>Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;