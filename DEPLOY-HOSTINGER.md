# 🚀 Guia de Deploy na Hostinger

Este guia mostra como gerar os arquivos estáticos do site e fazer upload manual na Hostinger.

> ⚠️ **Importante:** este processo gera um site **estático** (apenas HTML/CSS/JS).
> Funcionalidades de backend (banco de dados, formulários dinâmicos) **não funcionarão**.
> A landing page atual funciona perfeitamente como estática.

---

## 📋 Pré-requisitos

Você precisa ter instalado no seu computador:

- **Node.js** versão 20 ou superior — [baixar aqui](https://nodejs.org/)
- **Bun** (recomendado) ou **npm** — [instalar Bun](https://bun.sh/)
- **Git** — [baixar aqui](https://git-scm.com/)

---

## 🔧 Passo 1 — Clonar o repositório do GitHub

No Lovable, conecte o projeto ao GitHub se ainda não conectou:
**Connectors → GitHub → Connect project**

Depois, no terminal do seu computador:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO
```

Substitua a URL pelo endereço do seu repositório.

---

## 📦 Passo 2 — Instalar as dependências

```bash
bun install
```

Ou se preferir usar npm:

```bash
npm install
```

---

## 🏗️ Passo 3 — Gerar o build estático

Use o script já preparado:

```bash
bun run build:static
```

Ou com npm:

```bash
npm run build:static
```

Esse comando vai:
1. Compilar o projeto
2. Gerar uma pasta `dist-static/` com todos os arquivos prontos para upload
3. Criar um arquivo `.htaccess` configurado para SPA (rotas funcionam corretamente)

---

## ☁️ Passo 4 — Upload na Hostinger

### Opção A — File Manager (mais fácil)

1. Acesse o **hPanel** da Hostinger
2. Vá em **Arquivos → Gerenciador de Arquivos**
3. Entre na pasta `public_html/`
4. **Apague todos os arquivos antigos** (se for primeiro deploy, geralmente tem um `default.php`)
5. Clique em **Upload** e selecione **TODOS** os arquivos da pasta `dist-static/` do seu computador
   - ⚠️ Envie o **conteúdo** da pasta, não a pasta inteira
   - Inclua o arquivo oculto `.htaccess` (ative "Mostrar arquivos ocultos" no File Manager)

### Opção B — FTP (mais rápido para muitos arquivos)

1. No hPanel, vá em **Arquivos → Contas FTP** e copie suas credenciais
2. Use um cliente FTP como [FileZilla](https://filezilla-project.org/)
3. Conecte e navegue até `/public_html/`
4. Apague o conteúdo antigo
5. Arraste todo o conteúdo de `dist-static/` para `/public_html/`

---

## ✅ Passo 5 — Testar

Acesse seu domínio no navegador. O site deve abrir normalmente.

Teste também:
- Recarregar a página (F5) — deve continuar funcionando
- Acessar uma URL direta — deve abrir corretamente

Se as URLs internas derem **erro 404**, verifique se o arquivo `.htaccess` foi enviado para `public_html/`.

---

## 🔄 Atualizações futuras

Sempre que editar o site no Lovable:

1. As mudanças vão automaticamente para o GitHub
2. No seu computador: `git pull`
3. Rode novamente: `bun run build:static`
4. Faça upload do novo conteúdo da pasta `dist-static/` na Hostinger (substituindo os arquivos antigos)

---

## ❓ Problemas comuns

**Página em branco após upload**
→ Verifique se o caminho base está correto. Se hospedou em uma subpasta, edite o `vite.config.ts` adicionando `base: "/subpasta/"`.

**404 ao recarregar páginas internas**
→ O arquivo `.htaccess` não foi enviado. Faça upload dele na pasta `public_html/`.

**Imagens não aparecem**
→ Verifique se a pasta `assets/` foi enviada completa.

**SSL/HTTPS não funciona**
→ Ative o SSL grátis no hPanel: **Segurança → SSL → Instalar**.

---

## 📞 Precisa de ajuda?

- Documentação Hostinger: https://support.hostinger.com.br/
- Documentação Lovable: https://docs.lovable.dev/
