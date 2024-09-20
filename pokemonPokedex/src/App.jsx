
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
      <>
        <h1><Link to = '/'>Pokedex</Link></h1>
        <CustomRoutes/>
      </>
  )
}

export default App
