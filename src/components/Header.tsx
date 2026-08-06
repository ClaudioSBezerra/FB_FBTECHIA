import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav } from '@/data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'border-b border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contato" className="btn-primary !px-5 !py-2.5 text-sm">
            Falar com especialista
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-white/10 lg:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Navegação mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full text-sm"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
