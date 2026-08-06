import { approach } from '@/data/site'

export default function Approach() {
  return (
    <section id="abordagem" className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Como trabalhamos</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              Quatro princípios que não abrimos mão
            </h2>
            <p className="mt-4 text-muted-foreground">
              O método é sempre o mesmo: entender o processo, medir o que dói e entregar rápido.
            </p>
          </div>

          <ol className="space-y-5">
            {approach.map((item, i) => (
              <li key={item.title} className="glass glass-hover rounded-lg p-7">
                <div className="flex gap-5">
                  <span className="font-mono text-sm font-semibold text-primary/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
