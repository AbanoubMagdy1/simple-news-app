import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './routes/Home'

function App() {

  return (
    <div className='container'>
      <h1>News App</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
