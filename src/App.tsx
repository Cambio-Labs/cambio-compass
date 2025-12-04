import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import Wizard from './components/Wizard';
import Results from './components/Results';
import { QUESTIONS, PROGRAMS } from './constants';
import { calculateMatches } from './services/matchingEngine';
import { MatchResult } from './types';

function App() {
  const [view, setView] = useState<'welcome' | 'wizard' | 'results'>('welcome');
  const [results, setResults] = useState<MatchResult[]>([]);

  const handleStart = () => {
    setView('wizard');
  };

  const handleComplete = (answers: Record<string, any>) => {
    const matches = calculateMatches(PROGRAMS, answers);
    setResults(matches);
    setView('results');
  };

  const handleReset = () => {
    setView('welcome');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-24 flex items-center justify-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleReset}>
            <img src="https://static.wixstatic.com/media/5589a1_ec65efcd332043d58b5e406acb619f7d~mv2.png/v1/crop/x_0,y_0,w_280,h_330/fill/w_128,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cambio-Labs-Inline.png" alt="Cambio Labs" className="h-16 w-auto" />
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center" style={{ fontFamily: 'avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif' }}>Cambio Compass</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {view === 'welcome' && (
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="max-w-5xl w-full text-center">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 transform -rotate-6">
                <Compass className="w-12 h-12 text-brand" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif' }}>Find the support your business needs</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed mx-auto">Answer a few simple questions about your goals to receive personalized matches for the most relevant free business resources and opportunities</p>

              <button
                onClick={handleStart}
                className="bg-brand hover:bg-brand-dark text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand/30 transition-all hover:scale-105 active:scale-95"
              >
                Find My Resources
              </button>

              <p className="mt-8 text-sm text-slate-400">
                Takes less than 2 minutes • No account required
              </p>
            </div>
          </div>
        )}

        {view === 'wizard' && (
          <Wizard questions={QUESTIONS} onComplete={handleComplete} />
        )}

        {view === 'results' && (
          <Results results={results} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© Cambio Labs</p>
        </div>
      </footer>
    </div>
  );
}

export default App;