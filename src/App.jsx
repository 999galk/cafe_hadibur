import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Story from './components/Story.jsx'
import Coffee from './components/Coffee.jsx'
import Press from './components/Press.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Story />
        <Coffee />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
