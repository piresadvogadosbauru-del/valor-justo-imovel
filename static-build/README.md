# Versão Estática (Vite + React, sem SSR)

Esta pasta é um projeto **independente** Vite + React puro, com saída em `dist/`,
pronto para deploy em qualquer hospedagem estática (Hostinger, Netlify, Vercel,
Cloudflare Pages, S3, etc.).

Não usa TanStack Start, não usa SSR, não usa Cloudflare Workers. É 100% client-side.

## Como usar

```bash
cd static-build
npm install        # ou: bun install
npm run build      # gera a pasta dist/
```

Depois faça upload do **conteúdo** da pasta `dist/` para `public_html/` na
Hostinger (não a pasta inteira, só o que está dentro dela).

### Desenvolvimento local

```bash
npm run dev
```

Abre em http://localhost:5173

### Subdiretório na Hostinger

Se hospedar em `seusite.com/itbi/` em vez da raiz, edite `vite.config.ts`:

```ts
export default defineConfig({
  base: "/itbi/",
  // ...
});
```

## Estrutura

- `src/App.tsx` — landing page completa (todas as seções)
- `src/components/site/` — Header e WhatsApp FAB (cópia do projeto Lovable)
- `src/styles.css` — design system Tailwind v4 (cópia do projeto Lovable)
- `index.html` — entry HTML com meta tags SEO

## Sincronizar com o projeto Lovable

Se você editar o projeto principal no Lovable e quiser refletir aqui,
copie manualmente os arquivos alterados:

- `src/styles.css` → `static-build/src/styles.css`
- `src/components/site/*` → `static-build/src/components/site/*`
- Conteúdo de `src/routes/index.tsx` (a partir da função `Index` para baixo)
  → `static-build/src/App.tsx` (preservando o `export default function App()` no topo)