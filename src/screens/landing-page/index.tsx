
import Header from '../../components/Header';
import './index.css'
import notebook from  './../../assets/images/PixelBookGo.png'
import { Carousel, CarouselItem } from '../../components/Carousel';
import one from '../../assets/images/carrosel1/1.png'
import two from '../../assets/images/carrosel1/2.png'
import three from '../../assets/images/carrosel1/3.5.png'
import four from '../../assets/images/carrosel1/4.png'
import SimulatorBox from '../../components/SimulatorBox';
import ReviewCard from '../../components/ReviewCard';
import FormBox from '../../components/FormBox';
import Footer from '../../components/Footer';

import card1image from '../../assets/images/depoimentos/card1.png'
import card2image from '../../assets/images/depoimentos/card2.png'
import card31image from '../../assets/images/depoimentos/card3.png'

import quote from '../../assets/images/depoimentos/quote.png'


export default function LandingPage() {


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
                text: 'Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.', imageSrc: two 
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
                imageSrc: four 
            },
          ];

        //   const cardimages = [
        //             {
        //                 name: "First",
        //                 path: one
        //             }, 
        //             {
        //                 name: "First",
        //                 path: one
        //             }, 
        //             {
        //                 name: "First",
        //                 path: one
        //             }
        //         ]
        
  return (
    <>
        <div className="background background-image"></div>
            <Header/>


        <div className='tecnologia-container'>
            
            
            <div className='tecnologia-label-container'>

                
                    <label className='tecnologia'>Tecnologia e <br />  segurança pra <br /> você <strong> vender mais. </strong>
                    
                    <br />
                
               
                    </label>
                    <label className='tecnologia-little'>
                    Venda online com a segurança e tecnologia <br /> 
                    mpays. Soluções simples e flexíveis para <br />
                    digitalizar o seu negócio
                </label>
                
            
             
           
            </div>
            
            <img src={notebook} alt="pixelbookgo" className='notebook'/>
        </div>
        

        <Carousel items={images} />

        <SimulatorBox/>

<div>



<div className='reviews'>
    <label className='reviews-title'>Depoimentos</label>
    <label className='reviews-subtitle'>O suporte ao cliente é nossa primeira prioridade.</label>
</div>

<div className='review-cards-container'>
    
    <ReviewCard 
        image={card1image} 
        text={'A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado.'} 
        smallImage={quote} 
        name={'Carlos Eduardo Amaral'} 
        saying={'CEO da Amaral Mídia'}
    />

    <ReviewCard
         image={card2image} 
         text={'O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.”'} 
         smallImage={quote} 
         name={'Renato Laureano'} 
         saying={'Fundador da Anellimn Store'}
    />

    <ReviewCard 
        image={card31image} 
        text={'Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%'} 
        smallImage={quote} 
        name={'Armando Girão'} 
        saying={'Fundador da Orion E-commerce'}
    />

</div>

</div>

<FormBox/>

<Footer/>
   
    </>
  )
}
