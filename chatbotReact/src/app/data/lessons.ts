export interface LessonContent {
  id: number;
  title: string;
  description: string;
  topic: string;
  type: 'drag-drop' | 'matching' | 'sequence' | 'true-false' | 'fill-blank' | 'multiple-choice';
  content: any;
}

export const lessonContents: LessonContent[] = [
  {
    id: 1,
    title: "Señales de tránsito básicas",
    description: "Aprende sobre señales de pare, ceda y precaución",
    topic: "Señales de tránsito",
    type: 'drag-drop',
    content: {
      instruction: "Arrastra cada señal a su categoría correcta",
      categories: [
        { id: 'preventivas', name: 'Preventivas', color: 'yellow' },
        { id: 'reglamentarias', name: 'Reglamentarias', color: 'red' },
        { id: 'informativas', name: 'Informativas', color: 'blue' }
      ],
      items: [
        { id: 1, text: 'Triángulo amarillo con curva', category: 'preventivas' },
        { id: 2, text: 'Octágono rojo ALTO', category: 'reglamentarias' },
        { id: 3, text: 'Rectángulo verde con flecha', category: 'informativas' },
        { id: 4, text: 'Triángulo amarillo con niños', category: 'preventivas' },
        { id: 5, text: 'Círculo rojo con velocidad', category: 'reglamentarias' },
        { id: 6, text: 'Rectángulo azul con H', category: 'informativas' }
      ]
    }
  },
  {
    id: 2,
    title: "Límites de velocidad",
    description: "Velocidades máximas en diferentes zonas",
    topic: "Límites de velocidad",
    type: 'matching',
    content: {
      instruction: "Une cada zona con su límite de velocidad correcto",
      pairs: [
        { id: 1, left: 'Zona urbana', right: '60 km/h' },
        { id: 2, left: 'Zona escolar', right: '25 km/h' },
        { id: 3, left: 'Zona residencial', right: '40 km/h' },
        { id: 4, left: 'Carretera nacional', right: '80 km/h' },
        { id: 5, left: 'Autopista', right: '100 km/h' }
      ]
    }
  },
  {
    id: 3,
    title: "Semáforos y señales luminosas",
    description: "Interpretación correcta de luces de tráfico",
    topic: "Señales de tránsito",
    type: 'true-false',
    content: {
      instruction: "Indica si cada afirmación es verdadera o falsa",
      statements: [
        { id: 1, text: 'La luz verde significa avanzar con precaución', answer: true },
        { id: 2, text: 'En luz amarilla debes acelerar para pasar', answer: false },
        { id: 3, text: 'La luz roja significa alto total obligatorio', answer: true },
        { id: 4, text: 'Puedes girar a la derecha en luz roja sin detenerte', answer: false },
        { id: 5, text: 'La luz verde intermitente indica precaución al cruzar', answer: true },
        { id: 6, text: 'La flecha verde permite girar en esa dirección', answer: true }
      ]
    }
  },
  {
    id: 4,
    title: "Documentación requerida",
    description: "Licencia, marchamo y seguro obligatorio",
    topic: "Documentación",
    type: 'multiple-choice',
    content: {
      instruction: "Selecciona todas las respuestas correctas",
      questions: [
        {
          id: 1,
          question: "¿Qué documentos debes portar al conducir?",
          options: [
            { id: 1, text: 'Licencia de conducir', correct: true },
            { id: 2, text: 'Marchamo vigente', correct: true },
            { id: 3, text: 'Póliza de seguro', correct: true },
            { id: 4, text: 'Certificado de nacimiento', correct: false }
          ]
        },
        {
          id: 2,
          question: "¿Cuándo debes renovar tu licencia B1?",
          options: [
            { id: 1, text: 'Cada 2 años', correct: false },
            { id: 2, text: 'Cada 6 años', correct: true },
            { id: 3, text: 'Cada 10 años', correct: false },
            { id: 4, text: 'Nunca expira', correct: false }
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Maniobras seguras",
    description: "Adelantamiento, retroceso y cambio de carril",
    topic: "Maniobras",
    type: 'sequence',
    content: {
      instruction: "Ordena los pasos para adelantar de forma segura",
      steps: [
        { id: 1, text: 'Verificar que hay distancia suficiente (150m)', order: 1 },
        { id: 2, text: 'Activar luz direccional izquierda', order: 2 },
        { id: 3, text: 'Verificar espejo y punto ciego', order: 3 },
        { id: 4, text: 'Cambiar al carril izquierdo', order: 4 },
        { id: 5, text: 'Acelerar y completar el adelantamiento', order: 5 },
        { id: 6, text: 'Activar direccional derecha y regresar al carril', order: 6 }
      ]
    }
  },
  {
    id: 6,
    title: "Señalización horizontal",
    description: "Líneas, cebras y marcas en el pavimento",
    topic: "Señalización horizontal",
    type: 'drag-drop',
    content: {
      instruction: "Arrastra cada tipo de línea a su significado",
      categories: [
        { id: 'permitido', name: 'Adelantar permitido', color: 'green' },
        { id: 'prohibido', name: 'Adelantar prohibido', color: 'red' },
        { id: 'especial', name: 'Zona especial', color: 'blue' }
      ],
      items: [
        { id: 1, text: 'Línea blanca discontinua', category: 'permitido' },
        { id: 2, text: 'Línea amarilla continua', category: 'prohibido' },
        { id: 3, text: 'Doble línea amarilla', category: 'prohibido' },
        { id: 4, text: 'Líneas de cebra blancas', category: 'especial' },
        { id: 5, text: 'Línea blanca continua', category: 'prohibido' },
        { id: 6, text: 'Línea amarilla discontinua', category: 'permitido' }
      ]
    }
  },
  {
    id: 7,
    title: "Uso correcto de luces",
    description: "Luces altas, bajas, direccionales y emergencia",
    topic: "Uso de luces",
    type: 'matching',
    content: {
      instruction: "Une cada situación con el tipo de luz correcto",
      pairs: [
        { id: 1, left: 'Conducir en lluvia', right: 'Luces bajas' },
        { id: 2, left: 'Carretera sin tráfico', right: 'Luces altas' },
        { id: 3, left: 'Vehículo detenido en vía', right: 'Luces de emergencia' },
        { id: 4, left: 'Cambiar de carril', right: 'Direccionales' },
        { id: 5, left: 'Conducir de noche', right: 'Luces bajas' }
      ]
    }
  },
  {
    id: 8,
    title: "Normativa legal y sanciones",
    description: "Multas, puntos y consecuencias legales",
    topic: "Normativa legal",
    type: 'fill-blank',
    content: {
      instruction: "Completa los espacios con la información correcta",
      sentences: [
        {
          id: 1,
          text: "El nivel máximo de alcohol permitido es ___ en sangre.",
          blanks: [{ id: 1, answer: '0.05%', position: 0 }],
          options: ['0.00%', '0.05%', '0.08%', '0.10%']
        },
        {
          id: 2,
          text: "La licencia se suspende al acumular ___ puntos.",
          blanks: [{ id: 1, answer: '12', position: 0 }],
          options: ['10', '12', '15', '20']
        },
        {
          id: 3,
          text: "Conducir sin licencia puede resultar en multa de ___.",
          blanks: [{ id: 1, answer: '₡250,000', position: 0 }],
          options: ['₡50,000', '₡100,000', '₡250,000', '₡500,000']
        }
      ]
    }
  },
  {
    id: 9,
    title: "Conducción defensiva",
    description: "Técnicas para prevenir accidentes",
    topic: "Conducción defensiva",
    type: 'true-false',
    content: {
      instruction: "Evalúa cada principio de conducción defensiva",
      statements: [
        { id: 1, text: 'Debes mantener 2 segundos de distancia con el vehículo de adelante', answer: true },
        { id: 2, text: 'El punto ciego es un área sin visibilidad en los espejos', answer: true },
        { id: 3, text: 'En caso de hidroplaneo, debes frenar bruscamente', answer: false },
        { id: 4, text: 'Si el vehículo derrapa, gira en la dirección del derrape', answer: true },
        { id: 5, text: 'Puedes usar el celular si es manos libres mientras conduces', answer: false },
        { id: 6, text: 'Verificar espejos y punto ciego antes de cambiar de carril es obligatorio', answer: true }
      ]
    }
  },
  {
    id: 10,
    title: "Situaciones de emergencia",
    description: "Qué hacer en caso de accidentes y fallas",
    topic: "Emergencias",
    type: 'sequence',
    content: {
      instruction: "Ordena los pasos correctos en caso de accidente con lesionados",
      steps: [
        { id: 1, text: 'Detener el vehículo de forma segura', order: 1 },
        { id: 2, text: 'Activar luces de emergencia', order: 2 },
        { id: 3, text: 'Colocar triángulo a 50 metros', order: 3 },
        { id: 4, text: 'Llamar a emergencias (911)', order: 4 },
        { id: 5, text: 'NO mover a los lesionados', order: 5 },
        { id: 6, text: 'Esperar ayuda profesional', order: 6 }
      ]
    }
  },
  {
    id: 11,
    title: "Convivencia vial",
    description: "Respeto y prioridades en la vía",
    topic: "Convivencia vial",
    type: 'multiple-choice',
    content: {
      instruction: "Selecciona las acciones correctas en cada situación",
      questions: [
        {
          id: 1,
          question: "Al aproximarse a un paso peatonal debes:",
          options: [
            { id: 1, text: 'Reducir la velocidad', correct: true },
            { id: 2, text: 'Ceder el paso a peatones', correct: true },
            { id: 3, text: 'Tocar bocina para advertir', correct: false },
            { id: 4, text: 'Acelerar para pasar rápido', correct: false }
          ]
        },
        {
          id: 2,
          question: "Al escuchar sirena de emergencia debes:",
          options: [
            { id: 1, text: 'Detenerte inmediatamente', correct: false },
            { id: 2, text: 'Orillarte a la derecha', correct: true },
            { id: 3, text: 'Ceder el paso', correct: true },
            { id: 4, text: 'Continuar normalmente', correct: false }
          ]
        }
      ]
    }
  },
  {
    id: 12,
    title: "Seguridad del vehículo",
    description: "Elementos de seguridad obligatorios",
    topic: "Seguridad vial",
    type: 'drag-drop',
    content: {
      instruction: "Clasifica cada elemento según su importancia",
      categories: [
        { id: 'obligatorio', name: 'Obligatorio por ley', color: 'red' },
        { id: 'recomendado', name: 'Recomendado', color: 'yellow' },
        { id: 'opcional', name: 'Opcional', color: 'green' }
      ],
      items: [
        { id: 1, text: 'Cinturón de seguridad', category: 'obligatorio' },
        { id: 2, text: 'Triángulo de emergencia', category: 'obligatorio' },
        { id: 3, text: 'Extintor', category: 'obligatorio' },
        { id: 4, text: 'Botiquín de primeros auxilios', category: 'recomendado' },
        { id: 5, text: 'Llanta de repuesto', category: 'obligatorio' },
        { id: 6, text: 'Ambientador', category: 'opcional' }
      ]
    }
  }
];

export const topicToLessons: Record<string, number[]> = {
  "Límites de velocidad": [2],
  "Señales de tránsito": [1, 3],
  "Seguridad vial": [12],
  "Uso de luces": [7],
  "Normativa legal": [8],
  "Convivencia vial": [11],
  "Señalización horizontal": [6],
  "Documentación": [4],
  "Maniobras": [5],
  "Emergencias": [10],
  "Conducción defensiva": [9]
};
