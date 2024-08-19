import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Features from "./components/Features/Features"
import Services from "./components/Services/Services"
import CallToAction from "./components/CallToAction/CallToAction"
import Quote from "./components/Quote/Quote"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Features/>
      <Quote/>
      <Services/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default App
