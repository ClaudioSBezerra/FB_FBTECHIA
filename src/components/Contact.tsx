import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact, finalCta } from '@/data/site'

export default function Contact() {
  return (
    <section id="contato" className="section relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[380px] w-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{finalCta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{finalCta.description}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
            <a href={`mailto:${contact.email}`} className="btn-ghost w-full sm:w-auto">
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={15} aria-hidden="true" />
            {contact.city}
          </p>
        </div>
      </div>
    </section>
  )
}
