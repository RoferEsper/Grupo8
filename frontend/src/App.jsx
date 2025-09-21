import HomePage from './pages/HomePage'
import { Home, cursos, estudiantes, inscripciones } from './routes/router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={Home} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App