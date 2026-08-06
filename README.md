# FB_FBTECHIA — Landing page fbtechia.com

Site institucional da **FBTECHIA** (antes *Fortes Bezerra Tecnologia e
Consultoria LTDA*), migrando de `fortesbezerra.com.br` para `fbtechia.com`.

Landing de página única, dark-only, construída com o mesmo design system
"dark glass green" do [FBTax Cloud](https://www.fbtax.cloud).

## Stack

| Camada | Escolha |
|---|---|
| Build | Vite 5 |
| UI | React 18 + TypeScript |
| Estilo | Tailwind CSS 3 com tokens HSL |
| Ícones | lucide-react |
| Hospedagem | Hostinger (hospedagem compartilhada, arquivos estáticos) |

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # gera dist/
npm run preview  # serve o dist/ localmente
npm run lint     # checagem de tipos (tsc --noEmit)
```

## Onde mexer

**Todo o texto do site está em [`src/data/site.ts`](src/data/site.ts)** — copy,
produtos, preço, FAQ e contato. Os componentes só fazem layout, então mudanças
de conteúdo não exigem tocar em JSX.

```
src/
├── data/site.ts          ← conteúdo (edite aqui)
├── index.css             ← design tokens + utilitários (.glass, .btn-primary)
├── App.tsx               ← ordem das seções
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Products.tsx      ← portfólio
    ├── Clients.tsx       ← cases dos clientes
    ├── Approach.tsx      ← como trabalhamos
    ├── Reforma.tsx       ← Reforma Tributária
    ├── Plan.tsx          ← planos e preço
    ├── Faq.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── Logo.tsx

public/
├── .htaccess             ← HTTPS, SPA fallback, cache, segurança
├── favicon.svg
├── robots.txt
└── sitemap.xml

deploy/
└── fortesbezerra-redirect.htaccess   ← 301 do domínio antigo (vai no OUTRO domínio)
```

## Deploy

**No ar em https://fbtechia.com desde 06/08/2026.**

Passo a passo completo em **[docs/DEPLOY-HOSTINGER.md](docs/DEPLOY-HOSTINGER.md)**,
com o que deu errado no primeiro deploy e como o domínio antigo foi tratado.

Resumo: `npm run build` → subir o **conteúdo** de `dist/` para o `public_html`
do fbtechia.com, com o `.htaccess` junto. O SSL a Hostinger emite sozinha.

O `fortesbezerra.com.br` foi desligado (sem redirect 301) mantendo domínio e
e-mail ativos — ver seção 6 do guia.

## Portfólio referenciado

As soluções descritas no site correspondem a projetos reais:

| Produto | Repositório local | Situação |
|---|---|---|
| FBTax Cloud | `FB_FBTAX_CLOUD` | Em produção — `fbtax.cloud` |
| FB Apuração | `FB_APU01` | Piloto — Ferreira Costa e JC Distribuição |
| FB Farol | `FB_FAROL` | Em produção |
| FB SmartPick | `FB_SMARTPICK` | Em produção |
| FB Controladoria | `FB_CONTROLADORIA` | Em desenvolvimento |

O `FB_EVENTOS` existe como projeto, mas foi retirado do site por decisão
comercial — é de outro segmento.

Clientes citados na seção **Clientes**: JC Distribuição (operação completa) e
Ferreira Costa (FB Apuração).

## Pendências

- [ ] `public/og-image.png` (1200×630) para as prévias de link — as meta tags
      já apontam para ela, mas o arquivo ainda não existe.
- [ ] Confirmar a razão social e o CNPJ definitivos da FBTECHIA para o rodapé.
- [ ] Ativar DKIM do `fbtechia.com` no painel — SPF e MX ok, DKIM ausente.
- [x] Criar a caixa `contato@fbtechia.com`.
