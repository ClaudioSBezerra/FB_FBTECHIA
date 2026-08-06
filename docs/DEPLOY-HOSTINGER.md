# Deploy na Hostinger — fbtechia.com

Guia da publicação da landing e da migração de `fortesbezerra.com.br` para
`fbtechia.com`.

---

## 1. Gerar o build

```bash
npm install      # só na primeira vez
npm run build
```

O resultado fica em `dist/`. É esse conteúdo — **não a pasta `dist` em si** —
que vai para o servidor.

Para conferir localmente antes de subir:

```bash
npm run preview
```

---

## 2. Apontar o domínio fbtechia.com para a Hostinger

No painel da Hostinger: **Domínios → Adicionar domínio** (ou **Websites → Adicionar
website** se o fbtechia.com foi registrado fora da Hostinger).

Se o domínio foi registrado em outro registrador, aponte os nameservers para:

```
ns1.dns-parking.com
ns2.dns-parking.com
```

A propagação leva de minutos a algumas horas.

### Criar o website (não pule este passo)

Ter o DNS apontado **não** cria o `public_html`. Enquanto o website não existir,
o domínio responde com a página *"Parked Domain name on Hostinger DNS system"* e
não há para onde subir arquivo.

Painel → **Websites → Adicionar Website** → tipo **Custom PHP/HTML website** →
selecionar o `fbtechia.com`.

O tipo importa. As outras opções não servem:

| Opção | Por quê não |
|---|---|
| Hostinger Horizons | AI builder — substitui o conteúdo pelo dele |
| WordPress | instala CMS com `.htaccess` e `index.php` conflitantes |
| Website Builder | editor visual, não aceita upload de build |
| Deploy web app | para apps com runtime (Node/Python), não estático |

`Custom PHP/HTML` é a única que serve arquivos estáticos via Apache **respeitando
o `.htaccess`** — sem isso não há HTTPS forçado, SPA fallback nem cache.

Anote o caminho do `public_html` do fbtechia.com — em hospedagem compartilhada
com múltiplos domínios ele normalmente é:

```
/home/uXXXXXXXX/domains/fbtechia.com/public_html
```

---

## 3. Subir os arquivos

### Opção A — File Manager, upload manual (foi o que funcionou)

A extração de `.zip` pelo File Manager **falhou** no deploy de 06/08/2026 — o
botão de extrair não concluiu. São 6 itens, o upload direto é mais rápido do que
depurar o zip.

1. Painel → **Arquivos → Gerenciador de Arquivos** → `public_html` do fbtechia.com.
2. **Ative "Mostrar arquivos ocultos"** em Configurações. Sem isso o `.htaccess`
   fica invisível o deploy inteiro.
3. Apague o conteúdo existente, incluindo o `default.php` que a Hostinger cria —
   `index.php` tem precedência sobre `index.html` no `DirectoryIndex` e serviria
   a página padrão no lugar do site.
4. Prepare o `.htaccess` com nome visível, porque o seletor de arquivos do
   navegador não mostra dotfiles:

   ```bash
   cp dist/.htaccess htaccess.txt
   ```

5. Suba na raiz do `public_html`: `index.html`, `favicon.svg`, `robots.txt`,
   `sitemap.xml` (de `dist/`) e o `htaccess.txt`.
6. Crie a pasta `assets` e suba dentro dela os arquivos de `dist/assets/`.
   Os nomes têm hash e o `index.html` aponta para eles — não renomeie.
7. Renomeie `htaccess.txt` → `.htaccess`.
8. Apague o `htaccess.txt` local.

> **Confira em que pasta você está antes de subir.** No deploy de 06/08/2026 os
> arquivos foram parar em `../site`, irmã do `public_html`. Nada fora do
> `public_html` é servido pela web: o sintoma é a raiz devolver **403 Forbidden**
> (pasta vazia, sem index) e `/index.html` devolver 404. A correção é mover o
> conteúdo para dentro do `public_html`, com arquivos ocultos visíveis para o
> `.htaccess` não ficar para trás.

### Opção B — FTP/SFTP

Credenciais em **Arquivos → Contas FTP**.

```bash
# exemplo com lftp
lftp -u USUARIO,SENHA ftp://ftp.fbtechia.com -e "
  mirror -R --delete --verbose dist/ /public_html;
  bye
"
```

`--delete` remove no servidor o que não existe mais no build — é o que evita
assets órfãos acumulando a cada deploy.

---

## 4. Verificar o .htaccess

O `public/.htaccess` do repositório é copiado para `dist/` no build. Ele cuida de:

- redirecionar HTTP → HTTPS;
- redirecionar `www.fbtechia.com` → `fbtechia.com`;
- servir `index.html` para rotas que não são arquivo real (SPA fallback);
- compressão gzip;
- cache longo para assets com hash e `no-cache` para o `index.html`;
- cabeçalhos de segurança.

**Confirme que ele chegou ao servidor.** Se o upload perdeu o arquivo (o zip do
macOS às vezes ignora dotfiles), crie manualmente pelo File Manager copiando o
conteúdo de `public/.htaccess`.

---

## 5. SSL

Na criação do website a Hostinger emitiu o certificado Let's Encrypt
automaticamente, cobrindo `fbtechia.com` e `www.fbtechia.com` — não foi
preciso nenhum passo manual.

Se por algum motivo ele não existir, instale em **Segurança → SSL** *antes* de
abrir o site no navegador: a regra de HTTPS do `.htaccess` gera loop de
redirecionamento enquanto não houver certificado válido, e o sintoma parece
erro de deploy.

---

## 6. Domínio antigo — o que foi feito

**Decisão de 06/08/2026: o `fortesbezerra.com.br` foi desligado, sem redirect.**
O tráfego era baixo e a opção foi manter apenas o domínio e o e-mail.

O que foi executado: painel do **Horizons** → projeto do fortesbezerra.com.br →
configurações → **remover domínio personalizado**. Só isso.

Estado resultante, verificado:

| Item | Estado |
|---|---|
| Registro A | sem resposta — saiu junto com o Horizons |
| `www` | NXDOMAIN |
| Nameservers | `ns1`/`ns2.dns-parking.com` — zona ainda na Hostinger |
| MX | `mx1`/`mx2.hostinger.com` — **e-mail preservado** |

A zona DNS continuar na Hostinger é o que mantém o e-mail vivo.

> **Nunca remova o domínio em Domínios → excluir, e não deixe expirar.**
> Qualquer um dos dois apaga a zona DNS junto: os MX somem e o recebimento em
> `@fortesbezerra.com.br` para na hora, sem aviso. Confirme a renovação
> automática no painel.

Excluir o *website* do hPanel (**Websites → Excluir website**) seria seguro para
o e-mail — na Hostinger as caixas são vinculadas ao domínio, não ao website —
mas não foi feito, e não é necessário.

### Se um dia quiser o redirect 301 em vez do desligamento

O arquivo `deploy/fortesbezerra-redirect.htaccess` continua no repositório. Para
usá-lo é preciso que o domínio antigo **tenha um website** no hPanel, senão não
existe `public_html` para receber o arquivo. Copie-o para lá renomeado como
`.htaccess` e valide:

```bash
curl -I https://fortesbezerra.com.br
curl -I https://fortesbezerra.com.br/qualquer-caminho   # espera-se 301
```

Um 301 só transfere autoridade enquanto o domínio responde — ele exige manter o
registro renovado indefinidamente, não só por um ano.

---

## 7. Pós-migração

- [x] Criar `contato@fbtechia.com` em **E-mails → Contas de e-mail**.
- [ ] **Ativar DKIM** para o `fbtechia.com` em **E-mails → Configurações → DKIM**.
      Verificado em 06/08/2026: MX e SPF (`v=spf1 include:_spf.mail.hostinger.com
      ~all`) publicados, DMARC em `p=none`, **DKIM ausente**. Domínio novo sem
      histórico de envio e sem DKIM tem alta chance de cair em spam — justamente
      no e-mail que avisa os clientes da mudança de marca.
- [ ] Confirmar a renovação automática do `fortesbezerra.com.br` (ver seção 6).
- [ ] Manter `contato@fortesbezerra.com.br` recebendo, com encaminhamento para a
      caixa nova, por pelo menos 12 meses.
- [ ] Google Search Console: adicionar a propriedade `fbtechia.com` e enviar
      `https://fbtechia.com/sitemap.xml`.
      A ferramenta **Alteração de endereço** *não* se aplica: ela exige que o
      domínio antigo responda com 301, e ele foi desligado. O `fbtechia.com`
      começa do zero em reputação.
- [ ] Atualizar links do domínio antigo em: assinaturas de e-mail, WhatsApp
      Business, Google Meu Negócio, LinkedIn, notas fiscais, propostas
      comerciais e contratos em circulação.
- [ ] Avisar os clientes ativos da mudança de marca.
- [ ] Gerar a imagem `og-image.png` (1200×630) e subir em `public/` — as meta
      tags do `index.html` já apontam para ela.

---

## Atualizações futuras

```bash
# edite src/data/site.ts (todo o texto do site está lá)
npm run build
# suba o conteúdo de dist/ novamente
```

Como o `index.html` é servido com `no-cache`, a mudança aparece na hora.
Se ainda assim vier conteúdo velho, limpe o cache no painel da Hostinger em
**Desempenho → Cache**.
