
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Search, Calendar, TrendingUp, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back to your wellness journey</h1>
          <p className="text-gray-600">Here's how you're doing today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-healing-50 border-healing-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-healing-600">Mood Today</p>
                  <p className="text-2xl font-bold text-healing-700">7/10</p>
                </div>
                <Heart className="w-8 h-8 text-healing-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-serenity-50 border-serenity-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-serenity-600">Days Tracked</p>
                  <p className="text-2xl font-bold text-serenity-700">14</p>
                </div>
                <TrendingUp className="w-8 h-8 text-serenity-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-calm-50 border-calm-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-calm-600">Support Groups</p>
                  <p className="text-2xl font-bold text-calm-700">3</p>
                </div>
                <Users className="w-8 h-8 text-calm-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Resources Saved</p>
                  <p className="text-2xl font-bold text-purple-700">8</p>
                </div>
                <Search className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-healing-600" />
                <span>Track Your Mood</span>
              </CardTitle>
              <CardDescription>
                Log how you're feeling today and track your emotional patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-healing-600 hover:bg-healing-700">
                Log Mood
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-serenity-600" />
                <span>Join Support Groups</span>
              </CardTitle>
              <CardDescription>
                Connect with others who understand your journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-serenity-600 hover:bg-serenity-700">
                Browse Groups
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-calm-600" />
                <span>Find Resources</span>
              </CardTitle>
              <CardDescription>
                Discover free mental health resources near you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-calm-600 hover:bg-calm-700">
                Explore Resources
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest interactions and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-healing-50 rounded-lg">
                <Heart className="w-6 h-6 text-healing-600" />
                <div>
                  <p className="font-medium">Mood logged: Feeling optimistic</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-serenity-50 rounded-lg">
                <MessageCircle className="w-6 h-6 text-serenity-600" />
                <div>
                  <p className="font-medium">Joined "Anxiety Support" group</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-calm-50 rounded-lg">
                <Search className="w-6 h-6 text-calm-600" />
                <div>
                  <p className="font-medium">Saved "Local Therapy Centers" resource</p>
                  <p className="text-sm text-gray-600">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
