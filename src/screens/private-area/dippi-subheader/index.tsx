import { useState } from 'react';
import { FaHome, FaUser, FaCogs, FaSignOutAlt, FaBell, FaChevronDown } from 'react-icons/fa';

const DippiSubheader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="container d-flex align-items-center">
  

        {/* Botões */}
        <nav className="d-flex">
          <button className="btn btn-primary">
            <FaHome className="mr-1" /> Início
          </button>
          <button className="btn btn-light mr-2">
            <FaUser className="mr-1" /> Perfil
          </button>
          <button className="btn btn-light mr-2">
            <FaCogs className="mr-1" /> Configurações
          </button>
          <button className="btn btn-light mr-2">
            <FaSignOutAlt className="mr-1" /> Sair
          </button>
          <button className="btn btn-light mr-2">
            <FaBell className="mr-1" /> Notificações
          </button>
          <button className="btn btn-dropdown" onClick={handleDropdownToggle}>
            Mais Opções <FaChevronDown className="ml-1" />
          </button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="#">Opção 1</a>
              </li>
              <li>
                <a href="#">Opção 2</a>
              </li>
              <li>
                <a href="#">Opção 3</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default DippiSubheader;
