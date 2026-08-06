type Props = {
  className?: string
}

/**
 * Marca FBTECHIA: monograma "FB" em gradiente teal→cyan + wordmark.
 * O wordmark quebra em "FBTECH & IA" — o "&" separa tecnologia de IA para
 * deixar a segunda explícita na leitura. A razão social e o domínio seguem
 * escritos "FBTECHIA", sem o "&".
 */
export default function Logo({ className = '' }: Props) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="FBTECH & IA — início"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fb-logo-grad" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="9" fill="url(#fb-logo-grad)" />
        <path
          d="M10 25V11h9v3h-5.5v2.8H18v3h-4.5V25H10Z"
          fill="#0a1a2b"
        />
        <path
          d="M20.5 25V11H25c2.6 0 4.2 1.3 4.2 3.4 0 1.3-.6 2.3-1.7 2.8 1.4.5 2.2 1.6 2.2 3.1 0 2.3-1.8 3.7-4.6 3.7h-4.6Zm3.3-8.4h1c.9 0 1.4-.4 1.4-1.2s-.5-1.2-1.4-1.2h-1v2.4Zm0 5.6h1.2c1 0 1.6-.5 1.6-1.3 0-.9-.6-1.3-1.6-1.3h-1.2V22.2Z"
          fill="#0a1a2b"
        />
      </svg>
      <span className="text-lg font-extrabold tracking-tight">
        FB<span className="text-gradient">TECH</span>
        <span className="mx-1 font-bold text-primary/80">&amp;</span>
        <span className="text-gradient">IA</span>
      </span>
    </a>
  )
}
