import './App.css';
import React, { useState, useEffect} from 'react'




function App() {

   const [products, setProudcts] = useState()

  const fetchProudcts = async () => {
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/characters")
    const data = await res.json();
         console.log(data)
         setProudcts(data);
}
  
    
    useEffect(() =>{
      fetchProudcts();
    }, [])


 

  
  return (
    <div>
     <div>
        {
          products ? products.map((e) => 
           <div className='data'> 

          <img src={e.image} alt="loho"/>
          <p>{e.nickname}</p>
          <p>{e.fullnamename} <br />
           <br />
          
          
          {e.hogwartsHouse}  <br />
          
          {e.interpretedBy}
           <br />
          {e.birthdate}
         </p>

         

          </div>


          ) : <h1>no data</h1>

          
        

        }
        

    
        
      
    
          
     </div>
    </div>
  );
}




export default App;
