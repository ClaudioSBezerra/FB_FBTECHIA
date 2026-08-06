import { Check, ShieldCheck } from 'lucide-react'
import { plan } from '@/data/site'

export default function Plan() {
  return (
    <section id="planos" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{plan.eyebrow}</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">{plan.title}</h2>
          <p className="mt-4 text-muted-foreground">{plan.description}</p>
        </div>

        <div className="glass mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/8 p-8 md:border-b-0 md:border-r md:p-10">
              <p className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                {plan.pitch}{' '}
                <span className="text-gradient">{plan.pitchAccent}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {plan.pitchNote}
              </p>

              <a href={plan.cta.href} className="btn-primary mt-8 w-full">
                {plan.cta.label}
              </a>

              <div className="mt-8 flex gap-3 rounded-lg bg-success/8 p-4">
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-muted-foreground">{plan.guarantee}</p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                O que está incluso
              </h3>
              <ul className="mt-5 space-y-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check size={17} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
