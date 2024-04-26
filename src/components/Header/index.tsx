
//import { useNavigate } from 'react-router-dom'
import logo from  './../../assets/images/Logo.png'


import './index.css'
// import { useAlert } from '../../context/AlertContext';
// import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import ModalAlert from '../ModalAlert';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  // const { addAlert } = useAlert();

  // const handleClick = () => {
  //   addAlert({ id: 1, type: 'success', message: 'This is a success alert!' })
  // }

 //const navigate = useNavigate()

  const toggleModal = () => {
    setShowModal(!showModal);
   // navigate('/private-area');
  };

   


    // const handleClickToPrivateArea = () => {
    //   // handleClick()
    //   navigate('/private-area')
    // }

  return (
   <>
    <div className="header">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="menu">
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <ul>
          <li><a href="#">Soluções</a></li>
          <li><a href="#">Tarifas</a></li>
          <li><a href="#">Depoimentos</a></li>
          <li><a href="#">Cadastro</a></li>
          <li><a href="#">Contato</a></li>
          <li><button className="entrar-btn" onClick={toggleModal}>Entrar</button></li>
        </ul>
      </nav>

      <div className="profile-icon">Perfil</div>

    </div>


    {showModal && (
        <div className='overlay'>
          <div className='modal'>
            <ModalAlert />
          </div>
        </div>
      )}
   
   </>
  )
}
