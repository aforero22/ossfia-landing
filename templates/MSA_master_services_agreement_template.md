# Master Services Agreement (MSA)
## Contrato Marco de Servicios de Desarrollo de Software bajo OSSFIA

**Entre**: XCloud Solutions S.A.S. (NIT {{NIT}}), en adelante **"Proveedor"** o **"XCloud"**
**Y**: {{CLIENTE_RAZON_SOCIAL}} (NIT {{CLIENTE_NIT}}), en adelante **"Cliente"**

Las Partes acuerdan regir todos los servicios profesionales de desarrollo de software bajo la metodología **OSSFIA (AI Software Factory OS)** por los siguientes términos. Cada proyecto o iniciativa específica se documentará en un **Statement of Work (SOW)** anexo que hace parte integral de este MSA.

---

## 1. Definiciones

| Término | Definición |
|---|---|
| **OSSFIA** | Metodología propietaria de XCloud compuesta por el Agentic Development Life Cycle (ADLC) de 10 fases, 16 dimensiones de compliance, 10 categorías DLP, 19 módulos de Inteligencia Invisible y enforcement automatizado. |
| **ADLC** | Agentic Development Life Cycle — ciclo de desarrollo de 10 fases (F01 a F10) agrupadas en 3 macro-etapas (Pensar / Construir / Operar). |
| **Gate** | Punto formal de verificación entre fases del ADLC (A, B, C, D, E, F). |
| **FAB** | Fullstack Agent Builder — célula de desarrollo compuesta por N agentes autónomos especializados + humanos supervisando. |
| **GlassPlane** | Herramienta propietaria de XCloud que mide compliance de repositorios en 16 dimensiones y emite scorecards. |
| **AURA** | Capa de IA visible de interacción con usuario final (asistente conversacional). |
| **SOW** | Statement of Work — anexo que describe un proyecto específico con alcance, precio, tiempo y criterios de aceptación. |
| **Sprint** | Iteración de trabajo de 2 semanas con entregables concretos. |
| **Entregable** | Producto de trabajo definido en un SOW (código, documento, configuración, deployment). |
| **Scorecard** | Reporte de GlassPlane con puntuación 0-100 por dimensión y grado (Critical / Bronze / Silver / Gold / Platinum). |

## 2. Objeto del Contrato

El Cliente contrata al Proveedor para la prestación de servicios profesionales de diseño, construcción, prueba, deployment y operación de software bajo la metodología OSSFIA, en las modalidades descritas en el artículo 4 y los detalles específicos de cada SOW.

## 3. Vigencia

Este MSA entra en vigor el **{{FECHA_INICIO}}** y permanecerá vigente por un período inicial de **doce (12) meses**, renovable automáticamente por períodos iguales salvo notificación en contrario con al menos **treinta (30) días** de anticipación.

Los SOW individuales tendrán su propia vigencia según lo establezcan, siempre dentro del marco de este MSA.

## 4. Modalidades de Servicio

Las Partes pueden contratar los servicios bajo una o varias de las siguientes modalidades, según se defina en cada SOW:

### 4.1 Retainer "Factory as a Service"

Equipo dedicado (humanos + FABs) entregando de forma continua bajo un acuerdo mensual. Tres niveles estándar:

| Nivel | Precio/mes | Equipo | Sprints/mes | Compromiso mínimo | Gate contractual |
|---|---|---|---|---|---|
| **Starter** | USD 15.000 | 2 humanos + 3 FABs | 1 sprint de 2 semanas | 3 meses | GlassPlane ≥ Plata (61-80) |
| **Growth** | USD 25.000 | 4 humanos + 6 FABs | 2 sprints de 2 semanas | 6 meses | GlassPlane ≥ Oro (81-95) |
| **Enterprise** | desde USD 40.000 | 6+ humanos + FABs ilimitados | Continuous delivery | 12 meses | GlassPlane ≥ Oro + drills semanales |

### 4.2 Fixed-Price por Fase ADLC

El Cliente puede contratar fases específicas del ADLC a precio fijo:

| Fase | Entregables | Precio referencial |
|---|---|---|
| F01 Strategy & Problem Framing | Business case, riesgos, ADRs iniciales | desde USD 8.000 |
| F02 Domain & Capability Discovery | Mapa de capacidades, bounded contexts | desde USD 10.000 |
| F03 Context & Knowledge Design | Estrategia RAG, trust model, ontologías | desde USD 10.000 |
| F04 AI/Deterministic Architecture | ADRs completos, blueprint, evaluación II | desde USD 12.000 |
| F05 Data, Knowledge & Contract Engineering | OpenAPI, schemas, diccionario de datos | desde USD 15.000 |
| F06 AI-Assisted Build | Software funcionando + tests + tooling | desde USD 30.000 hasta 80.000 |
| F07 Continuous TEVV | Eval framework, scorecards, golden datasets | desde USD 15.000 |
| F08 Security, Compliance & Governance | Matriz compliance, AIBOM, SBOM, DLP policies | desde USD 18.000 |
| F09 Deploy, Operate & GenOps | Dashboards, SLOs, runbooks, kill switch | desde USD 20.000 |
| F10 Learn & Evolve | Backlog mejora, evolución harness, feedback loops | desde USD 10.000 |

### 4.3 Outcome-Based

Precio fijo por módulo/feature entregado, con bonus/penalty atados al scorecard de GlassPlane:

- **Base**: USD X por entregable aceptado
- **Bonus**: +10% si GlassPlane score ≥ 90
- **Penalty**: -10% si GlassPlane score < 75

Los outcomes, scoring y valores específicos se definen en cada SOW.

## 5. Cláusula de Compliance Gate (CLÁUSULA DIFERENCIAL OSSFIA)

**Esta cláusula es característica diferencial de los servicios bajo OSSFIA y forma parte esencial del contrato.**

### 5.1 Medición obligatoria

El Proveedor se compromete a que cada entrega relevante (sprint, fase o release) sea sometida a un escaneo automático de GlassPlane sobre 16 dimensiones de compliance, incluyendo sin limitarse a:

1. Framework Compliance (OSSFIA)
2. Gate Progression
3. Data Governance
4. Security Posture
5. SAST/SCA
6. OWASP Agentic Security
7. EU AI Act
8. AI Governance (ISO 42001, NIST)
9. Delivery Performance (DORA + SPACE)
10. Spec Coverage
11. Singapore MGF
12. Colombia AI Ethics (CONPES 4144)
13. FinOps Governance
14. NIST Agent Compliance
15. Task-Flow Enforcement
16. AI Data Protection (cross-cutting DLP 10 categorías)

### 5.2 Umbral contractual

Cada SOW definirá un **Gate Contractual** que es el score mínimo exigido de GlassPlane para que una entrega sea considerada aceptable:

- **Plata** (61-80): umbral mínimo para tier Starter
- **Oro** (81-95): umbral mínimo para tier Growth y Enterprise
- **Platino** (96-100): umbral opcional con bonus

### 5.3 Consecuencias

- Si una entrega está **por encima del Gate**, se considera aceptada (salvo observaciones del Cliente dentro del plazo de revisión).
- Si una entrega está **por debajo del Gate**, el Proveedor remediará las observaciones sin costo adicional dentro del sprint siguiente, y la entrega no se factura hasta que alcance el umbral contractual.
- Si el Proveedor no remedia en **dos (2) sprints consecutivos**, el Cliente puede terminar el SOW sin penalidad, conservando los entregables ya aceptados.

### 5.4 Evidencia

El Cliente tendrá acceso en tiempo real al dashboard privado de GlassPlane correspondiente a sus proyectos, con login individualizado. Los scorecards son trazables, firmados digitalmente, y pueden ser compartidos con auditores externos del Cliente.

### 5.5 Continuous Conformity Monitoring (incluido en tier Growth y Enterprise)

Para engagements en tier **Growth** y **Enterprise**, el Proveedor implementará **Continuous Conformity Monitoring** sobre la aplicación del Cliente, consistente en:

1. **Ejecución automatizada de flows críticos** vía Cloudflare Browser Run (GA abril 2026):
   - Frecuencia mínima: cada 6 horas (configurable por SOW)
   - Mínimo 3 flows críticos monitoreados (Growth) o 7+ flows (Enterprise)
   - Cada ejecución realizada por un agente AI navegando la aplicación como usuario real
   - Incluye validación semántica de outputs LLM cuando aplique (ej: AURA chat)

2. **Session recordings como evidencia auditable**:
   - Grabación completa de DOM, mouse, keyboard, network de cada ejecución
   - Retention staggered: 30 días full recording + 90 días sampled + 365 días metadata only
   - Cifrado AES-256 en reposo (Cloudflare R2)
   - Firma digital Ed25519 por cada recording (Enterprise)
   - Acceso del Cliente vía dashboard privado GlassPlane

3. **SLA de alertas**:
   - Flows marcados `critical`: alerta al webhook del Cliente en máximo **30 minutos** desde el fallo
   - Flows marcados `high`: alerta en máximo **2 horas**
   - Flows marcados `medium`/`low`: incluidos en reporte diario
   - Escalación a 3 niveles si no hay acknowledgment en los tiempos pactados

4. **Reporte mensual auto-generado**:
   - Total de ejecuciones + pass rate agregado
   - Listado de fallas con root cause y tiempo de resolución
   - Mapeo a tags regulatorios aplicables (ISO 42001 Annex B, EU AI Act Art. 72, Ley 1581, SOC 2)
   - Firmado digitalmente y entregable directo al Compliance Officer del Cliente
   - Formato PDF + HTML + JSON para integración con herramientas GRC del Cliente

5. **Cumplimiento regulatorio específico**:
   - **ISO 42001 Annex B** (meaningful human oversight): cada Session Recording es evidencia viva
   - **EU AI Act Art. 72** (post-market monitoring plan): los reportes mensuales satisfacen esta obligación
   - **EU AI Act Art. 14** (human oversight measures): Human-in-the-Loop handoff documentado en cada flow crítico
   - **SOC 2 Type II** (continuous monitoring): las ejecuciones cada 6h son evidence de conformidad operativa

6. **Responsabilidad del Cliente bajo este punto 5.5**:
   - Proveer un ambiente staging estable donde corran los flows monitoreados
   - Proveer data sintética para los golden datasets (el Proveedor asiste en diseñarla)
   - Designar un webhook endpoint activo para recibir alertas (o usar el default email)
   - Revisar los reportes mensuales y actuar sobre los findings

Este servicio **no tiene costo adicional** sobre el retainer mensual del tier Growth/Enterprise. El Proveedor asume los costos de infraestructura Cloudflare Workers + R2 + Browser Run dentro del retainer pactado.

## 6. Obligaciones del Proveedor

El Proveedor se compromete a:

1. Asignar el equipo dimensionado según el SOW y mantenerlo estable durante su vigencia.
2. Seguir la metodología OSSFIA en la ejecución de todos los trabajos.
3. Entregar el software con scorecard de GlassPlane cumpliendo el Gate Contractual pactado.
4. Realizar los entregables secundarios descritos en cada SOW (documentación, tests, ADRs, AIBOM, SBOM, runbooks, etc.).
5. Reportar semanalmente avance, cost burndown, blockers y decisiones arquitectónicas tomadas.
6. Mantener confidencialidad sobre la información del Cliente (ver NDA anexo).
7. Cumplir con la Ley 1581 de 2012 y demás normativa aplicable sobre protección de datos personales.

## 7. Obligaciones del Cliente

El Cliente se compromete a:

1. Designar un **Product Owner** o equivalente con poder de decisión y disponibilidad mínima de 4 horas semanales.
2. Proveer acceso oportuno a la información, sistemas, repositorios, ambientes y stakeholders necesarios.
3. Revisar los entregables dentro de los **cinco (5) días hábiles** siguientes a su presentación y emitir observaciones formales o aprobación.
4. Pagar las facturas en los términos del artículo 10.
5. No solicitar al equipo del Proveedor actividades fuera del alcance del SOW vigente sin pactar un nuevo alcance.
6. No contratar directamente a personal del Proveedor durante la vigencia del MSA y hasta **doce (12) meses** después de su terminación.

## 8. Propiedad Intelectual

### 8.1 Trabajos del Proyecto

Los entregables específicos del Cliente (código fuente, documentación, diseños, configuraciones creadas exclusivamente para el proyecto) son de **propiedad del Cliente** una vez pagadas las facturas correspondientes, excepto por lo dispuesto en 8.2.

### 8.2 Herramientas, Metodología y Framework del Proveedor

La metodología **OSSFIA**, sus 10 fases ADLC, 16 dimensiones de compliance, 10 categorías DLP, 19 módulos de Inteligencia Invisible, los 34 scripts de enforcement, las marcas **GlassPlane**, **AURA**, **FAB**, y cualquier librería, framework, plantilla o componente genérico preexistente o desarrollado durante el proyecto para uso general, son y permanecen como **propiedad exclusiva de XCloud Solutions S.A.S.**

El Cliente recibe una **licencia perpetua, no exclusiva, no transferible** para usar estos componentes como parte del software entregado.

### 8.3 Uso del nombre del Cliente

El Proveedor podrá mencionar al Cliente como referencia comercial (nombre, logo, descripción del proyecto en términos generales) en su sitio web, presentaciones y propuestas, **salvo que el Cliente lo prohíba expresamente por escrito**. El uso detallado de información sensible requiere autorización explícita.

## 9. Confidencialidad

Se suscribe un NDA Mutuo anexo a este MSA que forma parte integral del mismo.

## 10. Facturación y Pagos

### 10.1 Moneda y forma

Las facturas se emiten en **dólares americanos (USD)** o su equivalente en pesos colombianos (COP) a la TRM del día de emisión, según lo pacte cada SOW.

### 10.2 Frecuencia

- **Retainer**: facturación mensual anticipada, el primer día hábil de cada mes.
- **Fixed-price por fase**: 50% al iniciar la fase, 50% al aceptar el entregable.
- **Outcome-based**: contra aceptación formal de cada outcome.

### 10.3 Plazo de pago

**Treinta (30) días calendario** a partir de la fecha de la factura. El retraso en el pago genera intereses moratorios a la tasa máxima legal permitida y suspende las obligaciones del Proveedor hasta el pago completo.

### 10.4 Impuestos

Los precios no incluyen IVA, retenciones en la fuente, ni otros impuestos. Cada Parte es responsable de sus obligaciones tributarias según la legislación colombiana.

## 11. Limitación de Responsabilidad

La responsabilidad total del Proveedor frente al Cliente por cualquier reclamo derivado de este MSA o de los SOW está limitada al **monto efectivamente pagado por el Cliente al Proveedor en los doce (12) meses anteriores** al evento que origina la reclamación.

Ninguna Parte será responsable por daños indirectos, lucro cesante, pérdida de datos (más allá de la obligación de hacer backups razonables según las prácticas de OSSFIA), o daños consecuenciales.

Esta limitación **no aplica** a casos de dolo, culpa grave, violación de confidencialidad, violación de propiedad intelectual, o incumplimiento de obligaciones sobre datos personales.

## 12. Garantías

### 12.1 Garantía del servicio

El Proveedor garantiza que los servicios se prestarán con la diligencia profesional razonable de la industria y siguiendo la metodología OSSFIA.

### 12.2 Ausencia de garantías implícitas

Los entregables se proveen "tal cual" después del período de garantía. El Proveedor no garantiza que el software sea libre de errores, ni que cumpla fines distintos a los pactados en el SOW.

### 12.3 Período de corrección de defectos

Durante **treinta (30) días calendario** siguientes a la aceptación de un entregable, el Proveedor corregirá sin costo los defectos reportados por el Cliente que no sean atribuibles a cambios hechos por el Cliente o terceros.

## 13. Terminación

### 13.1 Por mutuo acuerdo

Las Partes pueden terminar este MSA o cualquier SOW en cualquier momento por mutuo acuerdo escrito.

### 13.2 Por conveniencia

Cualquier Parte puede terminar sin causa dando **treinta (30) días** de aviso previo por escrito. El Cliente pagará los servicios prestados hasta la fecha efectiva de terminación.

### 13.3 Por incumplimiento

Una Parte puede terminar inmediatamente si la otra incumple obligaciones materiales y no remedia el incumplimiento dentro de los **quince (15) días** siguientes a la notificación escrita del mismo.

### 13.4 Efectos de la terminación

Al terminar: (a) el Cliente paga todo lo debido, (b) el Proveedor entrega todo el material y accesos, (c) las obligaciones de confidencialidad y PI sobreviven según sus propios plazos, (d) se suspenden todos los SOW vigentes.

## 14. Fuerza Mayor

Ninguna Parte será responsable por incumplimientos causados por fuerza mayor (desastres naturales, guerra, pandemia, fallas masivas de infraestructura). La Parte afectada deberá notificar a la otra y hacer esfuerzos razonables para mitigar los efectos.

## 15. Resolución de Controversias

### 15.1 Negociación directa

Las Partes intentarán resolver cualquier controversia por negociación directa entre sus representantes legales dentro de los **quince (15) días** siguientes a la notificación formal del conflicto.

### 15.2 Mediación / Arbitraje

Si la negociación falla, las Partes someten la controversia a **arbitraje ante el Centro de Arbitraje y Conciliación de la Cámara de Comercio de Bogotá**, con tribunal único, en idioma español, aplicando la ley colombiana. El laudo es definitivo e inapelable.

### 15.3 Excepción

Las acciones relacionadas con propiedad intelectual, confidencialidad y medidas cautelares pueden presentarse directamente ante la jurisdicción ordinaria colombiana.

## 16. Disposiciones Finales

- **Acuerdo completo**: este MSA, sus anexos y los SOW vigentes constituyen el acuerdo completo entre las Partes.
- **Modificaciones**: cualquier cambio debe hacerse por escrito y firmado por ambas Partes.
- **Cesión**: ninguna Parte puede ceder sus derechos sin consentimiento escrito de la otra.
- **Notificaciones**: se envían a los emails de contacto oficiales de cada Parte (ver NDA).
- **Independencia de cláusulas**: si alguna disposición es inválida, las demás permanecen en vigor.
- **Idioma**: el idioma oficial del contrato es español. Cualquier traducción es referencial.

---

**En constancia, las Partes firman este MSA el día {{DIA}} de {{MES}} de {{AÑO}}.**

<br>

| **Por XCloud Solutions S.A.S.** | **Por {{CLIENTE_RAZON_SOCIAL}}** |
|---|---|
| | |
| _______________________________ | _______________________________ |
| Alejandro Forero | {{CLIENTE_REPRESENTANTE}} |
| Representante Legal | {{CLIENTE_CARGO}} |
| CC {{ALEJANDRO_CC}} | CC {{CLIENTE_CC}} |

---

## Anexos

- **Anexo A**: NDA Mutuo (referencia `NDA_mutual_template.md`)
- **Anexo B**: SOW #001 (primer alcance específico — usar plantilla `SOW_template.md`)
- **Anexo C**: Política de manejo de datos personales (Ley 1581 / GDPR)

---

*Documento confidencial — OSSFIA MSA Template v1.0 — XCloud Solutions 2026*
*Este template es una base legal preliminar. Antes de firmar un contrato real, revisar con abogado comercial.*
