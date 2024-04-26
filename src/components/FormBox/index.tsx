// File index.tsx for FormBox 
import './index.css'

import Form from '../Form'

export default function FormBox() {
  return (
    <>
    <div className='main-container-form-box'>

    <div className='create-your-account'>
        <label className='cya-1' >Crie Sua Conta</label>
        <label className='cya-2'>Preencha o formulário ao lado para cadastrar-se no mpays.</label>
    </div>
    
    <Form/>


    </div>


    
    </>
  )
}
