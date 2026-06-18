import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Users, FileText, ChevronRight, Search, Building2, Heart, Bot, Shield, CheckCircle, Sparkles } from 'lucide-react';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

const ParentDashboard = () => {
  const [isMatching, setIsMatching] = useState(false);
  const [matchResults, setMatchResults] = useState(null);
  
  const [viewAll, setViewAll] = useState({
    ngos: false,
    agencies: false,
    children: false
  });

  const readinessData = [
    { name: 'Base', score: 100, fill: '#f1f5f9' },
    { name: 'Readiness', score: 85, fill: '#10B981' }
  ];

  const ngos = [
    { name: "Hope Foundation India", focus: "Education & Healthcare", location: "New Delhi" },
    { name: "Save The Children", focus: "Emergency Relief", location: "Mumbai" },
    { name: "Smile Foundation", focus: "Child Welfare", location: "Bangalore" },
    { name: "Pratham Education", focus: "Rural Education", location: "Pune" },
    { name: "CRY India", focus: "Child Rights", location: "Chennai" },
    { name: "Akshaya Patra", focus: "Nutrition", location: "Hyderabad" },
  ];

  const agencies = [
    { name: "Central Adoption Agency Delhi", id: "CAA-DL-001", type: "Govt Recognized" },
    { name: "Vatsalya Adoption Center", id: "VAC-MH-023", type: "NGO Partnered" },
    { name: "Kiran Child Welfare", id: "KCW-KA-011", type: "Special Needs" },
    { name: "Aashraya Foundation", id: "ASH-UP-005", type: "Govt Recognized" },
    { name: "Sunrise Adoption Hub", id: "SAH-RJ-019", type: "NGO Partnered" },
    { name: "Harmony Child Care", id: "HCC-WB-008", type: "Special Needs" },
  ];

  const children = [
    { id: "#CH-8821", age: "4 years", gender: "Female", health: "Healthy" },
    { id: "#CH-3392", age: "6 years", gender: "Male", health: "Special Needs" },
    { id: "#CH-1105", age: "2 years", gender: "Female", health: "Healthy" },
    { id: "#CH-4481", age: "7 years", gender: "Male", health: "Healthy" },
    { id: "#CH-9923", age: "5 years", gender: "Female", health: "Healthy" },
    { id: "#CH-2210", age: "3 years", gender: "Male", health: "Special Needs" },
  ];

  const handleInitiateMatch = () => {
    setIsMatching(true);
    // Simulate AI thinking time
    setTimeout(() => {
      setIsMatching(false);
      setMatchResults([
        { id: "#CH-8821", compatibility: 94, reason: "Strong alignment in emotional readiness and requested age group." },
        { id: "#CH-1105", compatibility: 88, reason: "Excellent financial stability match for long-term care needs." }
      ]);
    }, 3000);
  };

  const toggleViewAll = (section) => {
    setViewAll(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Section: Readiness & AI Match Trigger */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">AI Readiness Score</h2>
            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl text-green-600">
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={15} data={readinessData} startAngle={180} endAngle={0}>
                <RadialBar minAngle={15} background clockWise dataKey="score" cornerRadius={10} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center -mt-16">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">85%</span>
            <p className="text-sm text-slate-500 mt-1">Excellent Preparedness</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Gemini AI Match Engine</h2>
            <p className="opacity-90 mb-8 max-w-lg">
              Your profile has been verified. You can explore the network below, or ask our AI to analyze your emotional and financial readiness against the CARA-compliant database to find highly compatible matches.
            </p>
            
            {!matchResults ? (
              <button 
                onClick={handleInitiateMatch}
                disabled={isMatching}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg disabled:opacity-75 disabled:hover:scale-100"
              >
                {isMatching ? (
                  <>
                    <Bot className="w-5 h-5 animate-pulse" /> Analyzing Database...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Initiate AI Match
                  </>
                )}
              </button>
            ) : (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-3 text-green-300 font-bold">
                  <CheckCircle className="w-5 h-5" /> Matches Found
                </div>
                <div className="space-y-3">
                  {matchResults.map((match, idx) => (
                    <div key={idx} className="bg-white/10 rounded-xl p-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold">{match.id}</div>
                        <div className="text-sm opacity-80">{match.reason}</div>
                      </div>
                      <div className="text-xl font-bold text-green-300">{match.compatibility}%</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Directory Section */}
      <div className="space-y-8">
        {/* Child Directory */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> Identity-Protected Children
              </h2>
              <p className="text-sm text-slate-500 mt-1">Faces blurred as per JJ Act Section 74</p>
            </div>
            <button onClick={() => toggleViewAll('children')} className="text-primary hover:text-primary-hover font-medium flex items-center text-sm">
              {viewAll.children ? 'Show Less' : 'View All'} <ChevronRight className={`w-4 h-4 transition-transform ${viewAll.children ? 'rotate-90' : ''}`} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(viewAll.children ? children : children.slice(0, 4)).map((child, idx) => (
              <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-2xl p-4 hover:shadow-md transition-shadow bg-slate-50 dark:bg-slate-700/30">
                <div className="w-full h-32 rounded-xl bg-slate-200 dark:bg-slate-600 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-purple-400/50 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white/50" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{child.id}</h3>
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>{child.age}</span>
                  <span>{child.gender}</span>
                </div>
                <div className="mt-2 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded inline-block">
                  {child.health}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agencies Directory */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-500" /> Verified Adoption Agencies
            </h2>
            <button onClick={() => toggleViewAll('agencies')} className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center text-sm">
              {viewAll.agencies ? 'Show Less' : 'View All'} <ChevronRight className={`w-4 h-4 transition-transform ${viewAll.agencies ? 'rotate-90' : ''}`} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(viewAll.agencies ? agencies : agencies.slice(0, 4)).map((agency, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{agency.name}</h3>
                  <div className="flex gap-3 text-sm text-slate-500 mt-1">
                    <span>{agency.id}</span>
                    <span className="text-indigo-500">• {agency.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NGOs Directory */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" /> Verified NGOs
            </h2>
            <button onClick={() => toggleViewAll('ngos')} className="text-rose-600 hover:text-rose-700 font-medium flex items-center text-sm">
              {viewAll.ngos ? 'Show Less' : 'View All'} <ChevronRight className={`w-4 h-4 transition-transform ${viewAll.ngos ? 'rotate-90' : ''}`} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(viewAll.ngos ? ngos : ngos.slice(0, 4)).map((ngo, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{ngo.name}</h3>
                  <div className="flex gap-3 text-sm text-slate-500 mt-1">
                    <span>{ngo.location}</span>
                    <span className="text-rose-500">• {ngo.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
