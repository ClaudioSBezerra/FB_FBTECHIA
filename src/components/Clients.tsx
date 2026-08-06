import { Check, ExternalLink } from 'lucide-react'
import { clients, clientsSection } from '@/data/site'

export default function Clients() {
  return (
    <section id="clientes" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{clientsSection.eyebrow}</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
            {clientsSection.title}{' '}
            <span className="text-gradient">{clientsSection.titleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{clientsSection.description}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {clients.map((c) => (
            <article key={c.name} className="glass glass-hover relative flex flex-col rounded-lg p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.domain}</p>
                </div>
                <span className="shrink-0 rounded-full border border-primary/25 bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  {c.scopeLabel}
                </span>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {c.solutions.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm text-foreground/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stretch-link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
              >
                Visitar site
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
