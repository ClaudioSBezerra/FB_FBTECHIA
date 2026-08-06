import {
  BarChartBig,
  Boxes,
  Calculator,
  Check,
  ExternalLink,
  FileCheck2,
  Gauge,
  Receipt,
  Settings,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { platform, products, type Product } from '@/data/site'

const icons: Record<Product['icon'], LucideIcon> = {
  receipt: Receipt,
  gauge: Gauge,
  boxes: Boxes,
  chartPie: BarChartBig,
  fileCheck: FileCheck2,
  calculator: Calculator,
  settings: Settings,
}

const statusStyles: Record<Product['status'], string> = {
  'Em produção': 'bg-success/15 text-success border-success/25',
  'Em desenvolvimento': 'bg-warning/15 text-warning border-warning/25',
  Piloto: 'bg-accent/15 text-accent border-accent/25',
}

export default function Products() {
  return (
    <section id="solucoes" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Soluções</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
            Plataformas que já rodam em <span className="text-gradient">operação real</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada módulo nasceu de um problema concreto de cliente. Nenhum deles é protótipo de
            vitrine. Todos rodam sobre a{' '}
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-opacity hover:opacity-80"
            >
              plataforma {platform.name}
            </a>
            , com login único por empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = icons[p.icon]
            return (
              <article
                key={p.name}
                className={
                  p.subtle
                    ? 'glass glass-hover relative flex flex-col justify-center rounded-lg border-dashed p-7'
                    : 'glass glass-hover relative flex flex-col rounded-lg p-7'
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={
                      p.subtle
                        ? 'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-muted-foreground'
                        : 'inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/12 text-primary'
                    }
                  >
                    <Icon size={p.subtle ? 18 : 22} aria-hidden="true" />
                  </span>
                  {!p.subtle && (
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  )}
                </div>

                <h3 className={p.subtle ? 'mt-4 text-base font-bold' : 'mt-5 text-xl font-bold'}>
                  {p.name}
                </h3>
                <p
                  className={
                    p.subtle
                      ? 'mt-1 text-xs font-medium text-muted-foreground'
                      : 'mt-1 text-sm font-medium text-primary'
                  }
                >
                  {p.tagline}
                </p>
                <p
                  className={
                    p.subtle
                      ? 'mt-3 text-xs leading-relaxed text-muted-foreground'
                      : 'mt-4 text-sm leading-relaxed text-muted-foreground'
                  }
                >
                  {p.description}
                </p>

                {p.bullets.length > 0 && (
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stretch-link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    {p.subtle ? 'Abrir painel' : 'Acessar módulo'}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
