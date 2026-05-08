# ossfia-landing

Landing pública de **OSSFIA — Baseline harness + GlassPlane control plane** para AI coding agents.

- **Dominio**: https://ossfia.ai
- **Stack**: HTML + Tailwind CDN (sin build step)
- **Deploy**: Cloudflare Pages
- **Última actualización**: 2026-05-08 (v10.13)

## Posicionamiento

OSSFIA es el sistema operativo para fábricas de software con IA:

- **Baseline** — governance harness multi-runtime para coding agents (Claude Code, Cursor, Copilot, Junie, Codex, Aider, Cline, +8 runtimes más)
- **GlassPlane** — control plane que mide 18 dimensiones de compliance en vivo

Lo dogfooding sobre nuestro propio repo (`github.com/aforero22/baseline`) y lo licenciamos a clientes en dos modelos: co-creación (adopción) o software factory (turnkey).

## Estructura

```
ossfia-landing/
  index.html          # Landing 1-page (10 secciones)
  404.html            # Página de error con branding
  _headers            # Security headers para Cloudflare Pages
  robots.txt
  sitemap.xml         # 10 URLs (anchors)
  assets/             # Screenshots anonimizados, OG images
  templates/          # Templates comerciales (NDA, MSA, SOW, one_pager)
```

### Secciones de index.html (orden)

1. **Hero** — Baseline + GlassPlane, 5 metrics tiles (14+ runtimes, 10 fases, 18 dim, 93% NIST, 60 scripts)
2. **Problema** — Mercado tiene generadores, falta governance
3. **Método** — ADLC 10 fases, 3 macro-etapas, 6 gates
4. **Engagement** — Co-creación (Modelo A) vs Software Factory (Modelo B)
5. **GlassPlane** — Dashboard preview con 13 dimensiones live
6. **Conformity Monitoring** — Continuous 6h cycle (Cloudflare Browser Run)
7. **Compliance multi-marco** — NIST 93% + 6 packs LATAM + 10 DLP
8. **Pricing** — Starter / Growth / Enterprise tiers
9. **vs Alternativas** — Tabla comparativa Cursor/Copilot/MS/Devin/OSSFIA
10. **Casos** — GlassPlane dogfooding (hero) + 3 NDA cards
11. **Contacto** — 4 audience CTAs (CIO/Empresa/CISO/Investor)

## Desarrollo local

```bash
cd C:/Users/afore/Documents/Repos/ossfia-landing
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Deploy a Cloudflare Pages

### Primera vez (via wrangler)

```bash
cd C:/Users/afore/Documents/Repos/ossfia-landing
wrangler pages deploy . --project-name=ossfia-landing --branch=main --commit-dirty=true
```

### Custom domain

En Cloudflare Dashboard → Pages → `ossfia-landing` → Custom domains:
- Agregar `ossfia.ai` (apex)
- Agregar `www.ossfia.ai` (subdomain)

Cloudflare se encarga del certificado SSL automáticamente.

### CI continuo (post-merge to main)

Una vez conectado el repo GitHub al proyecto Cloudflare Pages, cada push a `main` deploya automáticamente. No requiere build (sólo HTML estático).

## Qué cambia con el tiempo

- **Cuando v10.14 ship**: actualizar NIST coverage tiles (subir GenAI 80%, agregar SOC 2 pack en estado "active")
- **Cuando lleguen screenshots reales anonimizados**: reemplazar el mock HTML de GlassPlane por imágenes en `assets/glassplane-*.png`
- **Cuando cierre primer caso público**: agregar a sección Casos con consentimiento del cliente
- **OG images**: pendiente generar `assets/og-image.png` (1200x630) para preview en redes

## Lo que NO va en este repo

- Código del baseline OSSFIA (vive en `github.com/aforero22/baseline`)
- Datos de clientes con nombres reales (NDA)
- Propuestas comerciales firmadas (vault separado)
- `.claude/` (local de Claude Code)

## Propietario

XCloud Solutions · Alejandro Forero · hola@ossfia.ai
GitHub: [aforero22/baseline](https://github.com/aforero22/baseline)
