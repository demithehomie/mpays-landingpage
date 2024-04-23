
import Header from '../../components/Header';
import './index.css'
import notebook from  './../../assets/images/PixelBookGo.png'
import { Carousel, CarouselItem } from '../../components/Carousel';
import one from '../../assets/images/carrosel1/1.png'
import two from '../../assets/images/carrosel1/2.png'
import three from '../../assets/images/carrosel1/3.png'
import four from '../../assets/images/carrosel1/4.png'
import SimulatorBox from '../../components/SimulatorBox';
import ReviewCard from '../../components/ReviewCard';
import FormBox from '../../components/FormBox';
import Footer from '../../components/Footer';



export default function LandingPage() {


   const  images: CarouselItem[] = [
            { text: 'Primeiro item', imageSrc: one },
            { text: 'Segundo item', imageSrc: two },
            { text: 'Terceiro item', imageSrc: three },
            { text: 'Terceiro item', imageSrc: four },
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



<div>
    <label >Depoimentos</label>
    <label >O suporte ao cliente é nossa primeira prioridade.</label>
</div>

<div>
    <ReviewCard image={''} text={''} smallImage={''} name={''} saying={''}/>
    <ReviewCard image={''} text={''} smallImage={''} name={''} saying={''}/>
    <ReviewCard image={''} text={''} smallImage={''} name={''} saying={''}/>
</div>

</div>

<FormBox/>

<Footer/>
   
    </>
  )
}
