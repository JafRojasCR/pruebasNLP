import { CheckCircle2, Lock, Circle, Star, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface LearningProps {
  onBack: () => void;
  onOpenLesson: (lessonId: number) => void;
  initialLessonId?: number;
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  stars: number;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Señales de tránsito básicas",
    description: "Aprende sobre señales de pare, ceda y precaución",
    status: 'completed',
    stars: 3
  },
  {
    id: 2,
    title: "Límites de velocidad",
    description: "Velocidades máximas en diferentes zonas",
    status: 'completed',
    stars: 3
  },
  {
    id: 3,
    title: "Semáforos y señales luminosas",
    description: "Interpretación correcta de luces de tráfico",
    status: 'completed',
    stars: 2
  },
  {
    id: 4,
    title: "Documentación requerida",
    description: "Licencia, marchamo y seguro obligatorio",
    status: 'current',
    stars: 0
  },
  {
    id: 5,
    title: "Maniobras seguras",
    description: "Adelantamiento, retroceso y cambio de carril",
    status: 'locked',
    stars: 0
  },
  {
    id: 6,
    title: "Señalización horizontal",
    description: "Líneas, cebras y marcas en el pavimento",
    status: 'locked',
    stars: 0
  },
  {
    id: 7,
    title: "Uso correcto de luces",
    description: "Luces altas, bajas, direccionales y emergencia",
    status: 'locked',
    stars: 0
  },
  {
    id: 8,
    title: "Normativa legal y sanciones",
    description: "Multas, puntos y consecuencias legales",
    status: 'locked',
    stars: 0
  },
  {
    id: 9,
    title: "Conducción defensiva",
    description: "Técnicas para prevenir accidentes",
    status: 'locked',
    stars: 0
  },
  {
    id: 10,
    title: "Situaciones de emergencia",
    description: "Qué hacer en caso de accidentes y fallas",
    status: 'locked',
    stars: 0
  }
];

export function Learning({ onBack, onOpenLesson, initialLessonId }: LearningProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mi Aprendizaje</h1>
          <p className="text-gray-600">Completa todas las lecciones para dominar el examen</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300"></div>

          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <div key={lesson.id} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center">
                  {lesson.status === 'completed' && (
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  )}
                  {lesson.status === 'current' && (
                    <Circle className="w-8 h-8 text-blue-500 fill-blue-500" />
                  )}
                  {lesson.status === 'locked' && (
                    <Lock className="w-8 h-8 text-gray-400" />
                  )}
                </div>

                <div
                  className={`bg-white rounded-xl p-6 shadow-lg ${
                    lesson.status === 'locked' ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-sm text-gray-500">Lección {lesson.id}</span>
                      <h3 className="text-xl font-bold text-gray-900">{lesson.title}</h3>
                    </div>
                    {lesson.stars > 0 && (
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < lesson.stars
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <Button
                    onClick={() => onOpenLesson(lesson.id)}
                    disabled={lesson.status === 'locked'}
                    className={
                      lesson.status === 'completed'
                        ? 'bg-green-600 hover:bg-green-700'
                        : lesson.status === 'current'
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400'
                    }
                  >
                    {lesson.status === 'completed'
                      ? 'Repasar'
                      : lesson.status === 'current'
                      ? 'Continuar'
                      : 'Bloqueado'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
