import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Landing } from './components/landing';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { Chatbot } from './components/chatbot';
import { Learning } from './components/learning';
import { Topics } from './components/topics';
import { Improve } from './components/improve';
import { Quiz, QuizResult } from './components/quiz';
import { LessonView } from './components/lesson-view';

type Screen = 'landing' | 'login' | 'dashboard' | 'learning' | 'topics' | 'improve' | 'quiz' | 'lesson';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [topicProgress, setTopicProgress] = useState<Record<string, { correct: number; total: number }>>({});
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);

  const handleQuizComplete = (results: QuizResult[]) => {
    const newProgress = { ...topicProgress };

    results.forEach((result) => {
      const topic = result.question.topic;
      if (!newProgress[topic]) {
        newProgress[topic] = { correct: 0, total: 0 };
      }
      newProgress[topic].total += 1;
      if (result.isCorrect) {
        newProgress[topic].correct += 1;
      }
    });

    setTopicProgress(newProgress);
  };

  const handleOpenLesson = (lessonId: number) => {
    setCurrentLessonId(lessonId);
    setCurrentScreen('lesson');
  };

  const handleBackFromLesson = () => {
    setCurrentLessonId(null);
    setCurrentScreen('learning');
  };

  const showChatbotButton = currentScreen !== 'landing' && currentScreen !== 'login';

  return (
    <div className="size-full relative">
      {currentScreen === 'landing' && (
        <Landing onEnter={() => setCurrentScreen('login')} />
      )}

      {currentScreen === 'login' && (
        <Login onLogin={() => setCurrentScreen('dashboard')} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard onNavigate={(section) => setCurrentScreen(section as Screen)} />
      )}

      {currentScreen === 'learning' && (
        <Learning
          onBack={() => setCurrentScreen('dashboard')}
          onOpenLesson={handleOpenLesson}
        />
      )}

      {currentScreen === 'topics' && (
        <Topics
          onBack={() => setCurrentScreen('dashboard')}
          topicProgress={topicProgress}
        />
      )}

      {currentScreen === 'improve' && (
        <Improve
          onBack={() => setCurrentScreen('dashboard')}
          topicProgress={topicProgress}
          onOpenLesson={handleOpenLesson}
        />
      )}

      {currentScreen === 'lesson' && currentLessonId && (
        <LessonView
          lessonId={currentLessonId}
          onBack={handleBackFromLesson}
        />
      )}

      {currentScreen === 'quiz' && (
        <Quiz
          onBack={() => setCurrentScreen('dashboard')}
          onComplete={handleQuizComplete}
        />
      )}

      {showChatbotButton && (
        <Button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-2xl z-40"
          size="icon"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      )}

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
}