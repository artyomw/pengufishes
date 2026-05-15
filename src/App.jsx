import { Fishs } from './components/Blocks/Fishs'
import { Routes, Route } from 'react-router-dom'
import { Fish } from './components/UI/Fish'
import { Layout } from './components/Layout/Layout'
function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Fishs />} />
        <Route path='/fish/:name' element={<Fish />} />
      </Routes>
    </Layout>
  )
}

export default App
