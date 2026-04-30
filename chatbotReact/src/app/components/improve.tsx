import { ArrowLeft, AlertCircle, Lightbulb, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { topicToLessons } from '../data/lessons';

interface ImproveProps {
  onBack: () => void;
  topicProgress: Record<string, { correct: number; total: number }>;
  onOpenLesson: (lessonId: number) => void;
}

export function Improve({ onBack, topicProgress, onOpenLesson }: ImproveProps) {
  const improvementTips: Record<string, string[]> = {
    "Límites de velocidad": [
      "Memoriza los límites: 60 km/h urbano, 80 km/h carretera, 25 km/h zona escolar",
      "Recuerda que en zona residencial el límite es 40 km/h",
      "Las multas por exceso de velocidad son progresivas según km/h sobre el límite"
    ],
    "Señales de tránsito": [
      "Forma octagonal = ALTO (señal de pare)",
      "Triángulo con borde rojo = Prevención/advertencia",
      "Círculo azul = Obligación, Círculo rojo = Prohibición",
      "Rectángulo verde = Información"
    ],
    "Seguridad vial": [
      "El cinturón debe usarse SIEMPRE, en todos los asientos",
      "Mantén 2 segundos de distancia con el vehículo de adelante",
      "Verifica frenos, luces y llantas antes de conducir"
    ],
    "Normativa legal": [
      "0.05% es el límite máximo de alcohol en sangre",
      "12 puntos acumulados suspenden la licencia",
      "Conducir sin licencia puede resultar en multa de ₡250,000"
    ],
    "Uso de luces": [
      "Luces bajas en lluvia, niebla y de noche",
      "Luces altas solo en carretera sin tráfico cercano",
      "Direccionales al girar y cambiar de carril",
      "Luces de emergencia cuando el vehículo está detenido en vía"
    ]
  };

  const weakTopics = Object.entries(topicProgress)
    .map(([topic, data]) => ({
      topic,
      percentage: data.total > 0 ? (data.correct / data.total) * 100 : 0,
      ...data
    }))
    .filter(item => item.percentage < 70 && item.total > 0)
    .sort((a, b) => a.percentage - b.percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Áreas por Mejorar</h1>
          <p className="text-gray-600">
            Enfócate en estos temas para aumentar tu probabilidad de éxito
          </p>
        </div>

        {weakTopics.length > 0 ? (
          <div className="grid gap-6">
            {weakTopics.map(({ topic, percentage, correct, total }) => (
              <div key={topic} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{topic}</h3>
                    <p className="text-sm text-gray-600">
                      Solo {correct} de {total} respuestas correctas ({percentage.toFixed(0)}%)
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <Progress value={percentage} className="h-3" />
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Consejos para mejorar:</h4>
                  </div>
                  <ul className="space-y-2">
                    {(improvementTips[topic] || [
                      "Repasa el material de este tema",
                      "Practica más preguntas relacionadas",
                      "Consulta con el chatbot para aclarar dudas"
                    ]).map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => {
                    const lessonIds = topicToLessons[topic];
                    if (lessonIds && lessonIds.length > 0) {
                      onOpenLesson(lessonIds[0]);
                    }
                  }}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Estudiar este tema
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Excelente trabajo!
            </h2>
            <p className="text-gray-600 mb-6">
              {topicProgress && Object.keys(topicProgress).length > 0
                ? "No tienes áreas débiles. Mantén tu buen desempeño."
                : "Completa algunos quices para identificar áreas de mejora."}
            </p>
            {(!topicProgress || Object.keys(topicProgress).length === 0) && (
              <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700">
                Hacer un Quiz
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
