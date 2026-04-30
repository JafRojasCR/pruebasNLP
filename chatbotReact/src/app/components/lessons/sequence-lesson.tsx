import { useState } from 'react';
import { GripVertical, CheckCircle, XCircle, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';

interface SequenceLessonProps {
  content: {
    instruction: string;
    steps: Array<{ id: number; text: string; order: number }>;
  };
  onComplete: (score: number) => void;
}

export function SequenceLesson({ content, onComplete }: SequenceLessonProps) {
  const [orderedSteps, setOrderedSteps] = useState(
    [...content.steps].sort(() => Math.random() - 0.5)
  );
  const [showResults, setShowResults] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0 || showResults) return;
    const newSteps = [...orderedSteps];
    [newSteps[index - 1], newSteps[index]] = [newSteps[index], newSteps[index - 1]];
    setOrderedSteps(newSteps);
  };

  const moveDown = (index: number) => {
    if (index === orderedSteps.length - 1 || showResults) return;
    const newSteps = [...orderedSteps];
    [newSteps[index], newSteps[index + 1]] = [newSteps[index + 1], newSteps[index]];
    setOrderedSteps(newSteps);
  };

  const handleCheck = () => {
    setShowResults(true);
    let correct = 0;

    orderedSteps.forEach((step, index) => {
      if (step.order === index + 1) {
        correct++;
      }
    });

    const score = (correct / content.steps.length) * 100;
    setTimeout(() => onComplete(score), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-gray-900 font-medium">{content.instruction}</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {orderedSteps.map((step, index) => {
          const isCorrect = showResults && step.order === index + 1;
          const isIncorrect = showResults && step.order !== index + 1;

          return (
            <div
              key={step.id}
              className={`bg-white rounded-xl p-4 border-2 transition-all ${
                isCorrect
                  ? 'border-green-500 bg-green-50'
                  : isIncorrect
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0 || showResults}
                    className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                      index === 0 || showResults ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                  >
                    <ArrowUp className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === orderedSteps.length - 1 || showResults}
                    className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                      index === orderedSteps.length - 1 || showResults ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                  >
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="flex items-center gap-3 flex-1">
                  <GripVertical className="w-5 h-5 text-gray-400" />
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      isCorrect
                        ? 'bg-green-500 text-white'
                        : isIncorrect
                        ? 'bg-red-500 text-white'
                        : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p className="flex-1 text-gray-900 font-medium">{step.text}</p>
                  {showResults && (
                    isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <div className="flex items-center gap-2">
                        <XCircle className="w-6 h-6 text-red-600" />
                        <span className="text-sm text-red-600">Debería ser #{step.order}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showResults && (
        <div className="flex justify-center">
          <Button
            onClick={handleCheck}
            className="bg-indigo-600 hover:bg-indigo-700 px-8"
          >
            Verificar Orden
          </Button>
        </div>
      )}
    </div>
  );
}
