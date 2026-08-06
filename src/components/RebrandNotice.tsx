import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const STORAGE_KEY = 'fbtechia:rebrand-notice-dismissed'

/**
 * Aviso de troca de marca para quem chega redirecionado do fortesbezerra.com.br.
 * Fica dispensado no localStorage para não reaparecer a cada visita.
 */
export default function RebrandNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // localStorage bloqueado (modo privado/cookies restritos): mostra mesmo assim.
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Sem persistência, o aviso volta na próxima visita. Aceitável.
    }
  }

  return (
    <div
      className="relative border-b border-white/10 backdrop-blur-md"
      // Camada opaca (card) + tinta teal por cima. Sem o fundo opaco o
      // conteúdo da página aparece atrás da faixa durante o scroll.
      style={{
        backgroundColor: 'hsl(var(--card) / 0.94)',
        backgroundImage:
          'linear-gradient(hsl(var(--primary) / 0.14), hsl(var(--primary) / 0.14))',
      }}
    >
      <div className="container flex items-center justify-center gap-3 py-2.5 text-center">
        <p className="text-xs leading-relaxed text-foreground/90 md:text-sm">
          <strong className="font-semibold">Fortes Bezerra agora é FBTECHIA.</strong>{' '}
          <span className="text-muted-foreground">
            Mesma empresa, mesma equipe, mesmos sistemas — novo nome e novo endereço.
          </span>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar aviso"
          className="absolute right-4 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
