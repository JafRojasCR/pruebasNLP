import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { examQuestions, Question } from '../data/questions';
import { Progress } from './ui/progress';

interface QuizProps {
  onBack: () => void;
  onComplete: (results: QuizResult[]) => void;
}

export interface QuizResult {
  question: Question;
  selectedAnswer: number;
  isCorrect: boolean;
}

export function Quiz({ onBack, onComplete }: QuizProps) {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    const shuffled = [...examQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuizQuestions(selected);
    setQuizStarted(true);
    setCurrentIndex(0);
    setResults([]);
    setQuizCompleted(false);
  };

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = quizQuestions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const newResult: QuizResult = {
      question: currentQuestion,
      selectedAnswer,
      isCorrect
    };

    const newResults = [...results, newResult];
    setResults(newResults);

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      onComplete(newResults);
    }
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setResults([]);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Button onClick={onBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Dashboard
          </Button>

          <div className="bg-white rounded-xl p-12 text-center shadow-lg">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz de Práctica</h1>
            <p className="text-lg text-gray-600 mb-8">
              Responde 10 preguntas aleatorias del examen teórico de manejo
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-3">Instrucciones:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Tendrás 10 preguntas seleccionadas aleatoriamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Elige la respuesta que consideres correcta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Verifica tu respuesta antes de continuar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Al final recibirás tu puntuación y retroalimentación</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={startQuiz}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            >
              Comenzar Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const correctCount = results.filter(r => r.isCorrect).length;
    const percentage = (correctCount / results.length) * 100;
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Button onClick={onBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Dashboard
          </Button>

          <div className="bg-white rounded-xl p-12 text-center shadow-lg">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                passed ? 'bg-green-100' : 'bg-orange-100'
              }`}
            >
              <Trophy
                className={`w-12 h-12 ${passed ? 'text-green-600' : 'text-orange-600'}`}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {passed ? '¡Felicitaciones!' : '¡Sigue practicando!'}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Obtuviste {correctCount} de {results.length} respuestas correctas ({percentage.toFixed(0)}%)
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-left">Resultados por pregunta:</h3>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      result.isCorrect
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {result.isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="text-left flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {result.question.question}
                        </p>
                        <p className="text-xs text-gray-600">
                          Tema: {result.question.topic}
                        </p>
                        {!result.isCorrect && (
                          <p className="text-xs text-red-600 mt-1">
                            Respuesta correcta: {result.question.options[result.question.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                onClick={restartQuiz}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Intentar de nuevo
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
              >
                Volver al Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Salir del Quiz
        </Button>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Pregunta {currentIndex + 1} de {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold text-gray-900">
              {progress.toFixed(0)}% completado
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mb-4">
              {currentQuestion.topic}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    showCorrect
                      ? 'bg-green-50 border-green-500'
                      : showIncorrect
                      ? 'bg-red-50 border-red-500'
                      : isSelected
                      ? 'bg-purple-50 border-purple-500'
                      : 'bg-white border-gray-200 hover:border-purple-300'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        showCorrect
                          ? 'bg-green-500 border-green-500'
                          : showIncorrect
                          ? 'bg-red-500 border-red-500'
                          : isSelected
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {showCorrect && <CheckCircle className="w-5 h-5 text-white" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-white" />}
                      {!showResult && isSelected && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span
                      className={`flex-1 ${
                        showCorrect || showIncorrect
                          ? 'font-semibold'
                          : isSelected
                          ? 'font-medium'
                          : ''
                      }`}
                    >
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            {!showResult ? (
              <Button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Verificar Respuesta
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className={
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-orange-600 hover:bg-orange-700'
                }
              >
                {currentIndex < quizQuestions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
