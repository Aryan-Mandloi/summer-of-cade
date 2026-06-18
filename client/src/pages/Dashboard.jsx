import { useAuth } from '../context/AuthContext';
import ParentDashboard from './dashboards/ParentDashboard';
import AgencyDashboard from './dashboards/AgencyDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import NGODashboard from './dashboards/NGODashboard';
import DonorDashboard from './dashboards/DonorDashboard';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Welcome back, {user.name}
        </h1>
        
        {user.role === 'parent' && <ParentDashboard />}
        {user.role === 'agency' && <AgencyDashboard />}
        {user.role === 'admin' && <AdminDashboard />}
        {user.role === 'ngo' && <NGODashboard />}
        {user.role === 'sponsor' && <DonorDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
