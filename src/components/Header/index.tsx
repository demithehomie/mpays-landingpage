
import { useNavigate } from 'react-router-dom'
import logo from  './../../assets/images/Logo.png'

import './index.css'

export default function Header() {

    const navigate = useNavigate()
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
          <li><button className="entrar-btn" onClick={() => navigate('/private-area')}>Entrar</button></li>
        </ul>
      </nav>

      <div className="profile-icon">Perfil</div>

    </div>
   
   </>
  )
}
