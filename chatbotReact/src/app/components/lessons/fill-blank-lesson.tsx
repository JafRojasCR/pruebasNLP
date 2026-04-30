import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface FillBlankLessonProps {
  content: {
    instruction: string;
    sentences: Array<{
      id: number;
      text: string;
      blanks: Array<{ id: number; answer: string; position: number }>;
      options: string[];
    }>;
  };
  onComplete: (score: number) => void;
}

export function FillBlankLesson({ content, onComplete }: FillBlankLessonProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (sentenceId: number, answer: string) => {
    if (showResults) return;
    setAnswers({ ...answers, [sentenceId]: answer });
  };

  const handleCheck = () => {
    setShowResults(true);
    let correct = 0;
    let total = 0;

    content.sentences.forEach((sentence) => {
      total++;
      const userAnswer = answers[sentence.id];
      if (userAnswer === sentence.blanks[0].answer) {
        correct++;
      }
    });

    const score = (correct / total) * 100;
    setTimeout(() => onComplete(score), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-gray-900 font-medium">{content.instruction}</p>
      </div>

      <div className="space-y-6">
        {content.sentences.map((sentence) => {
          const userAnswer = answers[sentence.id];
          const correctAnswer = sentence.blanks[0].answer;
          const isCorrect = showResults && userAnswer === correctAnswer;
          const isIncorrect = showResults && userAnswer && userAnswer !== correctAnswer;

          const parts = sentence.text.split('___');

          return (
            <div
              key={sentence.id}
              className={`bg-white rounded-xl p-6 border-2 transition-all ${
                isCorrect
                  ? 'border-green-500 bg-green-50'
                  : isIncorrect
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="mb-4">
                <p className="text-gray-900 text-lg">
                  {parts[0]}
                  <span
                    className={`inline-block min-w-[120px] px-3 py-1 mx-1 rounded-lg border-2 font-bold text-center ${
                      isCorrect
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : isIncorrect
                        ? 'bg-red-100 border-red-500 text-red-700'
                        : userAnswer
                        ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                        : 'bg-gray-50 border-gray-300 border-dashed text-gray-400'
                    }`}
                  >
                    {userAnswer || '___'}
                  </span>
                  {parts[1]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {sentence.options.map((option) => {
                  const isSelected = userAnswer === option;
                  const isThisCorrect = showResults && option === correctAnswer;

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(sentence.id, option)}
                      disabled={showResults}
                      className={`p-3 rounded-lg border-2 font-medium transition-all ${
                        isThisCorrect
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : isSelected && !showResults
                          ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                          : isSelected && isIncorrect
                          ? 'bg-red-100 border-red-500 text-red-700'
                          : 'bg-white border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {option}
                        {isThisCorrect && <CheckCircle className="w-5 h-5" />}
                        {isSelected && isIncorrect && <XCircle className="w-5 h-5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {isCorrect ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">¡Correcto!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <XCircle className="w-5 h-5" />
                      <span className="font-medium">La respuesta correcta es: {correctAnswer}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {Object.keys(answers).length === content.sentences.length && !showResults && (
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
