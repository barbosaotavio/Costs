import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Company from './Components/Pages/Company'
import Contact from './Components/Pages/Contact'
import NewProject from './Components/Pages/NewProject'
import Projects from './Components/Pages/Projects'

import Container from './Components/layout/Container'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'

function App() {
return(
  <Router>
    <Navbar/>
   
    <Container customClass='min-height'>
  <Routes >
    <Route exact path= '/'element={<Home/>}/>
    <Route exact path= '/Projects'element={<Projects/>}/>
    <Route exact path= '/Company'element={<Company/>}/>
    <Route exact path='/Contact'element={<Contact/>}/>
    <Route exact path= '/NewProject'element={<NewProject/>}/>
  </Routes>

  </Container>
 <Footer/>
  </Router> 
)
}  

export default App
