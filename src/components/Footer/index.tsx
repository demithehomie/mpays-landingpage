// File index.tsx for Footer 
import './index.css';

import visa from '../../assets/images/Visa.png'
import mastercard from '../../assets/images/Mastercard.png'
import americanexpress from '../../assets/images/American Express.png'
import hipercard from '../../assets/images/Hipercard.png'
import elo from '../../assets/images/Elo.png'
import banescard from '../../assets/images/Banescard.png'
import JCB from '../../assets/images/JCB.png'
import diners from '../../assets/images/Diners Club.png'
import pix from '../../assets/images/PIX.png'

export default function Footer() {
  return (
   <>

   <div>


    <div>

  

    <div className='footer-modules'>
        <div className='address'>
            <label>Endereço</label>
            <br /> <br />
            <label>
                R. dos Andradas, 1234 <br />
                Centro Histórico <br />
                Porto Alegre - RS <br />
                90020-008 <br />
            </label>
        </div>
       
        <div className='legal'>
            <label >Legal</label>
            <br /><br />
                    <label >
                    Termos de Uso
                    </label>
                    <br />
                    <label >
                    Politica de Privacidade
                    </label>
         </div>


    <div className='contact'>
        <label >Contato</label>
        <br /><br />
            <label >
            contato@mpays.com
            </label>
            <br />
            <label >
            (51) 98314.3325
            </label >
    </div>
    
    <div className='we-accept'>
        <div>
        <label >Aceitamos</label>
    <br /><br />
    <label >
        R. dos Andradas, 1234 <br />
        Centro Histórico <br />
        Porto Alegre - RS <br />
        90020-008 <br />
    </label>

        </div>
        
   


        <div className='cards-flags'>
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mc" />
            <img src={americanexpress} alt="ae" />
            <img src={hipercard} alt="hc" />
            <img src={elo} alt="elo" />
            <img src={banescard} alt="bc" />
            <img src={JCB} alt="jcb" />
            <img src={diners} alt="dine" />
            <img src={pix} alt="pix" />
        </div>
    </div>

       

    </div>

    </div>


    <div>

        <div>
            
            
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
            <label className='copyright'>Copyright @ 2022 mpays</label>
            <img src="" alt="" />

    </div>

   </div>
   
   <center>
    <label className="mpays-footer"> mpays é um produto da Multti Tecnologia e Integrações, empresa brasileira registrada no CNPJ nº 33.511.889/0001-20. A atividade de subcredenciamento é dispensada de autorização do Banco Central do Brasil, conforme termos da Circular nº 3.885/2018. Demais dispositivos aplicáveis, como o disposto nas Circulares nº 3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
        </label>
   </center>



   </>
  )
}
