import { ArrowRight, ShieldCheck, TrendingUp, Calculator } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { reforma } from '@/data/site'

const icons: LucideIcon[] = [ShieldCheck, TrendingUp, Calculator]

export default function Reforma() {
  return (
    <section id="reforma" className="section relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="container">
        <div className="glass rounded-2xl p-8 md:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{reforma.eyebrow}</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              {reforma.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{reforma.description}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reforma.highlights.map((h, i) => {
              const Icon = icons[i] ?? ShieldCheck
              return (
                <div key={h.title} className="rounded-lg border border-white/8 bg-white/[0.03] p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/12 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <a href="#planos" className="btn-primary">
              Ver planos e teste de 14 dias
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
