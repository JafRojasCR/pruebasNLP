import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface MatchingLessonProps {
  content: {
    instruction: string;
    pairs: Array<{ id: number; left: string; right: string }>;
  };
  onComplete: (score: number) => void;
}

export function MatchingLesson({ content, onComplete }: MatchingLessonProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const shuffledRight = [...content.pairs].sort(() => Math.random() - 0.5);

  const handleLeftClick = (id: number) => {
    if (showResults) return;
    if (Object.keys(matches).includes(id.toString())) return;
    setSelectedLeft(id);

    if (selectedRight !== null) {
      setMatches({ ...matches, [id]: selectedRight });
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const handleRightClick = (id: number) => {
    if (showResults) return;
    if (Object.values(matches).includes(id)) return;
    setSelectedRight(id);

    if (selectedLeft !== null) {
      setMatches({ ...matches, [selectedLeft]: id });
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const handleCheck = () => {
    setShowResults(true);
    let correct = 0;

    Object.entries(matches).forEach(([leftId, rightId]) => {
      const pair = content.pairs.find(p => p.id === parseInt(leftId));
      const rightPair = content.pairs.find(p => p.id === rightId);
      if (pair && rightPair && pair.id === rightPair.id) {
        correct++;
      }
    });

    const score = (correct / content.pairs.length) * 100;
    setTimeout(() => onComplete(score), 2000);
  };

  const isCorrectMatch = (leftId: number): boolean => {
    const rightId = matches[leftId];
    return leftId === rightId;
  };

  const getMatchedLeft = (rightId: number): number | null => {
    const entry = Object.entries(matches).find(([_, rId]) => rId === rightId);
    return entry ? parseInt(entry[0]) : null;
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-gray-900 font-medium">{content.instruction}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 text-center mb-4">Zonas/Situaciones</h3>
          {content.pairs.map((pair) => {
            const isMatched = Object.keys(matches).includes(pair.id.toString());
            const isSelected = selectedLeft === pair.id;
            const isCorrect = showResults && isCorrectMatch(pair.id);
            const isIncorrect = showResults && isMatched && !isCorrect;

            return (
              <button
                key={pair.id}
                onClick={() => handleLeftClick(pair.id)}
                disabled={isMatched && !showResults}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  isCorrect
                    ? 'bg-green-50 border-green-500'
                    : isIncorrect
                    ? 'bg-red-50 border-red-500'
                    : isSelected
                    ? 'bg-indigo-100 border-indigo-500'
                    : isMatched
                    ? 'bg-gray-100 border-gray-300'
                    : 'bg-white border-gray-300 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{pair.left}</span>
                  {showResults && isMatched && (
                    isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 text-center mb-4">Velocidades/Acciones</h3>
          {shuffledRight.map((pair) => {
            const matchedLeft = getMatchedLeft(pair.id);
            const isMatched = matchedLeft !== null;
            const isSelected = selectedRight === pair.id;
            const isCorrect = showResults && matchedLeft === pair.id;
            const isIncorrect = showResults && isMatched && !isCorrect;

            return (
              <button
                key={pair.id}
                onClick={() => handleRightClick(pair.id)}
                disabled={isMatched && !showResults}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  isCorrect
                    ? 'bg-green-50 border-green-500'
                    : isIncorrect
                    ? 'bg-red-50 border-red-500'
                    : isSelected
                    ? 'bg-indigo-100 border-indigo-500'
                    : isMatched
                    ? 'bg-gray-100 border-gray-300'
                    : 'bg-white border-gray-300 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{pair.right}</span>
                  {showResults && isMatched && (
                    isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {Object.keys(matches).length === content.pairs.length && !showResults && (
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
