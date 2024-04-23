// File index.tsx for SimulatorBox 

import  { useState } from 'react'

export interface SimulatorContent {
    title: string,

}

export default function SimulatorBox() {

    const [_data, _setData] = useState(null as null | SimulatorContent)

 

  return (
    <>
    <label>Simulador de vendas mpays</label>
    <label>Veja quanto você recebe nas vendas no crédito, débito e parcelado.
</label>

<div>
        <div>
            <label >Valor</label>
            <input type="text" placeholder='R$ 1000.00' />
            <label >Forma de Pagamento</label>
            <input type="text" placeholder='Crédito a Vista' />
        </div>


        <div>
            <label>Você Recebe</label>
            <label >NA HORA   Não disponível {}</label>
            <label >EM 20 DIAS  R$ 949,70 {}</label>
            <label >EM 30 DIAS  R$ 959,70{}</label>
            <label> Todas as informações usam as taxas informadas no site</label>
        </div>

</div>


    </>
  )
}
