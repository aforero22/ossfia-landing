const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
} = require('docx');

const OUT = path.join(__dirname, 'NDA_TICON_2026-04.docx');

const FONT = 'Arial';
const border = { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' };
const borders = { top: border, bottom: border, left: border, right: border };

// Helpers -------------------------------------------------------------
const T = (text, opts = {}) => new TextRun({ text, font: FONT, ...opts });

function bodyRuns(parts) {
  return parts.map(p =>
    typeof p === 'string'
      ? T(p)
      : T(p.text, { bold: !!p.bold, italics: !!p.italics })
  );
}

function body(parts, opts = {}) {
  return new Paragraph({
    spacing: { after: 120, line: 300 },
    alignment: AlignmentType.JUSTIFIED,
    children: Array.isArray(parts) ? bodyRuns(parts) : [T(parts)],
    ...opts,
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 32 })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 26, color: '1F3864' })],
  });
}

function hr() {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '808080', space: 1 } },
    children: [T('')],
  });
}

function bullet(parts, level = 0) {
  return new Paragraph({
    numbering: { reference: 'bullets', level },
    spacing: { after: 80, line: 280 },
    alignment: AlignmentType.JUSTIFIED,
    children: Array.isArray(parts) ? bodyRuns(parts) : [T(parts)],
  });
}

function numbered(parts) {
  return new Paragraph({
    numbering: { reference: 'numbers', level: 0 },
    spacing: { after: 80, line: 280 },
    alignment: AlignmentType.JUSTIFIED,
    children: Array.isArray(parts) ? bodyRuns(parts) : [T(parts)],
  });
}

function letterItem(letter, parts) {
  return new Paragraph({
    spacing: { after: 80, line: 280 },
    alignment: AlignmentType.JUSTIFIED,
    indent: { left: 720, hanging: 360 },
    children: [
      T(`${letter}.  `, { bold: true }),
      ...bodyRuns(parts),
    ],
  });
}

function tableCell(text, opts = {}) {
  const { bold = false, shading = null, width = 4680, align = AlignmentType.LEFT } = opts;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    shading: shading ? { fill: shading, type: ShadingType.CLEAR } : undefined,
    children: [new Paragraph({
      alignment: align,
      children: [new TextRun({ text, font: FONT, bold, size: 22 })],
    })],
  });
}

// Document content ----------------------------------------------------
const children = [];

// Title
children.push(h1('Acuerdo de Confidencialidad Mutuo (NDA)'));

// Parties
children.push(body([{ text: 'Entre:', bold: true }]));
children.push(body([
  { text: 'XCLOUD SOLUTIONS S.A.S.', bold: true },
  ' (NIT [NIT_XCLOUD]), con domicilio en Bogotá D.C., Colombia, representada legalmente por ',
  { text: 'ALEJANDRO FORERO', bold: true },
  ', identificado con C.C. [CC_ALEJANDRO] de Bogotá, quien actúa en virtud de sus facultades estatutarias, en adelante ',
  { text: '"XCLOUD"', bold: true },
  '.',
]));

children.push(body([{ text: 'Y:', bold: true }]));
children.push(body([
  { text: 'TI&CON S.A.S.', bold: true },
  ' (NIT 900.748.137-6), con domicilio en Bucaramanga, Santander, Colombia, representada legalmente por ',
  { text: 'JOHN GILBERTO ROSALES NUÑEZ', bold: true },
  ', mayor de edad, identificado con C.C. 91.215.975 de Bucaramanga, quien actúa en virtud de sus facultades estatutarias, en adelante ',
  { text: '"TI&CON"', bold: true },
  '.',
]));

children.push(body([
  'XCLOUD y TI&CON, conjuntamente las ',
  { text: '"Partes"', bold: true },
  ' e individualmente la ',
  { text: '"Parte"', bold: true },
  ', manifiestan y acuerdan:',
]));

children.push(hr());

// Considerations
children.push(h2('Consideraciones'));

children.push(numbered([
  'Que ',
  { text: 'XCLOUD', bold: true },
  ' es propietaria de la metodología ',
  { text: 'OSSFIA (AI-Driven Software Factory OS)', bold: true },
  ' y de herramientas propietarias derivadas, incluyendo — sin limitarse a — ',
  { text: 'GlassPlane', bold: true }, ', ',
  { text: 'AURA', bold: true }, ', los ',
  { text: 'FABs (Factory Agentic Blueprints)', bold: true },
  ', el framework ',
  { text: 'Baseline', bold: true },
  ' con sus 10 fases ADLC, 16 dimensiones de compliance, 10 categorías DLP, 19 módulos de Inteligencia Invisible, Work Agents/Executors, Task-Flow, y scripts de enforcement.',
]));
children.push(numbered([
  'Que ',
  { text: 'TI&CON', bold: true },
  ' cuenta con experiencia, portafolio de clientes, metodologías, herramientas propias y relaciones comerciales establecidas en el mercado colombiano.',
]));
children.push(numbered([
  'Que las Partes están explorando una relación de colaboración para el ',
  { text: 'desarrollo conjunto de soluciones de software propias y para terceros, basadas en la metodología OSSFIA', bold: true },
  ', lo cual requiere el intercambio bidireccional de información sensible.',
]));
children.push(numbered([
  'Que, en consecuencia, resulta necesario establecer un marco de confidencialidad ',
  { text: 'mutuo', bold: true },
  ' que proteja la información de ambas Partes antes, durante y con posterioridad a las conversaciones y eventuales contrataciones derivadas.',
]));

children.push(body('Bajo las anteriores consideraciones, las Partes acuerdan las siguientes cláusulas:'));
children.push(hr());

// Clause 1
children.push(h2('Cláusula 1. Objeto'));
children.push(body([
  'El presente Acuerdo tiene por objeto establecer los términos y condiciones bajo los cuales las Partes ',
  { text: 'intercambiarán de manera recíproca información confidencial', bold: true },
  ' para evaluar, estructurar y eventualmente ejecutar una ',
  { text: 'relación de colaboración comercial', bold: true },
  ' orientada al desarrollo conjunto de soluciones de software propias y para terceros, utilizando la metodología OSSFIA.',
]));

// Clause 2
children.push(h2('Cláusula 2. Definición de Información Confidencial'));
children.push(body([
  'Para efectos del presente Acuerdo, se entiende por ',
  { text: 'Información Confidencial', bold: true },
  ' toda información — en forma oral, escrita, digital, magnética o cualquier otro soporte — que una Parte (',
  { text: '"Parte Divulgadora"', bold: true },
  ') entregue, revele o ponga a disposición de la otra (',
  { text: '"Parte Receptora"', bold: true },
  ') con ocasión del objeto descrito en la Cláusula 1, incluyendo sin limitarse a:',
]));
children.push(letterItem('a', ['Documentación técnica, arquitecturas, código fuente, especificaciones, diagramas, esquemas, modelos de datos.']));
children.push(letterItem('b', ['Información comercial, financiera, estratégica, listas de clientes, listas de prospectos, tarifarios, márgenes, propuestas.']));
children.push(letterItem('c', ['La metodología ', { text: 'OSSFIA', bold: true }, ' y la totalidad de sus componentes, incluyendo GlassPlane, AURA, FABs, Baseline, Task-Flow, Work Agents/Executors, Inteligencia Invisible y scripts de enforcement.']));
children.push(letterItem('d', ['Metodologías, herramientas, procesos internos y know-how de TI&CON.']));
children.push(letterItem('e', ['Información personal de empleados, contratistas, afiliados, usuarios o clientes de cualquiera de las Partes, sujeta a Ley 1581 de 2012.']));
children.push(letterItem('f', ['Cualquier información intercambiada durante reuniones, videollamadas, correos, chats, propuestas, demostraciones y comunicaciones entre las Partes.']));
children.push(body([
  { text: 'No constituye Información Confidencial', bold: true },
  ' aquella información que: (a) sea o se convierta en dominio público sin culpa de la Parte Receptora; (b) fuera conocida previamente por la Parte Receptora sin obligación de confidencialidad, lo cual deberá poder demostrarse documentalmente; (c) sea desarrollada independientemente por la Parte Receptora sin uso de la Información Confidencial; (d) sea legítimamente recibida de un tercero sin obligación de confidencialidad.',
]));

// Clause 3
children.push(h2('Cláusula 3. Obligaciones de las Partes'));
children.push(body('Cada Parte, en su rol de Parte Receptora, se obliga a:'));
const obligations = [
  [{ text: 'Proteger', bold: true }, ' la Información Confidencial con al menos el mismo nivel de cuidado con que protege la propia, y nunca inferior al estándar razonable de la industria.'],
  [{ text: 'Usar', bold: true }, ' la Información Confidencial exclusivamente para el propósito descrito en la Cláusula 1.'],
  [{ text: 'Limitar', bold: true }, ' el acceso a la Información Confidencial a aquel personal, asesores o contratistas con necesidad legítima de conocerla, asegurando que estén sujetos a deberes de confidencialidad equivalentes por escrito.'],
  [{ text: 'No reproducir', bold: true }, ' la Información Confidencial más allá de lo estrictamente necesario para el objeto del Acuerdo.'],
  [{ text: 'No realizar ingeniería inversa', bold: true }, ', descompilación, desensamblaje ni cualquier intento de derivar el código fuente, estructura, algoritmos u operación interna de las herramientas, scripts o software proporcionados por la otra Parte.'],
  [{ text: 'Notificar inmediatamente', bold: true }, ' — y por escrito dentro de los tres (3) días hábiles siguientes al conocimiento — cualquier uso no autorizado, acceso indebido, pérdida o divulgación accidental de Información Confidencial.'],
  [{ text: 'Devolver o destruir', bold: true }, ' la Información Confidencial cuando la Parte Divulgadora lo solicite por escrito o al término del presente Acuerdo, certificando dicha devolución o destrucción.'],
];
obligations.forEach(parts => children.push(numbered(parts)));

// Clause 4
children.push(h2('Cláusula 4. Propiedad Intelectual Preexistente (Pre-existing IP)'));
children.push(body('Las Partes reconocen y aceptan expresamente que:'));
children.push(letterItem('a', [
  { text: 'OSSFIA', bold: true }, ', ',
  { text: 'GlassPlane', bold: true }, ', ',
  { text: 'AURA', bold: true }, ', ',
  { text: 'FAB', bold: true }, ', ',
  { text: 'Baseline', bold: true }, ', ',
  { text: 'Task-Flow', bold: true }, ', ',
  { text: 'Work Agents/Executors', bold: true }, ', la ',
  { text: 'Inteligencia Invisible (II)', bold: true },
  ', y la totalidad de marcas, nombres comerciales, código fuente, documentación y metodología asociadas, son ',
  { text: 'propiedad exclusiva y preexistente de XCLOUD', bold: true },
  '. Ninguna disposición del presente Acuerdo transfiere a TI&CON derecho, título, interés ni licencia alguna sobre dichos activos.',
]));
children.push(letterItem('b', [
  'Las ',
  { text: 'metodologías propias, herramientas internas, cartera de clientes, portafolio comercial, y demás activos intangibles preexistentes de TI&CON', bold: true },
  ' son de su propiedad exclusiva. Ninguna disposición del presente Acuerdo transfiere a XCLOUD derecho, título, interés ni licencia alguna sobre dichos activos.',
]));
children.push(letterItem('c', [
  'Ningún intercambio de Información Confidencial bajo el presente Acuerdo se entenderá como cesión, licencia, usufructo, concesión, préstamo ni autorización de uso, salvo para los fines limitados descritos en la Cláusula 1.',
]));

// Clause 5
children.push(h2('Cláusula 5. Producto de Trabajo Conjunto (Joint Work Product)'));
children.push(body([
  'Cualquier ',
  { text: 'desarrollo, producto, servicio, documento, código, metodología derivada u obra conjunta', bold: true },
  ' que resulte de la colaboración entre las Partes ',
  { text: 'requerirá la celebración previa de un contrato específico (MSA y/o SOW)', bold: true },
  ' en el que se definan expresamente:',
]));
children.push(letterItem('a', ['La titularidad de los derechos patrimoniales sobre el producto resultante.']));
children.push(letterItem('b', ['Las licencias cruzadas que apliquen.']));
children.push(letterItem('c', ['Los esquemas de remuneración, exclusividad y distribución.']));
children.push(body([
  'En ausencia de dicho contrato específico, ',
  { text: 'por defecto', bold: true },
  ' cada Parte conserva la titularidad exclusiva de los componentes que aportó en función de sus derechos preexistentes descritos en la Cláusula 4, y se abstendrá de explotar comercialmente de manera unilateral cualquier producto que incorpore aportes de la otra Parte.',
]));

// Clause 6
children.push(h2('Cláusula 6. No Elusión (Non-Circumvention)'));
children.push(body([
  'Durante la vigencia del presente Acuerdo y por un término adicional de ',
  { text: 'ciento ochenta (180) días calendario', bold: true },
  ' contados desde su terminación, cada Parte se obliga a ',
  { text: 'no contactar, solicitar, contratar ni cerrar negocios directamente con clientes, prospectos identificados, contrapartes ni aliados estratégicos de la otra Parte', bold: true },
  ' que le hayan sido presentados, referidos o revelados en el marco del presente Acuerdo, sin el consentimiento ',
  { text: 'previo, expreso y escrito', bold: true },
  ' de la Parte que hizo la presentación o revelación.',
]));
children.push(body('Esta obligación no aplica a relaciones comerciales preexistentes debidamente documentadas antes de la firma del presente Acuerdo, ni a contactos alcanzados por canales comerciales independientes demostrables.'));

// Clause 7
children.push(h2('Cláusula 7. No Solicitación de Personal (Non-Solicitation)'));
children.push(body([
  'Durante la vigencia del presente Acuerdo y por ',
  { text: 'doce (12) meses', bold: true },
  ' posteriores a su terminación, ninguna Parte contratará ni solicitará los servicios laborales, de consultoría o de contratista independiente, de empleados, socios o contratistas clave de la otra Parte con los que haya tenido contacto directo en el marco de este Acuerdo, sin consentimiento previo escrito.',
]));
children.push(body('Esta restricción no aplica a contrataciones derivadas de procesos de selección abiertos al público en general.'));

// Clause 8
children.push(h2('Cláusula 8. Conocimiento Residual (Residuals)'));
children.push(body([
  'Ninguna disposición del presente Acuerdo impedirá a los empleados, contratistas o asesores de las Partes utilizar las ',
  { text: 'habilidades generales, experiencia, ideas, conceptos y know-how retenidos en su memoria (residuals)', bold: true },
  ' desarrollados o adquiridos en el transcurso de sus labores, siempre que ello no implique el uso deliberado de Información Confidencial específica de la otra Parte ni infrinja sus derechos de propiedad intelectual.',
]));

// Clause 9
children.push(h2('Cláusula 9. Plazo y Supervivencia'));
children.push(body([
  'El presente Acuerdo tendrá una vigencia de ',
  { text: 'tres (3) años', bold: true },
  ' contados desde la fecha de su firma. Las obligaciones de confidencialidad sobrevivirán la terminación del Acuerdo por un período adicional de ',
  { text: 'cinco (5) años', bold: true },
  '; las obligaciones relacionadas con ',
  { text: 'secretos comerciales', bold: true },
  ' subsistirán mientras conserven dicho carácter bajo la legislación aplicable.',
]));

// Clause 10
children.push(h2('Cláusula 10. Datos Personales'));
children.push(body([
  'En caso de que el intercambio de Información Confidencial involucre datos personales, las Partes se obligan a cumplir íntegramente la ',
  { text: 'Ley 1581 de 2012', bold: true },
  ', el Decreto 1377 de 2013 y demás normas concordantes, así como con el ',
  { text: 'Reglamento General de Protección de Datos (GDPR)', bold: true },
  ' cuando aplique. Ninguna Parte podrá utilizar los datos personales para fines distintos al objeto del presente Acuerdo, ni transferirlos a terceros sin base legal suficiente.',
]));

// Clause 11
children.push(h2('Cláusula 11. Excepciones por Requerimiento Legal'));
children.push(body('Si una Parte es obligada por ley, orden judicial o autoridad competente a revelar Información Confidencial, deberá:'));
children.push(letterItem('a', ['Notificar por escrito a la otra Parte con al menos ', { text: 'diez (10) días calendario', bold: true }, ' de anticipación, cuando ello sea legalmente posible.']));
children.push(letterItem('b', ['Cooperar razonablemente para que la Parte Divulgadora pueda buscar medidas de protección u órdenes limitativas.']));
children.push(letterItem('c', ['Revelar únicamente la información estrictamente requerida por la autoridad.']));

// Clause 12
children.push(h2('Cláusula 12. Cláusula Penal Pecuniaria Mutua'));
children.push(body([
  'En caso de incumplimiento doloso o gravemente culposo de las obligaciones de confidencialidad, propiedad intelectual o no elusión pactadas, la Parte incumplida pagará a la Parte cumplida, a título de pena — y sin perjuicio de la indemnización integral de perjuicios que se logren demostrar — una suma equivalente a ',
  { text: 'CIENTO CINCUENTA MILLONES DE PESOS COLOMBIANOS ($150.000.000 COP)', bold: true },
  '.',
]));
children.push(body([
  'Esta pena aplica de manera ',
  { text: 'recíproca', bold: true },
  ' para ambas Partes. El presente Acuerdo prestará mérito ejecutivo para su cobro. La Parte cumplida podrá adicionalmente solicitar medidas cautelares inmediatas ante la autoridad competente.',
]));

// Clause 13
children.push(h2('Cláusula 13. Ausencia de Obligación Comercial'));
children.push(body([
  'El presente Acuerdo ',
  { text: 'no obliga a ninguna Parte', bold: true },
  ' a celebrar contratos comerciales posteriores, ni constituye oferta vinculante, promesa de sociedad, joint venture, franquicia, ni relación de agencia. Cada Parte permanece libre de continuar o terminar las conversaciones en cualquier momento, sin responsabilidad derivada de dicha decisión.',
]));

// Clause 14
children.push(h2('Cláusula 14. Cesión'));
children.push(body('Ninguna Parte podrá ceder total o parcialmente los derechos y obligaciones derivados del presente Acuerdo sin el consentimiento previo, expreso y escrito de la otra, salvo en casos de reorganización societaria, fusión o adquisición, previa notificación.'));

// Clause 15
children.push(h2('Cláusula 15. Ley Aplicable y Solución de Controversias'));
children.push(body([
  'El presente Acuerdo se rige por las leyes de la ',
  { text: 'República de Colombia', bold: true },
  '. Cualquier controversia o diferencia derivada del mismo será resuelta preferentemente mediante ',
  { text: 'arreglo directo', bold: true },
  ' durante treinta (30) días calendario. Si no se alcanza acuerdo, las Partes someterán la controversia al ',
  { text: 'Centro de Arbitraje y Conciliación de la Cámara de Comercio de Bogotá', bold: true },
  ', mediante tribunal arbitral compuesto por un (1) árbitro, en derecho, en castellano, con sede en Bogotá D.C.',
]));

// Clause 16 - table
children.push(h2('Cláusula 16. Notificaciones'));
children.push(body('Todas las notificaciones derivadas del presente Acuerdo serán enviadas por escrito a los siguientes canales:'));

const notifTable = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [2340, 3510, 3510],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        tableCell('', { shading: 'D9E2F3', width: 2340 }),
        tableCell('XCLOUD SOLUTIONS S.A.S.', { bold: true, shading: 'D9E2F3', width: 3510, align: AlignmentType.CENTER }),
        tableCell('TI&CON S.A.S.', { bold: true, shading: 'D9E2F3', width: 3510, align: AlignmentType.CENTER }),
      ],
    }),
    new TableRow({
      children: [
        tableCell('Email principal', { bold: true, width: 2340 }),
        tableCell('hola@ossfia.ai', { width: 3510 }),
        tableCell('contacto@ticon.com.co', { width: 3510 }),
      ],
    }),
    new TableRow({
      children: [
        tableCell('Representante', { bold: true, width: 2340 }),
        tableCell('Alejandro Forero', { width: 3510 }),
        tableCell('John Gilberto Rosales Nuñez', { width: 3510 }),
      ],
    }),
    new TableRow({
      children: [
        tableCell('Ciudad', { bold: true, width: 2340 }),
        tableCell('Bogotá D.C.', { width: 3510 }),
        tableCell('Bucaramanga', { width: 3510 }),
      ],
    }),
  ],
});
children.push(notifTable);
children.push(body('Las notificaciones enviadas por correo electrónico a las direcciones anteriores se entenderán recibidas el día hábil siguiente al de su envío.'));

// Clause 17
children.push(h2('Cláusula 17. Disposiciones Finales'));
children.push(letterItem('a', ['El presente Acuerdo constituye el ', { text: 'entendimiento completo', bold: true }, ' entre las Partes respecto de la materia regulada, y sustituye cualquier acuerdo previo verbal o escrito sobre el mismo objeto.']));
children.push(letterItem('b', ['Cualquier ', { text: 'modificación', bold: true }, ' debe constar por escrito y estar firmada por los representantes legales de ambas Partes.']));
children.push(letterItem('c', ['La ', { text: 'invalidez', bold: true }, ' de alguna disposición no afectará la validez de las demás, que permanecerán en pleno vigor.']));
children.push(letterItem('d', ['La ', { text: 'tolerancia', bold: true }, ' de una Parte frente al incumplimiento de la otra no implica renuncia a exigir el cumplimiento posterior.']));
children.push(letterItem('e', ['El presente Acuerdo podrá firmarse mediante ', { text: 'firma electrónica', bold: true }, ' (ZohoSign, DocuSign, o equivalente), teniendo plena validez legal conforme a la Ley 527 de 1999.']));

children.push(hr());

// Signatures
children.push(body([
  { text: 'En constancia de aceptación', bold: true },
  ', las Partes firman el presente Acuerdo el día [DIA] del mes de [MES] de dos mil veintiséis (2026), en dos (2) originales del mismo tenor, uno para cada Parte.',
]));

children.push(new Paragraph({ spacing: { before: 600 }, children: [T('')] }));

const sigTable = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [4680, 4680],
  rows: [
    new TableRow({
      children: [
        tableCell('Por XCLOUD SOLUTIONS S.A.S.', { bold: true, shading: 'D9E2F3', width: 4680, align: AlignmentType.CENTER }),
        tableCell('Por TI&CON S.A.S.', { bold: true, shading: 'D9E2F3', width: 4680, align: AlignmentType.CENTER }),
      ],
    }),
    new TableRow({
      height: { value: 1200, rule: 'exact' },
      children: [
        tableCell('', { width: 4680 }),
        tableCell('', { width: 4680 }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          borders, width: { size: 4680, type: WidthType.DXA },
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '_______________________________', font: FONT, size: 22 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'ALEJANDRO FORERO', font: FONT, bold: true, size: 22 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'C.C. [CC_ALEJANDRO]', font: FONT, size: 22 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Representante Legal', font: FONT, size: 22 })] }),
          ],
        }),
        new TableCell({
          borders, width: { size: 4680, type: WidthType.DXA },
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '_______________________________', font: FONT, size: 22 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'JOHN GILBERTO ROSALES NUÑEZ', font: FONT, bold: true, size: 22 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'C.C. 91.215.975 de Bucaramanga', font: FONT, size: 22 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Representante Legal', font: FONT, size: 22 })] }),
          ],
        }),
      ],
    }),
  ],
});
children.push(sigTable);

children.push(new Paragraph({ spacing: { before: 480 }, children: [T('')] }));
children.push(hr());
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({
    text: 'Documento confidencial — NDA Mutuo XCloud ↔ TI&CON — derivado de OSSFIA NDA Mutual Template v1.0 — XCloud Solutions 2026',
    font: FONT, size: 18, italics: true, color: '808080',
  })],
}));

// Document ------------------------------------------------------------
const doc = new Document({
  creator: 'XCloud Solutions S.A.S.',
  title: 'NDA Mutuo XCloud ↔ TI&CON',
  description: 'Acuerdo de Confidencialidad Mutuo entre XCloud Solutions S.A.S. y TI&CON S.A.S.',
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, font: FONT, color: '1F3864' },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, font: FONT, color: '1F3864' },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullets',
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        ] },
      { reference: 'numbers',
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        ] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({
            text: 'NDA Mutuo — XCloud \u2194 TI&CON',
            font: FONT, size: 18, color: '808080',
          })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: 'Página ', font: FONT, size: 18, color: '808080' }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18, color: '808080' }),
            new TextRun({ text: ' de ', font: FONT, size: 18, color: '808080' }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 18, color: '808080' }),
          ],
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUT, buffer);
  console.log(`OK: ${OUT} (${buffer.length} bytes)`);
}).catch(err => {
  console.error('FAIL:', err);
  process.exit(1);
});
