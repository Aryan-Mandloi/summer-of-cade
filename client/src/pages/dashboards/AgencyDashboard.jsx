import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Clock, Users, PlusCircle, X, Image as ImageIcon, CheckCircle } from 'lucide-react';

const AgencyDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State to manage children profiles dynamically
  const [children, setChildren] = useState([
    { id: '1829', status: 'Completed', summary: 'This 8-year-old shows remarkable resilience and a strong interest in science and arts. Based on the uploaded medical history and social worker reports, AI recommends a family with experience in educational support.' },
    { id: '2829', status: 'Completed', summary: 'A 4-year-old with a gentle demeanor. Needs a family capable of providing dedicated time for speech therapy. Shows high compatibility with families expressing patience and long-term care readiness.' },
    { id: '3829', status: 'Completed', summary: 'Energetic 6-year-old boy. Excels in physical activities and requires a highly active family environment. AI assessment confirms all legal CARA clearance documents are in order.' }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    interest: '',
    education: '',
    photo: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProfile = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate AI Processing and DB Save
    setTimeout(() => {
      const newChild = {
        id: Math.floor(1000 + Math.random() * 9000).toString(),
        status: 'Just Added',
        summary: `AI Generated Summary for ${formData.name}: Based on the uploaded profile, this child is interested in ${formData.interest} and is currently at the ${formData.education} education level. AI is verifying address details at ${formData.address} for CARA compliance.`
      };
      
      setChildren([newChild, ...children]);
      setIsSubmitting(false);
      setIsModalOpen(false);
      setFormData({ name: '', address: '', interest: '', education: '', photo: null }); // reset
    }, 2000);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Agency Overview</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl transition-colors shadow-lg shadow-primary/30"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Add Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-2xl text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Total Children</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{121 + children.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl text-purple-600">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500">AI Summaries Generated</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{86 + children.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-2xl text-amber-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Pending Applications</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Generated Summaries List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent AI Profile Summaries</h3>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {children.map((child, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={idx} 
              className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Child #{child.id}</h4>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${child.status === 'Just Added' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400'}`}>
                  {child.status}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {child.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Add Profile Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Add New Child Profile</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleAddProfile} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Photo Upload Area */}
                  <div className="md:col-span-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <p className="text-slate-900 dark:text-white font-medium mb-1">Click to upload securely blurred photo</p>
                    <p className="text-sm text-slate-500">JPG, PNG up to 5MB. AI will automatically mask identity.</p>
                    <input type="file" className="hidden" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Child's Internal Name / Alias</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white" placeholder="e.g., Aarav M." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Current Address / Facility Location</label>
                    <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white" placeholder="e.g., Mumbai Central Orphanage" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Interests / Hobbies</label>
                    <input required type="text" name="interest" value={formData.interest} onChange={handleInputChange} className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white" placeholder="e.g., Drawing, Sports, Reading" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Education Level / Status</label>
                    <input required type="text" name="education" value={formData.education} onChange={handleInputChange} className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white" placeholder="e.g., Grade 3, Pre-school" />
                  </div>
                </div>
                
                <div className="pt-6 flex gap-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl transition-colors hover:bg-slate-200 dark:hover:bg-slate-600">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="flex-1 bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing via Gemini AI...</span>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" /> Generate Profile & Add
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgencyDashboard;
