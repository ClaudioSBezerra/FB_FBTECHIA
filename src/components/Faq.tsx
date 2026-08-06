import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/data/site'

export default function Faq() {
  // Um item aberto por vez; null = todos fechados.
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="glass overflow-hidden rounded-lg">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {item.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
