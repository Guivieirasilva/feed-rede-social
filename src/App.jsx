import { BrowserRouter, Link } from 'react-router-dom'

import '../src/styles/App.css'
import { AppRoutes } from './Routes'

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to='/'>Meu feed</Link>
          <Link to='/most-viewed'>Mais Vistos</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
