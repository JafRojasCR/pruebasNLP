import { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface DragDropLessonProps {
  content: {
    instruction: string;
    categories: Array<{ id: string; name: string; color: string }>;
    items: Array<{ id: number; text: string; category: string }>;
  };
  onComplete: (score: number) => void;
}

interface DraggableItemProps {
  id: number;
  text: string;
  onDrop: (id: number) => void;
}

function DraggableItem({ id, text, onDrop }: DraggableItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { id },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onDrop(item.id);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className={`bg-white border-2 border-indigo-300 rounded-lg px-4 py-3 cursor-move shadow-sm hover:shadow-md transition-all ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <p className="text-sm font-medium text-gray-900">{text}</p>
    </div>
  );
}

interface DropZoneProps {
  categoryId: string;
  name: string;
  color: string;
  items: Array<{ id: number; text: string }>;
  onDrop: (itemId: number, categoryId: string) => void;
  showResults: boolean;
  correctItems: Set<number>;
}

function DropZone({ categoryId, name, color, items, onDrop, showResults, correctItems }: DropZoneProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item: { id: number }) => {
      onDrop(item.id, categoryId);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const colorClasses = {
    yellow: 'bg-yellow-50 border-yellow-300',
    red: 'bg-red-50 border-red-300',
    blue: 'bg-blue-50 border-blue-300',
    green: 'bg-green-50 border-green-300'
  };

  return (
    <div
      ref={drop}
      className={`min-h-[200px] rounded-xl border-2 border-dashed p-4 transition-all ${
        colorClasses[color as keyof typeof colorClasses] || 'bg-gray-50 border-gray-300'
      } ${isOver ? 'ring-4 ring-indigo-200' : ''}`}
    >
      <h3 className="font-semibold text-gray-900 mb-3 text-center">{name}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg px-4 py-3 shadow-sm ${
              showResults
                ? correctItems.has(item.id)
                  ? 'border-2 border-green-500 bg-green-50'
                  : 'border-2 border-red-500 bg-red-50'
                : 'border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">{item.text}</p>
              {showResults && (
                correctItems.has(item.id) ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DragDropLesson({ content, onComplete }: DragDropLessonProps) {
  const [availableItems, setAvailableItems] = useState(content.items);
  const [categorizedItems, setCategorizedItems] = useState<Record<string, Array<{ id: number; text: string; correctCategory: string }>>>({});
  const [showResults, setShowResults] = useState(false);

  const handleDrop = (itemId: number, categoryId: string) => {
    const item = availableItems.find(i => i.id === itemId);
    if (!item) return;

    setAvailableItems(prev => prev.filter(i => i.id !== itemId));
    setCategorizedItems(prev => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), { id: item.id, text: item.text, correctCategory: item.category }]
    }));
  };

  const handleRemoveFromCategory = (itemId: number) => {
    const item = content.items.find(i => i.id === itemId);
    if (!item) return;

    setCategorizedItems(prev => {
      const newCategorized = { ...prev };
      Object.keys(newCategorized).forEach(key => {
        newCategorized[key] = newCategorized[key].filter(i => i.id !== itemId);
      });
      return newCategorized;
    });

    setAvailableItems(prev => [...prev, item]);
  };

  const handleCheck = () => {
    setShowResults(true);
    let correct = 0;
    let total = 0;

    Object.entries(categorizedItems).forEach(([categoryId, items]) => {
      items.forEach(item => {
        total++;
        if (item.correctCategory === categoryId) {
          correct++;
        }
      });
    });

    const score = total > 0 ? (correct / total) * 100 : 0;
    setTimeout(() => onComplete(score), 2000);
  };

  const getCorrectItems = (categoryId: string): Set<number> => {
    const items = categorizedItems[categoryId] || [];
    return new Set(items.filter(item => item.correctCategory === categoryId).map(item => item.id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-900 font-medium">{content.instruction}</p>
        </div>

        {availableItems.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Elementos disponibles:</h3>
            <div className="grid grid-cols-2 gap-3">
              {availableItems.map((item) => (
                <DraggableItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  onDrop={handleRemoveFromCategory}
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-4">
          {content.categories.map((category) => (
            <DropZone
              key={category.id}
              categoryId={category.id}
              name={category.name}
              color={category.color}
              items={(categorizedItems[category.id] || []).map(item => ({ id: item.id, text: item.text }))}
              onDrop={handleDrop}
              showResults={showResults}
              correctItems={getCorrectItems(category.id)}
            />
          ))}
        </div>

        {availableItems.length === 0 && !showResults && (
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
    </DndProvider>
  );
}
