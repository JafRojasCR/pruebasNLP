import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface MultipleChoiceLessonProps {
  content: {
    instruction: string;
    questions: Array<{
      id: number;
      question: string;
      options: Array<{ id: number; text: string; correct: boolean }>;
    }>;
  };
  onComplete: (score: number) => void;
}

export function MultipleChoiceLesson({ content, onComplete }: MultipleChoiceLessonProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number[]>>({});
  const [showResults, setShowResults] = useState(false);

  const handleToggleOption = (questionId: number, optionId: number) => {
    if (showResults) return;

    const currentAnswers = selectedAnswers[questionId] || [];
    const newAnswers = currentAnswers.includes(optionId)
      ? currentAnswers.filter(id => id !== optionId)
      : [...currentAnswers, optionId];

    setSelectedAnswers({ ...selectedAnswers, [questionId]: newAnswers });
  };

  const handleCheck = () => {
    setShowResults(true);
    let correctQuestions = 0;

    content.questions.forEach((question) => {
      const userAnswers = selectedAnswers[question.id] || [];
      const correctAnswers = question.options.filter(opt => opt.correct).map(opt => opt.id);

      const isCorrect =
        userAnswers.length === correctAnswers.length &&
        userAnswers.every(id => correctAnswers.includes(id));

      if (isCorrect) {
        correctQuestions++;
      }
    });

    const score = (correctQuestions / content.questions.length) * 100;
    setTimeout(() => onComplete(score), 2000);
  };

  const isQuestionCorrect = (questionId: number): boolean => {
    const question = content.questions.find(q => q.id === questionId);
    if (!question) return false;

    const userAnswers = selectedAnswers[questionId] || [];
    const correctAnswers = question.options.filter(opt => opt.correct).map(opt => opt.id);

    return (
      userAnswers.length === correctAnswers.length &&
      userAnswers.every(id => correctAnswers.includes(id))
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-gray-900 font-medium">{content.instruction}</p>
      </div>

      <div className="space-y-6">
        {content.questions.map((question) => {
          const questionCorrect = showResults && isQuestionCorrect(question.id);
          const questionIncorrect = showResults && !questionCorrect;

          return (
            <div
              key={question.id}
              className={`bg-white rounded-xl p-6 border-2 transition-all ${
                questionCorrect
                  ? 'border-green-500 bg-green-50'
                  : questionIncorrect
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{question.question}</h3>
                <p className="text-sm text-gray-600 mt-1">Selecciona todas las opciones correctas</p>
              </div>

              <div className="space-y-2">
                {question.options.map((option) => {
                  const isSelected = (selectedAnswers[question.id] || []).includes(option.id);
                  const shouldBeSelected = showResults && option.correct;
                  const isWrong = showResults && isSelected && !option.correct;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleToggleOption(question.id, option.id)}
                      disabled={showResults}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        shouldBeSelected
                          ? 'bg-green-100 border-green-500'
                          : isWrong
                          ? 'bg-red-100 border-red-500'
                          : isSelected
                          ? 'bg-indigo-100 border-indigo-500'
                          : 'bg-white border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            shouldBeSelected
                              ? 'bg-green-500 border-green-500'
                              : isWrong
                              ? 'bg-red-500 border-red-500'
                              : isSelected
                              ? 'bg-indigo-500 border-indigo-500'
                              : 'border-gray-400'
                          }`}
                        >
                          {(isSelected || shouldBeSelected) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="flex-1 font-medium">{option.text}</span>
                        {showResults && option.correct && !isSelected && (
                          <span className="text-sm text-green-600">(Correcta)</span>
                        )}
                        {isWrong && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {questionCorrect ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">¡Respuesta completa y correcta!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <XCircle className="w-5 h-5" />
                      <span className="font-medium">Revisa las opciones marcadas en verde</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {content.questions.every(q => selectedAnswers[q.id]?.length > 0) && !showResults && (
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
