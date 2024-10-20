import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./services/routes"

import './assets/sass/_reset.sass'
function App() {
  useEffect(() => {
    document.title = 'Grupo P10 | Security'
  }, [])

  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App
