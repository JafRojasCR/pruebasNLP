import { ArrowLeft, Star, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface TopicsProps {
  onBack: () => void;
  topicProgress: Record<string, { correct: number; total: number }>;
}

export function Topics({ onBack, topicProgress }: TopicsProps) {
  const getStars = (percentage: number): number => {
    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 50) return 1;
    return 0;
  };

  const getAdvice = (percentage: number, topic: string): string => {
    if (percentage >= 90) {
      return `¡Excelente dominio de ${topic}! Mantén este nivel de conocimiento.`;
    }
    if (percentage >= 70) {
      return `Buen desempeño en ${topic}. Repasa algunos detalles para perfeccionar.`;
    }
    if (percentage >= 50) {
      return `Conocimiento básico de ${topic}. Practica más para mejorar.`;
    }
    return `${topic} necesita más atención. Dedica tiempo a estudiar este tema.`;
  };

  const sortedTopics = Object.entries(topicProgress)
    .map(([topic, data]) => ({
      topic,
      percentage: data.total > 0 ? (data.correct / data.total) * 100 : 0,
      ...data
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tus Temas</h1>
          <p className="text-gray-600">Revisa tu progreso en cada área de conocimiento</p>
        </div>

        <div className="grid gap-6">
          {sortedTopics.map(({ topic, percentage, correct, total }) => {
            const stars = getStars(percentage);
            const advice = getAdvice(percentage, topic);

            return (
              <div key={topic} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{topic}</h3>
                    <p className="text-sm text-gray-600">
                      {correct} de {total} respuestas correctas
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < stars
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progreso</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={percentage} className="h-3" />
                </div>

                <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{advice}</p>
                </div>
              </div>
            );
          })}

          {sortedTopics.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center shadow-lg">
              <p className="text-gray-600 text-lg">
                Completa algunos quices para ver tu progreso por temas
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
