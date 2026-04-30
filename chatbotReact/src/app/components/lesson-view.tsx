import { useState } from 'react';
import { ArrowLeft, Star, Trophy, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { lessonContents, LessonContent } from '../data/lessons';
import { DragDropLesson } from './lessons/drag-drop-lesson';
import { MatchingLesson } from './lessons/matching-lesson';
import { TrueFalseLesson } from './lessons/true-false-lesson';
import { SequenceLesson } from './lessons/sequence-lesson';
import { FillBlankLesson } from './lessons/fill-blank-lesson';
import { MultipleChoiceLesson } from './lessons/multiple-choice-lesson';

interface LessonViewProps {
  lessonId: number;
  onBack: () => void;
}

export function LessonView({ lessonId, onBack }: LessonViewProps) {
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const lesson = lessonContents.find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Button onClick={onBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <div className="bg-white rounded-xl p-12 text-center">
            <p className="text-gray-600">Lección no encontrada</p>
          </div>
        </div>
      </div>
    );
  }

  const handleComplete = (finalScore: number) => {
    setScore(finalScore);
    setCompleted(true);
  };

  const handleRetry = () => {
    setCompleted(false);
    setScore(0);
  };

  const getStars = (score: number): number => {
    if (score >= 90) return 3;
    if (score >= 70) return 2;
    if (score >= 50) return 1;
    return 0;
  };

  if (completed) {
    const stars = getStars(score);
    const passed = score >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Button onClick={onBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Mi Aprendizaje
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
              {passed ? '¡Lección completada!' : '¡Sigue practicando!'}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Obtuviste {score.toFixed(0)}% en {lesson.title}
            </p>

            <div className="flex justify-center gap-2 mb-8">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-12 h-12 ${
                    i < stars
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="max-w-md mx-auto mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Evaluación:</h3>
                <p className="text-gray-700">
                  {score >= 90 && '¡Excelente! Dominas completamente este tema.'}
                  {score >= 70 && score < 90 && 'Muy bien. Tienes un buen entendimiento del tema.'}
                  {score >= 50 && score < 70 && 'Bien. Repasa algunos conceptos para mejorar.'}
                  {score < 50 && 'Necesitas más práctica. Vuelve a intentarlo.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleRetry}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reintentar
              </Button>
              <Button onClick={onBack} variant="outline">
                Volver a Mi Aprendizaje
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Mi Aprendizaje
        </Button>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm mb-3">
              Lección {lesson.id}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
            <p className="text-gray-600">{lesson.description}</p>
          </div>

          {lesson.type === 'drag-drop' && (
            <DragDropLesson content={lesson.content} onComplete={handleComplete} />
          )}
          {lesson.type === 'matching' && (
            <MatchingLesson content={lesson.content} onComplete={handleComplete} />
          )}
          {lesson.type === 'true-false' && (
            <TrueFalseLesson content={lesson.content} onComplete={handleComplete} />
          )}
          {lesson.type === 'sequence' && (
            <SequenceLesson content={lesson.content} onComplete={handleComplete} />
          )}
          {lesson.type === 'fill-blank' && (
            <FillBlankLesson content={lesson.content} onComplete={handleComplete} />
          )}
          {lesson.type === 'multiple-choice' && (
            <MultipleChoiceLesson content={lesson.content} onComplete={handleComplete} />
          )}
        </div>
      </div>
    </div>
  );
}
