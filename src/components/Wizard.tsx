import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Question, QuestionOption } from '../types';
import ProgressBar from './ProgressBar';

interface WizardProps {
  questions: Question[];
  onComplete: (answers: Record<string, any>) => void;
}

const Wizard: React.FC<WizardProps> = ({ questions, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [direction, setDirection] = useState(1);

  // Filter questions based on conditionals
  const activeQuestions = useMemo(() => {
    return questions.filter(q => !q.conditional || q.conditional(answers));
  }, [questions, answers]);

  const currentQuestion = activeQuestions[currentStep];

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    
    // Auto-advance for single choice
    if (currentQuestion.type !== 'multi') {
      setTimeout(() => nextStep(), 250);
    }
  };

  const toggleMultiSelect = (value: any) => {
    const current = (answers[currentQuestion.id] as any[]) || [];
    const exists = current.includes(value);
    const updated = exists ? current.filter(v => v !== value) : [...current, value];
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: updated }));
  };

  const nextStep = () => {
    if (currentStep < activeQuestions.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col min-h-[600px]">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevStep} 
          disabled={currentStep === 0}
          className={`p-2 rounded-full hover:bg-slate-100 transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <ArrowLeft className="w-6 h-6 text-slate-500" />
        </button>
        <span className="text-sm font-medium text-slate-400">
          Question {currentStep + 1} of {activeQuestions.length}
        </span>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <ProgressBar current={currentStep + 1} total={activeQuestions.length} />

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentQuestion.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{currentQuestion.text}</h2>
            {currentQuestion.subText && (
              <p className="text-lg text-slate-500 mb-8">{currentQuestion.subText}</p>
            )}

            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <OptionButton
                  key={option.label}
                  option={option}
                  selected={
                    currentQuestion.type === 'multi'
                      ? (answers[currentQuestion.id] || []).includes(option.value)
                      : answers[currentQuestion.id] === option.value
                  }
                  onClick={() => 
                    currentQuestion.type === 'multi' 
                      ? toggleMultiSelect(option.value) 
                      : handleAnswer(option.value)
                  }
                  multi={currentQuestion.type === 'multi'}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-end">
        {currentQuestion.type === 'multi' && (
          <button
            onClick={nextStep}
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-brand-light"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

const OptionButton: React.FC<{
  option: QuestionOption;
  selected: boolean;
  onClick: () => void;
  multi: boolean;
}> = ({ option, selected, onClick, multi }) => (
  <button
    onClick={onClick}
    className={`w-full p-4 md:p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-start md:items-center justify-between group
      ${selected 
        ? 'border-brand bg-brand-light/10 shadow-md' 
        : 'border-slate-200 hover:border-brand-light hover:bg-slate-50 bg-white'
      }
    `}
  >
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 w-full">
      {option.icon && (
        <div className={`p-2 rounded-lg shrink-0 ${selected ? 'bg-brand-light/30 text-brand-dark' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-light/20 group-hover:text-brand'}`}>
          {option.icon}
        </div>
      )}
      <div className="flex-1">
        <span className={`text-lg font-bold block ${selected ? 'text-brand-dark' : 'text-slate-800'}`}>
          {option.label}
        </span>
        {option.description && (
          <span className={`text-sm block mt-1 ${selected ? 'text-brand-dark/80' : 'text-slate-500'}`}>
            {option.description}
          </span>
        )}
      </div>
    </div>
    
    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-4
      ${selected 
        ? 'bg-brand border-brand' 
        : 'border-slate-300 group-hover:border-brand-light'
      }
    `}>
      {selected && <Check className="w-4 h-4 text-white" />}
    </div>
  </button>
);

export default Wizard;