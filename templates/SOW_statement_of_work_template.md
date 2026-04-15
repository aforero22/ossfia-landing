# Statement of Work (SOW) — OSSFIA

**Número de SOW**: SOW-{{AÑO}}-{{NNN}}
**Fecha**: {{FECHA_FIRMA}}
**Vigencia**: del {{FECHA_INICIO}} al {{FECHA_FIN}}

Este Statement of Work es un anexo del **Master Services Agreement (MSA)** firmado entre XCloud Solutions S.A.S. y {{CLIENTE_RAZON_SOCIAL}} con fecha {{FECHA_MSA}}. Todos los términos del MSA aplican a este SOW salvo que aquí se establezca algo distinto.

---

## 1. Resumen Ejecutivo

**Proyecto**: {{NOMBRE_PROYECTO}}
**Sector**: {{SECTOR}} (salud / fintech / educación / gobierno / retail / otro)
**Product Owner del Cliente**: {{PO_NOMBRE}} — {{PO_EMAIL}}
**Team Lead del Proveedor**: {{LEAD_NOMBRE}} — {{LEAD_EMAIL}}
**Modalidad**: ☐ Retainer   ☐ Fixed-price por fase   ☐ Outcome-based

**Objetivo de negocio en 1 oración**:
> {{OBJETIVO_NEGOCIO}}

## 2. Alcance

### 2.1 Incluido

{{DETALLE_ALCANCE}}

Ejemplo:
- Diseño e implementación del módulo X con capacidades Y, Z
- Integración con sistemas existentes A, B
- Migración de datos del sistema legacy C
- Despliegue en ambiente productivo sobre stack D

### 2.2 Fases ADLC aplicables

Marque las fases que este SOW cubre:

| Fase | Nombre | Incluida |
|---|---|---|
| F01 | Strategy & Problem Framing | ☐ |
| F02 | Domain & Capability Discovery | ☐ |
| F03 | Context & Knowledge Design | ☐ |
| F04 | AI/Deterministic Architecture | ☐ |
| F05 | Data, Knowledge & Contract Engineering | ☐ |
| F06 | AI-Assisted Build | ☐ |
| F07 | Continuous TEVV | ☐ |
| F08 | Security, Compliance & Governance | ☐ |
| F09 | Deploy, Operate & GenOps | ☐ |
| F10 | Learn & Evolve | ☐ |

### 2.3 Track

☐ Full (enterprise, 4-20 semanas por fase)
☐ Lean (startup, 2-4 semanas por fase)
☐ Solo (MVP, 1-7 días por fase)

### 2.4 No incluido (out of scope)

{{LISTA_OUT_OF_SCOPE}}

Ejemplos comunes:
- Mantenimiento post-launch más allá del período de corrección de defectos (30 días)
- Desarrollo de funcionalidades no listadas explícitamente en 2.1
- Migración de datos adicionales no pactadas
- Soporte de usuario final del sistema entregado
- Infraestructura cloud (el Cliente provee su cuenta Cloudflare / AWS / Azure)

## 3. Entregables

### 3.1 Entregables primarios

| # | Entregable | Descripción | Criterio de aceptación |
|---|---|---|---|
| 1 | {{ENTREGABLE_1}} | {{DESC}} | {{CRITERIO}} |
| 2 | {{ENTREGABLE_2}} | {{DESC}} | {{CRITERIO}} |
| 3 | {{ENTREGABLE_3}} | {{DESC}} | {{CRITERIO}} |

### 3.2 Entregables de compliance (obligatorios bajo OSSFIA)

Además de los entregables primarios, el Proveedor entregará:

- **Architectural Decision Records (ADRs)**: decisiones de arquitectura documentadas y numeradas
- **data_classification.yaml**: clasificación de datos con 10 categorías DLP
- **data_provenance_registry.yaml**: registro de fuentes de datos para features AI
- **AIBOM**: AI Bill of Materials firmado digitalmente
- **SBOM**: Software Bill of Materials (CycloneDX 1.5 o SPDX 3.0)
- **Scorecard GlassPlane**: reporte de compliance con score por dimensión
- **Tests**: suite de tests automatizados con cobertura mínima +5% por feature nueva
- **Runbooks**: procedimientos operacionales para cada componente desplegado
- **Kill switch documentation**: si el proyecto incluye agentes autónomos

## 4. Compliance Gate Contractual

**Gate mínimo exigido**: ☐ Plata (61-80)   ☐ Oro (81-95)   ☐ Platino (96-100)

Esta cláusula opera según el artículo 5 del MSA. El Proveedor se compromete a que cada entrega relevante alcance el Gate mínimo en el scorecard de GlassPlane antes de ser facturada.

**Dimensiones críticas para este proyecto** (score mínimo individual):

| Dimensión | Score mínimo | Justificación |
|---|---:|---|
| Framework Compliance | {{X}} | |
| EU AI Act | {{X}} | |
| Data Governance (DLP) | {{X}} | |
| Security Posture | {{X}} | |
| {{OTRA}} | {{X}} | |

## 5. Cronograma

### 5.1 Kick-off

**Fecha**: {{FECHA_KICKOFF}}

Actividades del kick-off:
- Revisión de alcance y criterios de aceptación
- Presentación del equipo asignado
- Acceso a repositorios, ambientes, herramientas
- Firma del NDA individual de los miembros del equipo
- Confirmación del cadence de reuniones semanales

### 5.2 Milestones

| Milestone | Fecha objetivo | Entregable |
|---|---|---|
| M1 | {{FECHA}} | {{DESC}} |
| M2 | {{FECHA}} | {{DESC}} |
| M3 | {{FECHA}} | {{DESC}} |
| Aceptación final | {{FECHA}} | Todos los entregables + scorecard ≥ Gate |

### 5.3 Cadence de ceremonias

- **Daily async** en Slack compartido (si aplica tier Growth o Enterprise)
- **Weekly sync** con Product Owner del Cliente — lunes 09:00 COT, 30 min
- **Sprint review** quincenal con demo en vivo y scorecard — viernes 15:00 COT, 60 min
- **Retrospective** mensual — último viernes del mes, 45 min

## 6. Precio y Pagos

### 6.1 Valor total

**Precio total**: USD {{MONTO_TOTAL}}

### 6.2 Plan de pagos

☐ **Retainer** — USD {{MONTO_MENSUAL}}/mes × {{MESES}} meses

☐ **Fixed-price por fase** — desglose:

| Fase | Monto | Momento de facturación |
|---|---:|---|
| F{{X}} — 50% inicio | USD {{X}} | Al firmar SOW |
| F{{X}} — 50% aceptación | USD {{X}} | Al aceptar el entregable |

☐ **Outcome-based** — USD {{MONTO}} por outcome aceptado
- Bonus: +10% si GlassPlane score ≥ 90
- Penalty: -10% si GlassPlane score < 75

### 6.3 Gastos adicionales

{{LISTA_GASTOS}} (normalmente ninguno. Si aplica: viajes, infraestructura cloud, licencias de terceros — todo a precio costo con factura).

### 6.4 Moneda y condiciones

- Facturación en USD (o equivalente COP a TRM del día)
- Plazo de pago: 30 días calendario
- Impuestos no incluidos

## 7. Equipo Asignado

### 7.1 Por parte del Proveedor

| Rol | Nombre | Dedicación | Días/semana |
|---|---|---|---|
| Team Lead | {{NOMBRE}} | {{%}} | {{N}} |
| Architect | {{NOMBRE}} | {{%}} | {{N}} |
| Builder(s) | {{NOMBRE(S)}} | {{%}} | {{N}} |
| QA / TEVV | {{NOMBRE}} | {{%}} | {{N}} |
| FABs (agentes) | {{N}} instancias | 24/7 | — |

### 7.2 Por parte del Cliente

| Rol | Nombre | Dedicación esperada |
|---|---|---|
| Product Owner | {{NOMBRE}} | 4 hrs/semana mínimo |
| SME negocio | {{NOMBRE}} | 2 hrs/semana |
| Técnico (integraciones) | {{NOMBRE}} | Según necesidad |
| Stakeholder ejecutivo | {{NOMBRE}} | Sprint reviews |

## 8. Herramientas y Accesos Requeridos

El Cliente proveerá al Proveedor acceso a:

- Repositorio Git (GitHub / GitLab / Bitbucket)
- Ambiente cloud (cuenta Cloudflare / AWS / GCP / Azure)
- Base de datos destino (credenciales de desarrollo y staging)
- Herramientas de comunicación: Slack compartido
- Herramientas de gestión: Linear / Jira / Trello (opcional)
- Dashboard privado de GlassPlane (Proveedor lo setup)

## 9. Riesgos Identificados

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| {{RIESGO_1}} | {{A/M/B}} | {{A/M/B}} | {{MITIGACION}} |
| {{RIESGO_2}} | {{A/M/B}} | {{A/M/B}} | {{MITIGACION}} |

Riesgos genéricos comunes:
- Cambios de alcance durante el proyecto → procedimiento de change request en cláusula 10
- Retrasos del Cliente en revisar entregables → pausa del cronograma con pro-rata
- Dependencia de sistemas legacy → incluir fase de spike técnico inicial
- Cambio regulatorio durante el proyecto → GlassPlane alerta automáticamente, se acuerda ajuste

## 10. Change Requests

Cualquier cambio al alcance definido en este SOW debe formalizarse mediante un **Change Request (CR)** escrito que describa:

1. Cambio propuesto
2. Impacto en cronograma
3. Impacto en precio
4. Impacto en compliance gate

El CR debe ser firmado por ambas Partes antes de su ejecución. Los CR que impliquen más de **15% de incremento del valor del SOW** requieren un addendum formal.

## 11. Aceptación del SOW

Al firmar este documento, las Partes confirman:

- Que el alcance descrito en la sección 2 refleja el entendimiento común del trabajo a realizar
- Que los entregables de la sección 3 son realistas y verificables
- Que el Gate Contractual de la sección 4 es alcanzable con los recursos asignados
- Que el cronograma de la sección 5 considera los riesgos de la sección 9
- Que el precio de la sección 6 es el total del SOW

---

**En constancia, las Partes firman este SOW el día {{DIA}} de {{MES}} de {{AÑO}}.**

<br>

| **Por XCloud Solutions S.A.S.** | **Por {{CLIENTE_RAZON_SOCIAL}}** |
|---|---|
| | |
| _______________________________ | _______________________________ |
| Alejandro Forero | {{CLIENTE_REPRESENTANTE}} |
| Representante Legal | {{CLIENTE_CARGO}} |

---

*Documento confidencial — OSSFIA SOW Template v1.0 — XCloud Solutions 2026*
