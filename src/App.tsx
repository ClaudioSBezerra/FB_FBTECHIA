import RebrandNotice from './components/RebrandNotice'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Approach from './components/Approach'
import Reforma from './components/Reforma'
import Plan from './components/Plan'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Faixa e header viajam juntos num só container fixo — se o header
          fosse fixo sozinho, ele cobriria a faixa de rebranding. */}
      <div className="fixed inset-x-0 top-0 z-50">
        <RebrandNotice />
        <Header />
      </div>
      <main>
        <Hero />
        <Products />
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
