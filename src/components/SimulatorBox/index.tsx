// File index.tsx for SimulatorBox 

import  { useState } from 'react';
import './index.css'

export interface SimulatorContent {
    title: string,

}

export default function SimulatorBox() {

    const [_data, _setData] = useState(null as null | SimulatorContent)

 

  return (
    <>
    <div className='simulatorbox'>
    

    <div>

        <label className='simulatorbox-title'>Simulador de vendas mpays</label>
        <br /><br />
        <label className='simulatorbox-subtitle'>Veja quanto você recebe nas vendas no crédito, débito e parcelado</label>

    </div>

<div  className="simulatorbox-container">
        <div className="simulatorbox-content">
            <label >Valor</label>
            
            <input type="text" placeholder='R$ 1000.00' />
            <br />
            <label >Forma de Pagamento</label>
            
            <input type="text" placeholder='Crédito a Vista' />
        </div>


        <div>
            <label>Você Recebe</label>
            <br />
            <label >NA HORA   Não disponível {}</label>
            <br />
            <label >EM 20 DIAS  R$ 949,70 {}</label>
            <br />
            <label >EM 30 DIAS  R$ 959,70{}</label>
            <br />
            <label> Todas as informações usam as taxas informadas no site</label>
        </div>

</div>

</div>
    </>
  )
}
