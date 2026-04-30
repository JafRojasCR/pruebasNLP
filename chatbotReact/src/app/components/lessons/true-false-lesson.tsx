import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface TrueFalseLessonProps {
  content: {
    instruction: string;
    statements: Array<{ id: number; text: string; answer: boolean }>;
  };
  onComplete: (score: number) => void;
}

export function TrueFalseLesson({ content, onComplete }: TrueFalseLessonProps) {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (id: number, answer: boolean) => {
    if (showResults) return;
    setAnswers({ ...answers, [id]: answer });
  };

  const handleCheck = () => {
    setShowResults(true);
    let correct = 0;

    content.statements.forEach((statement) => {
      if (answers[statement.id] === statement.answer) {
        correct++;
      }
    });

    const score = (correct / content.statements.length) * 100;
    setTimeout(() => onComplete(score), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-gray-900 font-medium">{content.instruction}</p>
      </div>

      <div className="space-y-4">
        {content.statements.map((statement) => {
          const userAnswer = answers[statement.id];
          const hasAnswer = userAnswer !== undefined;
          const isCorrect = showResults && userAnswer === statement.answer;
          const isIncorrect = showResults && hasAnswer && !isCorrect;

          return (
            <div
              key={statement.id}
              className={`bg-white rounded-xl p-6 border-2 transition-all ${
                isCorrect
                  ? 'border-green-500 bg-green-50'
                  : isIncorrect
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200'
              }`}
            >
              <p className="text-gray-900 mb-4 font-medium">{statement.text}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleAnswer(statement.id, true)}
                  disabled={showResults}
                  className={`flex-1 py-3 rounded-lg border-2 font-medium transition-all ${
                    showResults && statement.answer === true
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : userAnswer === true && !showResults
                      ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                      : showResults && userAnswer === true && !isCorrect
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-white border-gray-300 hover:border-green-400 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    Verdadero
                    {showResults && statement.answer === true && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => handleAnswer(statement.id, false)}
                  disabled={showResults}
                  className={`flex-1 py-3 rounded-lg border-2 font-medium transition-all ${
                    showResults && statement.answer === false
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : userAnswer === false && !showResults
                      ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                      : showResults && userAnswer === false && !isCorrect
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-white border-gray-300 hover:border-red-400 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    Falso
                    {showResults && statement.answer === false && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                </button>
              </div>

              {showResults && isIncorrect && (
                <div className="mt-3 flex items-center gap-2 text-red-600 text-sm">
                  <XCircle className="w-4 h-4" />
                  <span>Incorrecto. La respuesta correcta es: {statement.answer ? 'Verdadero' : 'Falso'}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {Object.keys(answers).length === content.statements.length && !showResults && (
        <div className="flex justify-center">
          <Button
            onClick={handleCheck}
            className="bg-indigo-600 hover:bg-indigo-700 px-8"
          >
            Verificar Respuestas
          </Button>
        </div>
      )}
    </div>
  );
}
