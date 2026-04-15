# ossfia-landing

Landing pública de **OSSFIA — AI Software Factory as a Service**.

- **Dominio**: https://ossfia.ai
- **Stack**: HTML + Tailwind CDN (sin build step)
- **Deploy**: Cloudflare Pages
- **Fecha**: 2026-04-15

## Estructura

```
ossfia-landing/
  index.html          # Landing 1-page (hero, problema, método, GlassPlane, pricing, casos, contacto)
  404.html            # Página de error
  _headers            # Security headers para Cloudflare Pages
  robots.txt
  sitemap.xml
  assets/             # Futuros screenshots anonimizados, OG images
```

## Desarrollo local

```bash
# Opción 1: servidor estático simple
cd C:/Users/afore/Documents/Repos/ossfia-landing
python3 -m http.server 8000
# abrir http://localhost:8000

# Opción 2: abrir directamente
start index.html   # Windows
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

## Qué cambia con el tiempo

- `index.html` sección GlassPlane: reemplazar el mock HTML por screenshots reales anonimizados cuando estén (`assets/glassplane-dashboard.png`)
- `index.html` sección Casos: actualizar con nuevos proyectos y sus scores actuales
- `index.html` sección Pricing: ajustar tiers según lo que cierre en los primeros 3-6 meses
- `robots.txt` + `sitemap.xml`: cuando se agreguen sub-páginas (blog, casos detallados)

## Lo que NO va en este repo

- `.claude/` (local de Claude Code, `.gitignored` por default si se inicia git)
- Screenshots con nombres reales de clientes
- Propuestas comerciales (viven en otra ubicación con NDA)
- Código del baseline OSSFIA (repo privado separado)

## Propietario

XCloud Solutions · Alejandro Forero · hola@ossfia.ai
