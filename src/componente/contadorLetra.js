  import  {useState} from 'react';




const Contadorletra = () => {

  /*  const abecedario = [];*/  


  const [letrasAzar, setletrasAzar] = useState (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);




  const funcionLetra = () =>  {

  for (let i = 0; i < setletrasAzar; i++) {
  let letra = Math.floor(Math.ramdom (setletrasAzar)*27);
  console.log(letra);
  
    }}; 


  return (
   
  <div>
    <h2>Bienvenidos a las letras al azar de react</h2>
    <button onClick={funcionLetra}>letra al azar</button>;
    
  </div>

  )



}

 export default Contadorletra;