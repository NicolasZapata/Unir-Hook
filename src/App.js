import unir from './unircol.png';
import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {

  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className="App">
      <img src={unir} className="App-logo" alt="logo" />
      <h1>Profe, presiona aquí... tengo algo que mostrarte!!</h1>
      <button 
        className="openModalBtn"
         onClick={() => { 
           setModalOpen(true)}}>Abrir</button>
      {modalOpen && <Modal setOpenModal={setModalOpen}/>}
    </div>
  );
}

export default App;
