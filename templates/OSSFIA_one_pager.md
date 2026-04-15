# OSSFIA — AI Software Factory as a Service
## One-pager comercial

> *Construimos tu software con IA, sin perder compliance.*

---

### El problema

- **1.7×** más defectos en código generado con IA vs código humano (CodeRabbit, 8.1M PRs 2026)
- **91%** aumento en tiempos de code review desde adopción de IA (LinearB 2026)
- **€35M** penalidad máxima EU AI Act, vigente agosto 2026
- Solo el **6%** de organizaciones tiene estrategia formal de AI governance (Gartner)

**El mercado tiene herramientas para generar código con IA. Nadie tiene un sistema para gobernarlo.**

---

### La solución: OSSFIA

**OSSFIA (AI Software Factory OS)** es nuestra metodología propia y herramientas para construir software bajo un ciclo de 10 fases, 16 dimensiones de compliance, y evidencia automatizada de cumplimiento regulatorio.

| | |
|---|---|
| **ADLC** | 10 fases agrupadas en Pensar / Construir / Operar, con 6 gates formales de enforcement |
| **FABs** | Fullstack Agent Builders — células de desarrollo de agentes autónomos + humanos |
| **GlassPlane** | Dashboard privado que puntúa proyectos contra 16 dimensiones en tiempo real |
| **AURA** | Capa de IA visible embebida en el producto final (chat, advisor, agent) |

**Diferenciadores vs Kiro / Cursor / Devin / Credo AI**:

- ✅ Lifecycle completo (10 fases vs 3 máx de competidores)
- ✅ 6 gates con 34 scripts de enforcement automatizado
- ✅ Compliance multi-regulatorio (6 marcos simultáneos: EU AI Act, ISO 42001, NIST, OWASP, SOC 2, Ley 1581)
- ✅ 10 categorías DLP con BLOCK/REDACT/WARN automático
- ✅ 19 módulos de Inteligencia Invisible evaluables
- ✅ Kill switch con drills verificados
- ✅ Brownfield adoption (Strangler Fig AI)
- ✅ **Único framework AI governance escrito desde LATAM para LATAM**

---

### Qué vendemos

No vendemos el framework ni el dashboard. **Vendemos desarrollo de software.**

Cada entrega viene con:
- Código fuente y tests
- Scorecard GlassPlane con score ≥ Gate contractual
- AIBOM + SBOM firmados digitalmente
- ADRs y documentación técnica
- Runbooks operacionales
- Reporte EU AI Act / ISO 42001 / SOC 2 readiness

---

### Modelos de contratación

#### Retainer "Factory as a Service" — Recomendado

| Tier | Equipo | Sprints/mes | Gate mínimo | Compromiso |
|---|---|---|---|---|
| **Starter** | Humanos + FABs (escala pequeña) | 1 | Plata (≥61) | 3 meses |
| **Growth** ⭐ | Equipo dedicado humanos + FABs | 2 | Oro (≥81) | 6 meses |
| **Enterprise** | Equipo ampliado + FABs ilimitados | Continuous | Oro + drills | 12 meses |

Cada engagement se cotiza por su alcance real en la call diagnóstico.

#### Alternativas

- **Fixed-price por fase ADLC**: cotización por F01 Discovery, F04 Architecture, F06 Build, etc.
- **Outcome-based**: por módulo entregado + bonus/penalty atado a GlassPlane score

---

### Continuous Conformity Monitoring ⭐ Diferencial único

Incluido en tier **Growth** y **Enterprise**, implementado sobre **Cloudflare Browser Run** (GA abril 2026):

- **Flows críticos ejecutados cada 6 horas** por agentes AI que navegan tu software como un usuario real
- **Session recordings archivados 365 días** como evidencia auditable (cumple ISO 42001 Annex B + EU AI Act Art. 72)
- **Semantic evaluation** de outputs LLM — validamos que AURA u otros chats IA respondan correctamente contra golden datasets
- **Persona-based usability** — simulamos usuarios reales (doctor senior, paciente 65+, admin compliance, contador) y reportamos fricciones
- **Alert SLA** 30 min para flows críticos, 2 horas para flows high — directo al webhook de tu equipo
- **Reporte mensual firmado digitalmente** (Ed25519) listo para entregar a auditores
- **Dashboard en tu portal GlassPlane privado** con timeline de ejecuciones, pass rates, session replay

**Números proyectados para un retainer Growth**:
> 7 flows críticos × cada 6 horas × 30 días = **840 ejecuciones monitoreadas/mes** con DOM replay completo disponible para tu compliance officer.

**Qué significa esto frente a Credo AI / Holistic AI / Fiddler**:
Ellos te dan un dashboard de compliance estático que mide artefactos. Nosotros te damos **evidencia viva** de que tu software está funcionando correctamente en producción, 24/7, con trace completo auditable. **Nadie más en el mercado LATAM ofrece esto hoy.**

---

### Casos reales (anonimizados)

| Sector | Score | Grado | Stack | Highlights |
|---|---:|---|---|---|
| Salud — Historia Clínica Electrónica | **90** | Oro | Hono + Astro + PostgreSQL | RIPS + CIE-10 + FHIR, 11/14 II (79%) |
| Nómina universitaria pública | **88** | Oro | Astro + Hono + Workers AI | PILA + DIAN e-nómina, Ley 1581 full |
| ERP hospitalario | **81** | Oro | Hono JSX + Cloudflare D1+R2 | NIIF §4-§8, 104 tablas, 1070 tests |

Nombres reales bajo NDA mutuo. Se comparte arquitectura y evidencia detallada tras firmar.

---

### Por qué ahora

- **EU AI Act** entra en plena vigencia **agosto 2026**. Penalidades hasta €35M.
- **Ley 1581** (Colombia), **CONPES 4144** AI governance y **ISO 42001** son todas exigibles hoy.
- Los vendors internacionales cobran USD 50K+/año **solo por el dashboard** — y no construyen tu software.
- Las dev shops tradicionales no saben construir con agentes autónomos.
- **Nosotros hacemos las dos cosas.**

---

### Siguiente paso

**Call diagnóstico gratis — 30 min.**
Revisamos tu proyecto, identificamos fases prioritarias del ADLC, y te mostramos qué scorecard tendrías en GlassPlane hoy.

**hola@ossfia.ai** · https://ossfia.ai · panel cliente: https://panel.ossfia.ai

---

*XCloud Solutions · Colombia → LATAM · © 2026*
*OSSFIA, GlassPlane, AURA, FAB son marcas registradas de XCloud Solutions.*
