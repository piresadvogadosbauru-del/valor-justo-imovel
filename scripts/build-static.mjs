#!/usr/bin/env node
/**
 * Script para gerar build estático compatível com Hostinger.
 *
 * O que faz:
 *   1. Roda `vite build` normalmente
 *   2. Localiza a pasta de saída do client bundle (HTML + assets)
 *   3. Copia para `dist-static/`
 *   4. Gera um `.htaccess` com fallback de SPA (para o TanStack Router)
 *
 * Uso: bun run build:static  (ou npm run build:static)
 */

import { execSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  cpSync,
  writeFileSync,
  rmSync,
  readdirSync,
  statSync,
} from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.cwd());
const OUT_DIR = join(ROOT, "dist-static");

console.log("\n🏗️  Iniciando build estático para Hostinger...\n");

// 1. Limpa pasta de saída antiga
if (existsSync(OUT_DIR)) {
  console.log("🧹 Limpando dist-static/ anterior...");
  rmSync(OUT_DIR, { recursive: true, force: true });
}

// 2. Roda o build do Vite
console.log("⚙️  Rodando vite build...\n");
try {
  execSync("vite build", { stdio: "inherit", cwd: ROOT });
} catch (err) {
  console.error("\n❌ Erro durante o build do Vite.");
  process.exit(1);
}

// 3. Procura a pasta com o index.html
const candidates = [
  join(ROOT, "dist", "client"),
  join(ROOT, ".output", "public"),
  join(ROOT, "dist"),
  join(ROOT, "build", "client"),
];

function findClientDir() {
  for (const dir of candidates) {
    if (existsSync(join(dir, "index.html"))) return dir;
  }
  for (const baseName of ["dist", ".output", "build"]) {
    const base = join(ROOT, baseName);
    if (!existsSync(base)) continue;
    for (const entry of readdirSync(base)) {
      const full = join(base, entry);
      try {
        if (statSync(full).isDirectory() && existsSync(join(full, "index.html"))) {
          return full;
        }
      } catch {}
    }
  }
  return null;
}

const clientDir = findClientDir();

if (!clientDir) {
  console.error("\n❌ Não encontrei o index.html gerado pelo build.");
  console.error("   Verifique a saída do vite build acima.");
  process.exit(1);
}

console.log(`\n📂 Build encontrado em: ${clientDir}`);

// 4. Copia tudo para dist-static/
mkdirSync(OUT_DIR, { recursive: true });
cpSync(clientDir, OUT_DIR, { recursive: true });
console.log(`📦 Arquivos copiados para: ${OUT_DIR}`);

// 5. Gera .htaccess
const htaccess = `# Configuração SPA (TanStack Router) - gerado automaticamente

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

writeFileSync(join(OUT_DIR, ".htaccess"), htaccess, "utf8");
console.log("✅ .htaccess gerado");

if (!existsSync(join(OUT_DIR, "index.html"))) {
  console.error("\n❌ index.html não foi gerado em dist-static/. Build falhou.");
  process.exit(1);
}

console.log("\n✨ Build estático pronto!\n");
console.log("📁 Pasta: dist-static/");
console.log("📤 Faça upload de TODO o conteúdo dessa pasta para public_html/ na Hostinger.");
console.log("📖 Veja DEPLOY-HOSTINGER.md para instruções completas.\n");
