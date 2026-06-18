import { useState } from 'react';
import { motion } from 'framer-motion';

const ReadinessForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl mt-12 border border-slate-100 dark:border-slate-700">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AI Readiness Assessment</h2>
      <p className="text-slate-500 mb-8">Step {step} of 3: Emotional Preparedness</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Why do you want to adopt or sponsor a child?
          </label>
          <textarea 
            className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            rows="4"
            placeholder="Please be as detailed as possible..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            How do you plan to support the child's cultural identity?
          </label>
          <textarea 
            className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            rows="4"
            placeholder="Explain your approach to cultural integration..."
          ></textarea>
        </div>

        <div className="flex justify-between pt-4">
          <button 
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="px-6 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 disabled:opacity-50"
          >
            Back
          </button>
          <button 
            onClick={() => setStep(step + 1)}
            className="px-6 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium shadow-md transition-colors"
          >
            {step === 3 ? 'Submit to AI' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadinessForm;
