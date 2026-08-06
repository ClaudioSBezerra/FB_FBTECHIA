import Logo from './Logo'
import { contact, nav, products } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tecnologia e inteligência artificial para gestão fiscal, controladoria e operações.
              Antes {contact.formerName}.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contato
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {contact.phone} — WhatsApp
                </a>
              </li>
              <li>{contact.city}</li>
            </ul>

            <h2 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Plataformas
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {products
                .filter((p) => p.url)
                .map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6 text-center text-xs text-muted-foreground">
          © {year} {contact.legalName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
