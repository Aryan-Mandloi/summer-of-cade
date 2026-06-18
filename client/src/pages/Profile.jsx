import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, Calendar } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [password, setPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleUpdateProfile = async () => {
    try {
      await axios.put('/api/auth/profile', { name });
      alert('Profile updated successfully! Please refresh.');
      setIsEditing(false);
    } catch (error) {
      alert('Failed to update profile');
    }
  };

  const handleChangePassword = async () => {
    try {
      await axios.put('/api/auth/password', { password });
      alert('Password updated successfully!');
      setIsChangingPassword(false);
      setPassword('');
    } catch (error) {
      alert('Failed to update password');
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to completely delete your account? This action cannot be undone.')) {
      try {
        await axios.delete('/api/auth/profile');
        logout();
        navigate('/');
      } catch (error) {
        alert('Failed to delete account');
      }
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 px-4 pb-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">My Profile</h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
          <div className="bg-gradient-to-r from-primary to-accent h-32 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full p-2 flex items-center justify-center">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-primary text-3xl font-bold uppercase">
                  {user.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 px-8 pb-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                {isEditing ? (
                  <div className="flex gap-2">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="border rounded px-2 py-1 text-slate-900" />
                    <button onClick={handleUpdateProfile} className="bg-primary text-white px-3 rounded">Save</button>
                    <button onClick={() => setIsEditing(false)} className="text-slate-500">Cancel</button>
                  </div>
                ) : (
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                )}
                <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  {user.role}
                </span>
              </div>
              {!isEditing && (
                <button onClick={() => setIsEditing(true)} className="px-5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl text-slate-700 dark:text-slate-300 font-medium transition-colors">
                  Edit Profile
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email Address</p>
                  <p className="font-medium text-slate-900 dark:text-white">{user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Member Since</p>
                  <p className="font-medium text-slate-900 dark:text-white">June 2026</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Account Security</h3>
              
              {isChangingPassword && (
                <div className="flex gap-2 mb-4">
                  <input type="password" placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} className="border rounded px-2 py-1 text-slate-900" />
                  <button onClick={handleChangePassword} className="bg-primary text-white px-3 rounded">Save</button>
                  <button onClick={() => setIsChangingPassword(false)} className="text-slate-500">Cancel</button>
                </div>
              )}

              <div className="flex gap-4">
                {!isChangingPassword && (
                  <button onClick={() => setIsChangingPassword(true)} className="px-5 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Change Password
                  </button>
                )}
                <button onClick={handleDeleteAccount} className="px-5 py-2 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
