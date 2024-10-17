import Home from "./pages/Home"
import './assets/sass/_reset.sass'
import { useEffect } from "react"
function App() {
  useEffect(() => {
    document.title = 'Grupo P10 | Security'
  }, [])
  // Fazer o sistema de rotas
  return (
      <>
        <Home/>
      </>

  )
}

export default App
