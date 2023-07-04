import NavBar from './Componentes/navBar/NavBar'
import PainelCentral from './Componentes/Painel Central/PainelCentral';
import "./App.css" 

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <main>
        <PainelCentral/>
      </main>
    </div >
  )

};

export default App;