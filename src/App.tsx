
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/landing-page'
import PrivateArea from './screens/private-area'
import { Carousel, CarouselItem } from './components/Carousel'

import one from '../src/assets/images/carrosel1/1.png'
import two from '../src/assets/images/carrosel1/2.png'
import three from '../src/assets/images/carrosel1/3.5.png'
import four from '../src/assets/images/carrosel1/4.png'
import ModalAlert from './components/ModalAlert'



function App() {

  const images: CarouselItem[] = [

    { 
        cta: 'Cadastre-Se', 
        title: 'Pagamentos com máxima aprovação', 
        text: 'Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível. ', 
        imageSrc: one 
    },
    { 
        cta: 'Saiba Mais', 
        title: 'Checkout de alta conversão', 
        text: 'Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.', imageSrc:  two 
    },
    { 
        cta: 'Cique e Conheça', 
        title: 'Controle total do seu fluxo financeiro', 
        text: 'Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!', 
        imageSrc: three 
    },
    { 
        cta: 'Aproveite', 
        title: 'Receba as vendas parceladas em até 2 dias úteis', 
        text: 'Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu! ', 
        imageSrc:  four 
    },
  ];



  return (
    <>

      <BrowserRouter>
   

        <Routes>

          <Route path="/" element={<LandingPage/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/carousel" element={<Carousel items={images} />}/>
          <Route path="/modal-alert" element={<ModalAlert/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>

        
        </Routes>
    
      </BrowserRouter>
  
     
    </>
  )
}

export default App
