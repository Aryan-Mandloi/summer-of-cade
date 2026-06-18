import { motion } from 'framer-motion';
import { Heart, Globe, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Building a World Where Every Child <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Belongs</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            aasara AI was born out of a mission to modernize and secure the child welfare ecosystem. By harnessing the power of Google Gemini AI, we eliminate bottlenecks in adoption, streamline sponsorships, and aggressively detect fraud to protect the most vulnerable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700"
          >
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We aim to reduce the time it takes for a child to find a home by 60%, while simultaneously increasing the safety and success rate of adoptions through AI-driven readiness assessments and rigorous fraud detection workflows.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700"
          >
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Child Safety First</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Privacy isn't just a feature; it's our core principle. All child profiles undergo heavy anonymization. Full identities are strictly protected and only revealed post-approval under stringent legal oversight.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
            <p className="text-lg opacity-90 mb-8">Whether you are an agency looking to streamline operations, or a parent ready to welcome a child, aasara AI is your intelligent partner.</p>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span className="font-semibold">12,400+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6" />
                <span className="font-semibold">Global Reach</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
