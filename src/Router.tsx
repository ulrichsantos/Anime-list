import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import { Infos } from './pages/Infos'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/infos/:mal_id' element={<Infos />} />
    </Routes>
  )
}