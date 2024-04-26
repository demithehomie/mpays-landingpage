import { useState } from 'react';
import './index.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function CustomForm() {


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="custom-card">
      <form className="custom-form">
        <div className="form-group">
          <label htmlFor="nome">Nome e Sobrenome *</label>
          <input type="text" id="nome" placeholder="Digite seu nome" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" placeholder="Digite seu telefone" />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="senha"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button type="submit" className="custom-button">Enviar</button>
      </form>
    </div>
  );
}
