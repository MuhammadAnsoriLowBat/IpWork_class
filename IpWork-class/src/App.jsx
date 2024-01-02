import{Routes,Route} from 'react-router-dom'

import Navbar from './Components/NavbarCom'
import Footer from './Components/FooterCom'


import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import Testimonial from './pages/TestimonialPage'
import SyaratPage from './pages/SyaratPage'
import Faq from './pages/FaqPage'

function App() {
  return <div>
    <Navbar/>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='kelas' Component={KelasPage}/>
      <Route path='kelas' Component={KelasPage}/>
      <Route path='testimonial' Component={Testimonial}/>
      <Route path='syarat' Component={SyaratPage}/>
      <Route path='faq' Component={Faq}/>
    </Routes>
    <Footer/>
  </div>
}

export default App
