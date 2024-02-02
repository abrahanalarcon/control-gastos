import { useState } from 'react'


import Header from './components/Header'


function App() {
 
//  definimos nuestro estado de presupuesto
   const[presupuesto,setPresupuesto] = useState(0);
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />

    </div>
  
  )
}

export default App
