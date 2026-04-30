import { BookOpen, Target, TrendingDown, Brain } from 'lucide-react';
import { Button } from './ui/button';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Panel de Control</h1>
          <p className="text-gray-600">Elige una sección para continuar tu aprendizaje</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Button
            onClick={() => onNavigate('learning')}
            className="h-auto p-0 hover:scale-105 transition-transform"
            variant="outline"
          >
            <div className="w-full bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-8 text-left">
              <BookOpen className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Mi Aprendizaje</h2>
              <p className="text-blue-100">
                Roadmap completo con lecciones gamificadas sobre seguridad vial
              </p>
            </div>
          </Button>

          <Button
            onClick={() => onNavigate('topics')}
            className="h-auto p-0 hover:scale-105 transition-transform"
            variant="outline"
          >
            <div className="w-full bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-8 text-left">
              <Target className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Temas</h2>
              <p className="text-green-100">
                Revisa tu progreso en cada tema y áreas donde destacas
              </p>
            </div>
          </Button>

          <Button
            onClick={() => onNavigate('improve')}
            className="h-auto p-0 hover:scale-105 transition-transform"
            variant="outline"
          >
            <div className="w-full bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-8 text-left">
              <TrendingDown className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Por Mejorar</h2>
              <p className="text-orange-100">
                Identifica tus áreas débiles y recibe consejos personalizados
              </p>
            </div>
          </Button>

          <Button
            onClick={() => onNavigate('quiz')}
            className="h-auto p-0 hover:scale-105 transition-transform"
            variant="outline"
          >
            <div className="w-full bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-8 text-left">
              <Brain className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Quiz</h2>
              <p className="text-purple-100">
                Practica con preguntas del examen y mejora tu desempeño
              </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
