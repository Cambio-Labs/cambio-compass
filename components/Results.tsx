import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw, Trophy, Star, CheckCircle } from 'lucide-react';
import { MatchResult } from '../types';

interface ResultsProps {
  results: MatchResult[];
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ results, onReset }) => {
  const topMatch = results[0];
  const otherMatches = results.slice(1);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">We found {results.length} matches</h2>
        <p className="text-slate-500">Based on your profile, here are the best resources for you.</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Top Match - Featured */}
        {topMatch && (
          <motion.div variants={item} className="relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm z-10 border border-brand-light">
               <Trophy className="w-4 h-4 text-yellow-300" /> Top Recommendation
             </div>
             <div className="bg-white rounded-2xl p-8 border-2 border-brand shadow-xl overflow-hidden relative">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Star className="w-40 h-40 text-brand" />
               </div>
               
               <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-brand-dark">{topMatch.program.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {topMatch.reasons.map((reason, idx) => (
                          <span key={idx} className="bg-brand/10 text-brand-dark border border-brand/20 text-xs px-2 py-1 rounded-md font-semibold flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> {reason}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={topMatch.program.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand/20 whitespace-nowrap"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">{topMatch.program.description}</p>
               </div>
             </div>
          </motion.div>
        )}

        {/* Other Matches Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherMatches.map((match) => (
            <motion.div key={match.program.id} variants={item} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-light hover:shadow-md transition-all flex flex-col group">
               <div className="mb-4 flex-1">
                 <h4 className="text-xl font-bold text-slate-800 group-hover:text-brand transition-colors mb-2">{match.program.name}</h4>
                 <div className="flex flex-wrap gap-2 mb-3">
                    {match.reasons.slice(0, 3).map((reason, idx) => (
                      <span key={idx} className="bg-slate-50 text-slate-600 text-xs px-2 py-1 rounded-md border border-slate-100">
                        {reason}
                      </span>
                    ))}
                 </div>
                 <p className="text-slate-600 text-sm">{match.program.description}</p>
               </div>
               
               <a 
                  href={match.program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-brand hover:text-white hover:border-brand transition-all flex items-center justify-center gap-2"
                >
                  Learn More <ExternalLink className="w-3 h-3" />
                </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 text-center">
        <button 
          onClick={onReset}
          className="text-slate-500 hover:text-brand font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
        >
          <RefreshCw className="w-4 h-4" /> Start Over
        </button>
      </div>
    </div>
  );
};

export default Results;