import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ShieldAlert, BarChart3, Activity, Users, Building2, Heart, Edit2, Ban, CheckCircle, X } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [editingEntity, setEditingEntity] = useState(null);

  // Simulated Database State
  const [entities, setEntities] = useState([
    { id: '1', type: 'agency', name: 'Central Adoption Agency Delhi', email: 'admin@caadelhi.gov.in', status: 'active', verified: true },
    { id: '2', type: 'agency', name: 'Vatsalya Adoption Center', email: 'contact@vatsalya.org', status: 'blocked', verified: false },
    { id: '3', type: 'ngo', name: 'Hope Foundation India', email: 'contact@hopefoundation.in', status: 'active', verified: true },
    { id: '4', type: 'ngo', name: 'Smile Foundation', email: 'smile@smilefoundation.in', status: 'active', verified: true },
    { id: '5', type: 'user', name: 'John Doe (Donor)', email: 'john.doe@example.com', status: 'active', verified: true },
    { id: '6', type: 'user', name: 'Jane Smith (Parent)', email: 'jane.smith@example.com', status: 'blocked', verified: false },
  ]);

  const toggleBlockStatus = (id) => {
    setEntities(entities.map(e => {
      if (e.id === id) {
        return { ...e, status: e.status === 'active' ? 'blocked' : 'active' };
      }
      return e;
    }));
  };

  const saveEdit = (e) => {
    e.preventDefault();
    setEntities(entities.map(ent => ent.id === editingEntity.id ? editingEntity : ent));
    setEditingEntity(null);
  };

  const renderManagementList = (filterType) => {
    const filtered = entities.filter(e => e.type === filterType);
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white capitalize">{filterType}s Directory</h3>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {filtered.map(entity => (
            <div key={entity.id} className="p-6 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {entity.name} 
                  {entity.status === 'blocked' && <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-bold">BLOCKED</span>}
                </h4>
                <p className="text-sm text-slate-500">{entity.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setEditingEntity(entity)}
                  className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                  title="Edit Info"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => toggleBlockStatus(entity.id)}
                  className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold ${entity.status === 'active' ? 'text-red-600 bg-red-50 hover:bg-red-100' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100'}`}
                >
                  {entity.status === 'active' ? <><Ban className="w-4 h-4" /> Block</> : <><CheckCircle className="w-4 h-4" /> Unblock</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '12,482', icon: <Activity className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
          { label: 'Active Agencies', value: '432', icon: <BarChart3 className="w-5 h-5" />, color: 'bg-indigo-100 text-indigo-600' },
          { label: 'AI Fraud Flags', value: '14', icon: <ShieldAlert className="w-5 h-5" />, color: 'bg-red-100 text-red-600' },
          { label: 'Pending Verification', value: '28', icon: <AlertTriangle className="w-5 h-5" />, color: 'bg-amber-100 text-amber-600' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color} dark:bg-opacity-20`}>
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white dark:bg-slate-800 p-1 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 inline-flex">
          <button onClick={() => setActiveTab('overview')} className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'overview' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300'}`}><BarChart3 className="w-4 h-4"/> Overview</button>
          <button onClick={() => setActiveTab('agency')} className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'agency' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300'}`}><Building2 className="w-4 h-4"/> Manage Agencies</button>
          <button onClick={() => setActiveTab('ngo')} className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'ngo' ? 'bg-rose-600 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300'}`}><Heart className="w-4 h-4"/> Manage NGOs</button>
          <button onClick={() => setActiveTab('user')} className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'user' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300'}`}><Users className="w-4 h-4"/> Manage Users</button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fraud Detection Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl border border-red-100 dark:border-red-900/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg text-red-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">AI Fraud Alerts</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { user: 'usr_8x9a', reason: 'Multiple IP mismatches with uploaded documents', risk: 'High' },
                { user: 'agy_2b4c', reason: 'Duplicate child profiles detected', risk: 'Medium' }
              ].map((alert, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-red-100 dark:border-red-800/30 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-slate-500">{alert.user}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${alert.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>{alert.risk}</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{alert.reason}</p>
                  </div>
                  <button className="text-sm text-red-600 font-bold bg-red-100 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors">Action</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {renderManagementList(activeTab)}
        </motion.div>
      )}

      {/* Edit Modal */}
      <AnimatePresence>
        {editingEntity && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Edit {editingEntity.type} Information</h3>
                <button onClick={() => setEditingEntity(null)} className="text-slate-400 hover:text-slate-600 transition-colors"><X className="w-6 h-6" /></button>
              </div>
              <form onSubmit={saveEdit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name / Organization</label>
                  <input type="text" value={editingEntity.name} onChange={(e) => setEditingEntity({...editingEntity, name: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Contact Email</label>
                  <input type="email" value={editingEntity.email} onChange={(e) => setEditingEntity({...editingEntity, email: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white" />
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <input type="checkbox" checked={editingEntity.verified} onChange={(e) => setEditingEntity({...editingEntity, verified: e.target.checked})} className="w-5 h-5 rounded text-indigo-600" />
                  <label className="text-slate-700 dark:text-slate-300 font-medium">Platform Verified / CARA Compliant</label>
                </div>
                
                <div className="pt-4 flex gap-4">
                  <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-indigo-600/30">Save Changes</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
