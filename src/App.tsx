import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './routes/Home'
import DetailsPage from './routes/Details'

function App() {

  return (
    <div className='container'>
      <h1>News App</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:idx' element={<DetailsPage/>} />
      </Routes>
    </div>
  )
}

export default App
