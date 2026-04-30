import { GraduationCap, BookOpen, Target, Trophy } from 'lucide-react';
import { Button } from './ui/button';

interface LandingProps {
  onEnter: () => void;
}

export function Landing({ onEnter }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-4">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Examen Teórico de Manejo
          </h1>
          <p className="text-xl text-gray-600">
            Tu plataforma de aprendizaje gamificado para aprobar el examen en Costa Rica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Aprende por temas</h3>
            <p className="text-sm text-gray-600">
              Roadmap estructurado con lecciones sobre señales, velocidad y más
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Identifica debilidades</h3>
            <p className="text-sm text-gray-600">
              Sistema inteligente que detecta tus áreas de mejora
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Practica con quiz</h3>
            <p className="text-sm text-gray-600">
              Preguntas reales del examen con retroalimentación inmediata
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={onEnter}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl"
          >
            Entrar
          </Button>
          <p className="text-sm text-gray-500">
            Comienza tu camino hacia la licencia de conducir
          </p>
        </div>
      </div>
    </div>
  );
}
