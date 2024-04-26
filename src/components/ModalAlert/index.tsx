// File index.tsx for ModalAlert 
import React from 'react'
import './index.css'

export interface Alert {
    id: number;
    type: 'success' | 'error' | 'warning';
    message: string;
}

export interface AlertProps {
    alerts: Alert[];
}

export interface AlertContextType {
    alerts: Alert[];
    addAlert: (alert: Alert) => void;
    removeAlert: (id: number) => void;
    clearAlerts: () => void;
}


export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );
  
  const ModalAlert: React.FC = () => {


    // const [showModal, setShowModal] = useState(false);

    // const toggleModal = () => {
    //     setShowModal(!showModal);
    //    // navigate('/private-area');
    //   };


    return (
      <>
        <div className="card">
          <div className="card-header">
            <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/c646651faf6f4f7f30398aab2c5e1dcb49868f45a70c4df071d6d270a1b46c4b?apiKey=7e431bddca7648dbb1897e058f4413a5&"  alt="" className="logo" />
            <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8cc60a03233d4b09e5e4867ea711f3a9ce7c1d172bae312e50ef3be793d8d36?apiKey=7e431bddca7648dbb1897e058f4413a5&" alt="" className="logo-text" />
          </div>
          <div className="card-body">
            {/* <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3bc83d266915ba28e30d4e5527d5ab9013baa98e6aa7809baa716a21df76324?apiKey=7e431bddca7648dbb1897e058f4413a5&" alt="" className="background-image" /> */}
            <p className="description">
              Finalize seu cadastro na plataforma e acesse seu e-mail para validação.
            </p>
            <div className="card-footer">
              <div className="footer-content">
                {/* <div className="image-column">
                  <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/774d4e07bc7642ee98be2acc7209c7fa032d92e4f4bafa7a2d066652bd84b370?apiKey=7e431bddca7648dbb1897e058f4413a5&" alt="" className="footer-image" />
                </div> */}
               

               <center>

               <div className="button-column" style={{ width: "50%" }}>
                  <button className="access-button">Acessar plataforma</button>
                </div>

               </center>
                
            

          
           
              </div>
            </div>
          </div>
        </div>
  
    
      </>
    );
  };
  
  export default ModalAlert;
