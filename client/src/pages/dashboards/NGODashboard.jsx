import { HeartHandshake, Users, MapPin, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const NGODashboard = () => {
  const data = [
    { name: 'Jan', outreach: 120, campaigns: 2 },
    { name: 'Feb', outreach: 250, campaigns: 3 },
    { name: 'Mar', outreach: 180, campaigns: 2 },
    { name: 'Apr', outreach: 400, campaigns: 5 },
    { name: 'May', outreach: 350, campaigns: 4 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Campaigns', value: '12', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-emerald-100 text-emerald-600' },
          { label: 'Families Reached', value: '1,430', icon: <Users className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
          { label: 'Field Agents', value: '45', icon: <MapPin className="w-5 h-5" />, color: 'bg-amber-100 text-amber-600' },
          { label: 'Pending Approvals', value: '8', icon: <HeartHandshake className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600' },
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

      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Community Outreach Impact</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorOutreach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <Tooltip />
              <Area type="monotone" dataKey="outreach" stroke="#10B981" fillOpacity={1} fill="url(#colorOutreach)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;
