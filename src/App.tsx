import GlowCursor from './components/GlowCursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Clients from './components/Clients'
import Approach from './components/Approach'
import Reforma from './components/Reforma'
import Plan from './components/Plan'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <GlowCursor />
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>
      <main>
        <Hero />
        <Products />
        <Clients />
        <Approach />
        <Reforma />
        <Plan />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
