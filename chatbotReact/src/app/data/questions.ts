export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const examQuestions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es la velocidad máxima permitida en zonas urbanas de Costa Rica?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctAnswer: 2,
    topic: "Límites de velocidad",
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "¿Qué significa una luz amarilla en un semáforo?",
    options: ["Acelerar", "Detenerse si es seguro", "Continuar sin precaución", "Cambiar de carril"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "¿A qué distancia debe colocarse el triángulo de seguridad?",
    options: ["10 metros", "25 metros", "50 metros", "100 metros"],
    correctAnswer: 2,
    topic: "Seguridad vial",
    difficulty: 'medium'
  },
  {
    id: 4,
    question: "¿Cuándo se debe usar las luces bajas del vehículo?",
    options: ["Solo de noche", "En lluvia y niebla", "Nunca", "Solo en autopistas"],
    correctAnswer: 1,
    topic: "Uso de luces",
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "¿Qué indica una señal octagonal roja?",
    options: ["Ceda el paso", "Alto total", "Prohibido estacionar", "Zona escolar"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "¿Cuál es el nivel máximo de alcohol permitido en sangre para conductores?",
    options: ["0.00%", "0.05%", "0.08%", "0.10%"],
    correctAnswer: 1,
    topic: "Normativa legal",
    difficulty: 'medium'
  },
  {
    id: 7,
    question: "¿Qué debe hacer al aproximarse a un paso peatonal?",
    options: ["Acelerar", "Reducir velocidad y ceder paso", "Tocar bocina", "Cambiar de carril"],
    correctAnswer: 1,
    topic: "Convivencia vial",
    difficulty: 'easy'
  },
  {
    id: 8,
    question: "¿Cuántos puntos se requieren para la suspensión de licencia?",
    options: ["10 puntos", "12 puntos", "15 puntos", "20 puntos"],
    correctAnswer: 1,
    topic: "Normativa legal",
    difficulty: 'medium'
  },
  {
    id: 9,
    question: "¿Qué significa una línea amarilla continua en el pavimento?",
    options: ["Puede adelantar", "No puede adelantar", "Zona de estacionamiento", "Carril reversible"],
    correctAnswer: 1,
    topic: "Señalización horizontal",
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "¿A qué velocidad máxima se puede circular en carreteras nacionales?",
    options: ["60 km/h", "80 km/h", "100 km/h", "120 km/h"],
    correctAnswer: 2,
    topic: "Límites de velocidad",
    difficulty: 'easy'
  },
  {
    id: 11,
    question: "¿Qué documentos debe portar al conducir?",
    options: ["Solo licencia", "Licencia y marchamo", "Licencia, marchamo y seguro", "Solo seguro"],
    correctAnswer: 2,
    topic: "Documentación",
    difficulty: 'medium'
  },
  {
    id: 12,
    question: "¿Cuándo debe usar el cinturón de seguridad?",
    options: ["Solo en autopista", "Siempre", "Solo el conductor", "Solo de noche"],
    correctAnswer: 1,
    topic: "Seguridad vial",
    difficulty: 'easy'
  },
  {
    id: 13,
    question: "¿Qué indica una señal triangular con borde rojo?",
    options: ["Obligación", "Información", "Prevención", "Prohibición"],
    correctAnswer: 2,
    topic: "Señales de tránsito",
    difficulty: 'medium'
  },
  {
    id: 14,
    question: "¿Cuál es la distancia mínima para adelantar?",
    options: ["50 metros", "100 metros", "150 metros", "200 metros"],
    correctAnswer: 2,
    topic: "Maniobras",
    difficulty: 'hard'
  },
  {
    id: 15,
    question: "¿Qué hacer en caso de accidente con lesionados?",
    options: ["Huir del lugar", "Llamar a emergencias y no mover heridos", "Mover a los heridos", "Tomar fotos"],
    correctAnswer: 1,
    topic: "Emergencias",
    difficulty: 'medium'
  },
  {
    id: 16,
    question: "¿Cuándo está prohibido usar el teléfono celular?",
    options: ["Nunca", "Mientras conduce", "Solo en autopista", "Solo de noche"],
    correctAnswer: 1,
    topic: "Normativa legal",
    difficulty: 'easy'
  },
  {
    id: 17,
    question: "¿Qué significa una señal circular azul?",
    options: ["Prohibición", "Obligación", "Prevención", "Información"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'medium'
  },
  {
    id: 18,
    question: "¿A qué edad se puede obtener licencia de conducir tipo B1?",
    options: ["16 años", "18 años", "21 años", "25 años"],
    correctAnswer: 1,
    topic: "Documentación",
    difficulty: 'easy'
  },
  {
    id: 19,
    question: "¿Cuál es la multa aproximada por conducir sin licencia?",
    options: ["₡50,000", "₡100,000", "₡250,000", "₡500,000"],
    correctAnswer: 2,
    topic: "Normativa legal",
    difficulty: 'hard'
  },
  {
    id: 20,
    question: "¿Qué debe hacer al escuchar una sirena de emergencia?",
    options: ["Acelerar", "Detenerse inmediatamente", "Ceder el paso y orillarse", "Continuar normalmente"],
    correctAnswer: 2,
    topic: "Convivencia vial",
    difficulty: 'medium'
  },
  {
    id: 21,
    question: "¿Cuántos espejos debe tener un vehículo?",
    options: ["1 espejo", "2 espejos", "3 espejos", "4 espejos"],
    correctAnswer: 2,
    topic: "Requisitos del vehículo",
    difficulty: 'easy'
  },
  {
    id: 22,
    question: "¿Qué indica una luz verde intermitente?",
    options: ["Pare", "Precaución, cruce con cuidado", "Acelere", "Retroceda"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'medium'
  },
  {
    id: 23,
    question: "¿Cuál es la presión recomendada de llantas para vehículos livianos?",
    options: ["20-25 PSI", "28-32 PSI", "35-40 PSI", "45-50 PSI"],
    correctAnswer: 1,
    topic: "Mantenimiento vehicular",
    difficulty: 'medium'
  },
  {
    id: 24,
    question: "¿A qué distancia debe mantener de otro vehículo?",
    options: ["1 metro", "2 segundos", "5 metros", "10 metros"],
    correctAnswer: 1,
    topic: "Seguridad vial",
    difficulty: 'medium'
  },
  {
    id: 25,
    question: "¿Qué significa la señal de cebra en el pavimento?",
    options: ["Zona de adelantamiento", "Paso peatonal", "Zona de parqueo", "Parada de bus"],
    correctAnswer: 1,
    topic: "Señalización horizontal",
    difficulty: 'easy'
  },
  {
    id: 26,
    question: "¿Cuándo debe encender las luces direccionales?",
    options: ["Al girar y cambiar de carril", "Solo al girar", "Solo de noche", "Nunca"],
    correctAnswer: 0,
    topic: "Uso de luces",
    difficulty: 'easy'
  },
  {
    id: 27,
    question: "¿Qué hacer si el vehículo derrapa?",
    options: ["Frenar bruscamente", "Girar en dirección del derrape", "Acelerar", "Soltar el volante"],
    correctAnswer: 1,
    topic: "Conducción defensiva",
    difficulty: 'hard'
  },
  {
    id: 28,
    question: "¿Cuál es la vigencia de la licencia de conducir tipo B?",
    options: ["2 años", "4 años", "6 años", "10 años"],
    correctAnswer: 2,
    topic: "Documentación",
    difficulty: 'medium'
  },
  {
    id: 29,
    question: "¿Qué indica una señal rectangular verde?",
    options: ["Prohibición", "Prevención", "Información", "Obligación"],
    correctAnswer: 2,
    topic: "Señales de tránsito",
    difficulty: 'medium'
  },
  {
    id: 30,
    question: "¿A qué velocidad debe circular en zona escolar?",
    options: ["25 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correctAnswer: 0,
    topic: "Límites de velocidad",
    difficulty: 'easy'
  },
  {
    id: 31,
    question: "¿Qué hacer antes de retroceder el vehículo?",
    options: ["Retroceder directamente", "Verificar espejos y punto ciego", "Tocar bocina", "Acelerar"],
    correctAnswer: 1,
    topic: "Maniobras",
    difficulty: 'easy'
  },
  {
    id: 32,
    question: "¿Cuándo debe usar las luces altas?",
    options: ["Siempre", "En carretera sin tráfico cercano", "En la ciudad", "Nunca"],
    correctAnswer: 1,
    topic: "Uso de luces",
    difficulty: 'medium'
  },
  {
    id: 33,
    question: "¿Qué es el punto ciego?",
    options: ["Zona sin visibilidad en espejos", "Un defecto visual", "Señal de tránsito", "Tipo de vehículo"],
    correctAnswer: 0,
    topic: "Conducción defensiva",
    difficulty: 'easy'
  },
  {
    id: 34,
    question: "¿Cuántos años de prisión puede recibir por conducir ebrio causando muerte?",
    options: ["1-3 años", "3-8 años", "8-20 años", "No hay prisión"],
    correctAnswer: 2,
    topic: "Normativa legal",
    difficulty: 'hard'
  },
  {
    id: 35,
    question: "¿Qué indica una línea blanca discontinua?",
    options: ["No adelantar", "Puede cambiar de carril con precaución", "Zona de parqueo", "Paso peatonal"],
    correctAnswer: 1,
    topic: "Señalización horizontal",
    difficulty: 'easy'
  },
  {
    id: 36,
    question: "¿Cuál es la prioridad en una intersección sin señalización?",
    options: ["El más grande", "El de la derecha", "El más rápido", "El primero que llegue"],
    correctAnswer: 1,
    topic: "Convivencia vial",
    difficulty: 'medium'
  },
  {
    id: 37,
    question: "¿Qué debe verificar antes de conducir?",
    options: ["Solo el combustible", "Luces, frenos, llantas y espejos", "Solo los espejos", "Nada"],
    correctAnswer: 1,
    topic: "Seguridad vial",
    difficulty: 'easy'
  },
  {
    id: 38,
    question: "¿Cuándo puede estacionar en zona amarilla?",
    options: ["Siempre", "Nunca", "Solo de noche", "Solo 5 minutos"],
    correctAnswer: 1,
    topic: "Estacionamiento",
    difficulty: 'easy'
  },
  {
    id: 39,
    question: "¿Qué hacer si falla el freno?",
    options: ["Usar freno de emergencia gradualmente", "Acelerar", "Girar bruscamente", "Apagar motor"],
    correctAnswer: 0,
    topic: "Emergencias",
    difficulty: 'hard'
  },
  {
    id: 40,
    question: "¿Cuál es la distancia mínima para estacionar de una esquina?",
    options: ["1 metro", "3 metros", "5 metros", "10 metros"],
    correctAnswer: 2,
    topic: "Estacionamiento",
    difficulty: 'medium'
  },
  {
    id: 41,
    question: "¿Qué indica una señal de flecha verde en semáforo?",
    options: ["Pare", "Giro permitido en esa dirección", "Prohibido girar", "Precaución"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'easy'
  },
  {
    id: 42,
    question: "¿Cuándo debe activar las luces de emergencia?",
    options: ["Nunca", "En emergencia o vehículo detenido", "Siempre", "Solo de noche"],
    correctAnswer: 1,
    topic: "Uso de luces",
    difficulty: 'easy'
  },
  {
    id: 43,
    question: "¿Qué es la distancia de frenado?",
    options: ["Distancia de visibilidad", "Distancia que recorre hasta detenerse", "Largo del vehículo", "Ancho del carril"],
    correctAnswer: 1,
    topic: "Conducción defensiva",
    difficulty: 'medium'
  },
  {
    id: 44,
    question: "¿Cuántos pasajeros puede llevar según cinturones disponibles?",
    options: ["Los que quepan", "Según cinturones de seguridad", "Máximo 5", "No hay límite"],
    correctAnswer: 1,
    topic: "Seguridad vial",
    difficulty: 'easy'
  },
  {
    id: 45,
    question: "¿Qué hacer al ver una señal de CEDA?",
    options: ["Parar completamente", "Reducir velocidad y dar prioridad", "Acelerar", "Ignorarla"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'easy'
  },
  {
    id: 46,
    question: "¿Cuál es la edad máxima para renovar licencia sin examen médico?",
    options: ["50 años", "60 años", "65 años", "No hay límite"],
    correctAnswer: 2,
    topic: "Documentación",
    difficulty: 'medium'
  },
  {
    id: 47,
    question: "¿Qué indica una señal de prohibido adelantar?",
    options: ["Puede adelantar", "No puede rebasar a otro vehículo", "Solo motos pueden adelantar", "Adelantar con precaución"],
    correctAnswer: 1,
    topic: "Señales de tránsito",
    difficulty: 'easy'
  },
  {
    id: 48,
    question: "¿Cuándo debe usar bocina?",
    options: ["Siempre", "Solo en emergencia o advertencia", "En ciudad", "Nunca"],
    correctAnswer: 1,
    topic: "Convivencia vial",
    difficulty: 'easy'
  },
  {
    id: 49,
    question: "¿Qué es hidroplaneo?",
    options: ["Tipo de vehículo", "Pérdida de tracción por agua", "Señal de tránsito", "Tipo de freno"],
    correctAnswer: 1,
    topic: "Conducción defensiva",
    difficulty: 'hard'
  },
  {
    id: 50,
    question: "¿Cuál es el límite de velocidad en zona residencial?",
    options: ["25 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correctAnswer: 1,
    topic: "Límites de velocidad",
    difficulty: 'medium'
  }
];

export const topics = [
  "Límites de velocidad",
  "Señales de tránsito",
  "Seguridad vial",
  "Uso de luces",
  "Normativa legal",
  "Convivencia vial",
  "Señalización horizontal",
  "Documentación",
  "Maniobras",
  "Emergencias",
  "Requisitos del vehículo",
  "Mantenimiento vehicular",
  "Conducción defensiva",
  "Estacionamiento"
];
