import { ArrowRight } from 'lucide-react'
import { hero, stats } from '@/data/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Halos de cor que dão o "glow" do tema. aria-hidden: decorativo. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl"
          >
            {hero.title}{' '}
            <span className="text-gradient">{hero.titleAccent}</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: '80ms' }}
          >
            {hero.subtitle}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '160ms' }}
          >
            <a href={hero.primaryCta.href} className="btn-primary w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <dl
          className="animate-fade-up mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
          style={{ animationDelay: '240ms' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-lg px-5 py-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold text-gradient">{s.value}</span>
                <span className="mt-2 block text-xs leading-snug text-muted-foreground">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
