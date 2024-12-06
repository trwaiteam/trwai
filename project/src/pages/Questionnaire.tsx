import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Header } from '../components/Header';

interface Question {
  id: string;
  type: 'text' | 'select' | 'textarea';
  question: string;
  placeholder?: string;
  options?: string[];
  validation?: (value: string) => string | undefined;
}

const questions: Question[] = [
  {
    id: 'name',
    type: 'text',
    question: 'What is your full name?',
    placeholder: 'John Doe',
    validation: (value) => !value ? 'Name is required' : undefined,
  },
  {
    id: 'company',
    type: 'text',
    question: 'What is your company name?',
    placeholder: 'Acme Inc.',
    validation: (value) => !value ? 'Company name is required' : undefined,
  },
  {
    id: 'service',
    type: 'select',
    question: 'Which service are you interested in?',
    options: [
      'AI Lead Generation',
      'Customer Support AI',
      'CRM Integrations',
      'Other'
    ],
    validation: (value) => !value ? 'Please select a service' : undefined,
  },
  {
    id: 'requirements',
    type: 'textarea',
    question: 'Tell us about your specific needs and requirements',
    placeholder: 'Please provide details about your project...',
    validation: (value) => 
      !value ? 'Requirements are required' : 
      value.length < 50 ? 'Please provide at least 50 characters' : undefined,
  },
];

export function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleNext = () => {
    const error = currentQuestion.validation?.(answers[currentQuestion.id] || '');
    if (error) {
      setErrors({ ...errors, [currentQuestion.id]: error });
      return;
    }
    setErrors({ ...errors, [currentQuestion.id]: '' });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const error = currentQuestion.validation?.(answers[currentQuestion.id] || '');
    if (error) {
      setErrors({ ...errors, [currentQuestion.id]: error });
      return;
    }
    console.log('Form submitted:', answers);
    // Handle form submission
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentStep === questions.length - 1) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4 font-mono">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-black/50 backdrop-blur-lg rounded-lg border border-terminal-purple/20 p-8"
        >
          {/* Progress bar */}
          <div className="relative h-1 bg-terminal-purple/20 rounded-full mb-8">
            <motion.div
              className="absolute left-0 top-0 h-full bg-terminal-purple rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-terminal-purple mb-8">
                {currentQuestion.question}
              </h2>

              {currentQuestion.type === 'text' && (
                <input
                  type="text"
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                  onKeyPress={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  className="w-full bg-black/50 border border-terminal-purple/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terminal-purple/60 transition-colors"
                />
              )}

              {currentQuestion.type === 'select' && (
                <select
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                  className="w-full bg-black/50 border border-terminal-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-terminal-purple/60 transition-colors"
                >
                  <option value="">Select a service...</option>
                  {currentQuestion.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {currentQuestion.type === 'textarea' && (
                <textarea
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                  onKeyPress={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  rows={5}
                  className="w-full bg-black/50 border border-terminal-purple/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terminal-purple/60 transition-colors resize-none"
                />
              )}

              {errors[currentQuestion.id] && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {errors[currentQuestion.id]}
                </motion.p>
              )}

              <div className="flex justify-between pt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    currentStep === 0
                      ? 'text-white/30 cursor-not-allowed'
                      : 'text-white hover:text-terminal-purple'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                {currentStep === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 bg-terminal-purple text-black px-6 py-2 rounded-lg hover:bg-terminal-purple/90 transition-colors"
                  >
                    <span>Submit</span>
                    <Send className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center space-x-2 text-white hover:text-terminal-purple transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}