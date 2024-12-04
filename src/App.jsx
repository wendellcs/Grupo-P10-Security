import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import RoutesApp from "./services/route/routes.jsx"
import store from './services/redux/store.js'

import './assets/sass/_reset.sass'
function App() {
  useEffect(() => {
    document.title = 'Grupo P10 | Security'
  }, [])

  return (
    <Provider store = {store}>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </Provider>
  )
}

export default App
