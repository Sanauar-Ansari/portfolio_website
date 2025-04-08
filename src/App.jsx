import './App.css'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar/>
    <div id="hero">
    <Hero />
    </div>

    <div  id="about">
    <About/>
    </div>

    <div  id="experience">
    <Experience/>
    </div>

    <div  id="projects">
    <Projects/>
    </div>

    <div  id="contact">
    <Contact/>
    </div>
    {/* <Routes> */}

    {/* </Routes> */}
    {/* </BrowserRouter> */}
 
  
    </>
  )
}

export default App
