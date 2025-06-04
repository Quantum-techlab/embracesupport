
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Home, BarChart3, MessageCircle, Search, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Navigation = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard', protected: true },
    { path: '/mood-tracker', icon: Heart, label: 'Mood Tracker', protected: true },
    { path: '/chat-rooms', icon: MessageCircle, label: 'Support Groups', protected: true },
    { path: '/resources', icon: Search, label: 'Resources' },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-healing-600 rounded-full">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MindCare</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.protected && !user) return null;
              
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-healing-600 bg-healing-50'
                      : 'text-gray-600 hover:text-healing-600 hover:bg-healing-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/settings">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">{user.email}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center space-x-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="bg-healing-600 hover:bg-healing-700">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
