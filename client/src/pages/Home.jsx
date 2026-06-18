import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Sparkles, UserCheck, Bot, BarChart, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50"></div>
          <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Google Gemini AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              {t('hero_title', 'Redefining Child Welfare')} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Reimagined
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('hero_subtitle', 'aasara AI leverages Google Gemini to transform adoption and sponsorship—making it transparent, secure, and ethical while strictly protecting child privacy.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register" className="group relative inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-xl shadow-primary/30 w-full sm:w-auto">
                <span className="relative">Get Started Today</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/directory" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all w-full sm:w-auto">
                View Agencies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ethical AI at the Core</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Our platform uses advanced machine learning to prioritize child safety and ensure legally compliant adoptions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Lock className="w-8 h-8 text-indigo-600" />, title: "Identity Protection", desc: "Strict adherence to CARA guidelines. All child imagery is blurred and identities are masked until legally cleared matches are established." },
              { icon: <Bot className="w-8 h-8 text-emerald-600" />, title: "Gemini AI Matching", desc: "Our proprietary algorithm analyzes emotional readiness, financial stability, and compatibility to find the perfect family fit." },
              { icon: <ShieldCheck className="w-8 h-8 text-rose-600" />, title: "Fraud Prevention", desc: "Automated background verification and anomaly detection ensure that agencies and NGOs operate with 100% transparency." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform shadow-lg">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">How The Platform Works</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">We've simplified the complex legal and emotional journey of adoption and sponsorship into a secure, transparent process.</p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Complete AI Readiness Assessment", desc: "Parents complete a comprehensive questionnaire analyzed by Gemini AI for emotional and financial readiness." },
                  { step: "02", title: "Secure Directory Browsing", desc: "Explore verified NGOs and Agencies. Child profiles are completely anonymous and identity-protected by default." },
                  { step: "03", title: "Initiate Smart Match", desc: "Trigger the Gemini AI to find highly compatible adoption or sponsorship matches based on your verified profile." },
                  { step: "04", title: "Transparent Tracking", desc: "Track application status, legal clearance, and donor fund allocation in real-time through your dashboard." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl border border-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 hidden lg:block">
              {/* Decorative mockup visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 p-8">
                <div className="w-full h-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm p-6 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                    <div className="font-bold text-white text-lg">AI Readiness Report</div>
                    <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-500/30">Verified</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-slate-300 text-sm"><span className="font-bold text-white">Emotional Readiness:</span> Highly capable of providing stable environment.</div>
                    <div className="text-slate-300 text-sm"><span className="font-bold text-white">Financial Stability:</span> Approved for long-term care & education.</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-xs text-indigo-300 mt-1">CARA Compliance</div>
                    </div>
                    <div className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-indigo-300 mt-1">Background Check</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-indigo-900 to-transparent"></div>
                  
                  {/* Floating AI Match Element */}
                  <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl animate-bounce">
                    <div className="flex items-center gap-3">
                      <Bot className="w-8 h-8 text-primary" />
                      <div>
                        <div className="text-sm font-bold text-white">Match Found</div>
                        <div className="text-xs text-indigo-300">92% Compatibility</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Verified Agencies", value: "150+" },
              { label: "Successful Matches", value: "2,400" },
              { label: "Fraud Prevented", value: "100%" },
              { label: "Active Sponsors", value: "12,000+" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800 text-slate-400 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold">a</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">aasara AI</span>
          </div>
          <p className="mb-6">Empowering ethical adoption and transparent sponsorships through Google Gemini AI.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/protocols" className="hover:text-white transition-colors">CARA Guidelines</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
          <div className="mt-12 text-sm opacity-50">
            &copy; 2026 aasara AI Hackathon Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
