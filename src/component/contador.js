import { useState } from "react";



const Contador = () => {
   
    const [numero, setNumero] = useState(0);
 
  const incrementar = () => {
      setNumero(numero+1);
      
          
  }

 const decrementar = () => {
    setNumero(numero-1);
    
 }


 return( 
  <div><h2>soy un contador</h2>
  <h3>{numero}</h3>
   <button onClick={incrementar}>sumar uno</button>
   <button onClick={decrementar}>restar uno</button>
  </div>
 )

}

export default Contador;