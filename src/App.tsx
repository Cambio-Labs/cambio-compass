import React, { useState } from 'react';
import Wizard from './components/Wizard';
import Results from './components/Results';
import LandingPage from './components/LandingPage';
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
          <LandingPage onStart={handleStart} />
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
          &copy; {new Date().getFullYear()} Cambio Labs
        </div>
      </footer>
    </div>
  );
}

export default App;