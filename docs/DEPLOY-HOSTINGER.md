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

Anote o caminho do `public_html` do fbtechia.com — em hospedagem compartilhada
com múltiplos domínios ele normalmente é:

```
/home/uXXXXXXXX/domains/fbtechia.com/public_html
```

---

## 3. Subir os arquivos

Duas opções. A primeira é mais simples, a segunda é melhor para repetir.

### Opção A — File Manager (interface web)

1. Compacte o **conteúdo** de `dist/` em um `.zip`:

   ```bash
   cd dist && zip -r ../fbtechia-site.zip . && cd ..
   ```

   O zip precisa ter `index.html` na raiz, não `dist/index.html`.

2. Painel Hostinger → **Arquivos → Gerenciador de Arquivos**.
3. Entre no `public_html` do fbtechia.com e apague o conteúdo existente.
4. Faça upload do zip e use **Extrair**.
5. Confirme que `index.html`, `assets/` e `.htaccess` estão na raiz.

> O File Manager esconde arquivos que começam com ponto por padrão.
> Ative "Mostrar arquivos ocultos" para ver o `.htaccess`.

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

## 5. Ativar o SSL

Painel → **Segurança → SSL** → instalar o certificado gratuito para
`fbtechia.com` e `www.fbtechia.com`.

Faça isso **antes** de testar, porque a regra de HTTPS do `.htaccess` gera loop
de redirecionamento enquanto não existe certificado válido.

---

## 6. Redirect 301 do domínio antigo

Este é o passo que preserva o SEO acumulado pelo `fortesbezerra.com.br`.

1. O site atual do fortesbezerra.com.br é um projeto **Hostinger Horizons**.
   Antes de mais nada, desconecte o Horizons daquele domínio (painel do
   Horizons → configurações do projeto → remover domínio personalizado).
   Sem isso o Horizons continua respondendo e o `.htaccess` nunca é lido.

2. Copie `deploy/fortesbezerra-redirect.htaccess` para o `public_html` do
   **fortesbezerra.com.br**, renomeando para `.htaccess`.

3. O `public_html` do domínio antigo pode ficar só com esse arquivo.

4. Teste o redirecionamento — o esperado é `301` apontando para o domínio novo:

   ```bash
   curl -I https://fortesbezerra.com.br
   curl -I https://fortesbezerra.com.br/qualquer-caminho
   ```

5. **Mantenha o domínio antigo registrado e renovado por pelo menos 1 ano.**
   Um 301 só transfere autoridade enquanto ele responde. Deixar o domínio
   expirar joga fora exatamente o que o redirect estava preservando.

---

## 7. Pós-migração

- [ ] Google Search Console: adicionar a propriedade `fbtechia.com` e usar
      **Configurações → Alteração de endereço** na propriedade antiga.
- [ ] Enviar `https://fbtechia.com/sitemap.xml` no Search Console.
- [ ] Atualizar o e-mail de contato: criar `contato@fbtechia.com` em
      **E-mails → Contas de e-mail** e manter `contato@fortesbezerra.com.br`
      recebendo (encaminhamento) por pelo menos 12 meses.
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
