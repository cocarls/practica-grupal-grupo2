
import './App.css'
import CarlosCoronado from './components/CarlosCoronado'
import Cristian from './components/Cristian'
import Luis from './components/Luis'
import Rajhu from './components/Rajhu'

function App() {
  

  return (
    <main className='bg-black text-white min-h-screen text-xl grid justify-center'>
        <h1> PRACTICA GRUPAL</h1>
        <h3>integrantes:</h3>
        <CarlosCoronado />
        <Cristian />
        <Luis />
        <Rajhu />
    </main>
  )
}

export default App
