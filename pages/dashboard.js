import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [healthStatus, setHealthStatus] = useState(null);

  useEffect(() => {
    // Simulate user data loading
    const loadUserData = () => {
      setTimeout(() => {
        setUser({
          name: 'Hackathon Participant',
          email: 'participant@hackathon.com',
          joinedDate: new Date().toLocaleDateString()
        });
        
        setGoals([
          {
            id: 1,
            title: 'Complete Project MVP',
            progress: 75,
            deadline: '2025-08-27',
            status: 'in-progress'
          },
          {
            id: 2,
            title: 'Prepare Final Presentation',
            progress: 30,
            deadline: '2025-08-27',
            status: 'pending'
          },
          {
            id: 3,
            title: 'Deploy Application',
            progress: 50,
            deadline: '2025-08-27',
            status: 'in-progress'
          }
        ]);
        
        setLoading(false);
      }, 1000);
    };

    // Check system health
    const checkHealth = async () => {
      try {
        const response = await fetch('/api/health');
        const health = await response.json();
        setHealthStatus(health.status);
      } catch (error) {
        console.error('Failed to check system health:', error);
        setHealthStatus('unknown');
      }
    };

    loadUserData();
    checkHealth();
  }, []);

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusBadge = (status) => {
    const badges = {
      'completed': 'bg-green-100 text-green-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'pending': 'bg-yellow-100 text-yellow-800',
      'overdue': 'bg-red-100 text-red-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dashboard - Motimax</title>
        <meta name="description" content="Your personal motivation dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600 mt-2">Track your progress and stay motivated</p>
            </div>
            <div className="text-right">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                healthStatus === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  healthStatus === 'healthy' ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                System {healthStatus || 'Unknown'}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Goals</h3>
            <p className="text-3xl font-bold text-blue-600">{goals.length}</p>
            <p className="text-gray-500 text-sm mt-1">Goals in progress</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Progress</h3>
            <p className="text-3xl font-bold text-green-600">
              {Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)}%
            </p>
            <p className="text-gray-500 text-sm mt-1">Across all goals</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Days Remaining</h3>
            <p className="text-3xl font-bold text-purple-600">1</p>
            <p className="text-gray-500 text-sm mt-1">Until hackathon ends</p>
          </div>
        </div>

        {/* Goals List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Goals</h2>
          </div>
          
          <div className="p-6 space-y-4">
            {goals.map(goal => (
              <div key={goal.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{goal.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(goal.status)}`}>
                    {goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{goal.progress}%</span>
                </div>
                
                <p className="text-sm text-gray-500">
                  Deadline: {new Date(goal.deadline).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
            Add New Goal
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
            View Progress Report
          </button>
        </div>
      </div>
    </div>
  );
}
