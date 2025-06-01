import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}


export default App
