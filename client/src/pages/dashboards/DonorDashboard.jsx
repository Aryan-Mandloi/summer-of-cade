import { useState } from 'react';
import { Gift, Award, TrendingUp, CheckCircle, CreditCard, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DonorDashboard = () => {
  const [totalDonated, setTotalDonated] = useState(4250);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [amount, setAmount] = useState('100');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate secure payment gateway processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTotalDonated(prev => prev + parseInt(amount));
      
      // Auto close after success
      setTimeout(() => {
        setIsPaymentModalOpen(false);
        setPaymentSuccess(false);
      }, 2500);
    }, 2000);
  };

  return (
    <div className="space-y-6 relative">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Thank you for your generosity!</h2>
          <p className="opacity-90 max-w-xl">Your continuous sponsorships are actively changing lives. Track the real-world impact of your contributions below.</p>
        </div>
        <button 
          onClick={() => setIsPaymentModalOpen(true)}
          className="bg-white text-indigo-600 hover:bg-slate-50 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
        >
          <Gift className="w-5 h-5" /> Go for Donation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 mb-4">
            <Gift className="w-6 h-6" />
          </div>
          <p className="text-slate-500 text-sm mb-1">Total Donated</p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">${totalDonated.toLocaleString()}</h3>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <p className="text-slate-500 text-sm mb-1">Active Sponsorships</p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">3 Children</h3>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700">
          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 mb-4">
            <Award className="w-6 h-6" />
          </div>
          <p className="text-slate-500 text-sm mb-1">Donor Tier</p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Gold Level</h3>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Impact Reports</h3>
        <div className="space-y-4">
          {[
            { child: 'Aarav M.', update: 'Started 3rd grade with straight As', date: '2 days ago' },
            { child: 'Sofia R.', update: 'Received requested medical supplies', date: '1 week ago' },
            { child: 'Liam T.', update: 'Moved to a permanent foster home', date: '1 month ago' },
          ].map((report, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 border border-slate-100 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center font-bold text-slate-500 dark:text-slate-300">
                  {report.child.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{report.child}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{report.update}</p>
                </div>
              </div>
              <span className="text-xs text-slate-500">{report.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Gateway Modal */}
      <AnimatePresence>
        {isPaymentModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-700 relative overflow-hidden"
            >
              {paymentSuccess ? (
                <div className="p-12 text-center flex flex-col items-center justify-center bg-gradient-to-br from-emerald-400/10 to-teal-500/10 h-[400px]">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Done Payment!</h3>
                  <p className="text-slate-600 dark:text-slate-300">Thank you. Your donation of ${amount} has been securely processed and routed to the agency.</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-indigo-500" /> Secure Donation
                    </h3>
                    <button onClick={() => setIsPaymentModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <form onSubmit={handlePaymentSubmit} className="p-6 space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Donation Amount ($)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                        <input 
                          type="number" 
                          required 
                          min="5"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl py-3 pl-8 pr-4 outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-900 dark:text-white font-bold text-lg" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Card Information</label>
                      <div className="p-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl mb-3">
                        <input type="text" placeholder="Card Number" required className="w-full bg-transparent outline-none text-slate-900 dark:text-white mb-2" />
                        <div className="flex gap-4 border-t border-slate-200 dark:border-slate-600 pt-2">
                          <input type="text" placeholder="MM/YY" required className="w-1/2 bg-transparent outline-none text-slate-900 dark:text-white" />
                          <input type="text" placeholder="CVC" required className="w-1/2 bg-transparent outline-none text-slate-900 dark:text-white border-l border-slate-200 dark:border-slate-600 pl-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 justify-center my-4">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Payments are 256-bit encrypted and completely secure.</span>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isProcessing} 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <span className="animate-pulse">Processing Payment...</span>
                      ) : (
                        `Pay $${amount} Now`
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DonorDashboard;
