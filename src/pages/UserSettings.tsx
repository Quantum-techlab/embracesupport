
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { User, Shield, Users, BookOpen, Star } from 'lucide-react';

const UserSettings = () => {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    display_name: '',
    email: '',
    is_verified: false
  });
  const [stats, setStats] = useState({
    groupCount: 0,
    resourceCount: 0,
    savedResourceCount: 0
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchUserStats();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('users')
        .select('display_name, email, is_verified')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user data:', error);
        return;
      }

      if (data) {
        setProfile({
          display_name: data.display_name || '',
          email: data.email || user.email || '',
          is_verified: data.is_verified || false
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchUserStats = async () => {
    if (!user) return;

    try {
      // Get group memberships count
      const { data: memberships } = await supabase
        .from('group_memberships')
        .select('id')
        .eq('user_id', user.id);

      // Get created resources count
      const { data: resources } = await supabase
        .from('resources')
        .select('id')
        .eq('creator_id', user.id);

      // Get saved resources count
      const { data: savedResources } = await supabase
        .from('saved_resources')
        .select('id')
        .eq('user_id', user.id);

      setStats({
        groupCount: memberships?.length || 0,
        resourceCount: resources?.length || 0,
        savedResourceCount: savedResources?.length || 0
      });
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('users')
        .upsert({
          id: user.id,
          display_name: profile.display_name,
          email: profile.email
        });

      if (error) throw error;

      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordData.newPassword
      });

      if (error) throw error;

      toast.success('Password updated successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  const requestVerification = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('verification_requests')
        .insert({
          user_id: user.id,
          request_type: 'creator',
          reason: 'Request to monetize resources and groups'
        });

      if (error) throw error;

      toast.success('Verification request submitted! We will review your application.');
    } catch (error) {
      console.error('Error submitting verification request:', error);
      toast.error('Failed to submit verification request');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Stats */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Profile Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-healing-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-healing-600" />
                </div>
                <h3 className="font-semibold">{profile.display_name || 'User'}</h3>
                <p className="text-sm text-gray-600">{profile.email}</p>
                {profile.is_verified && (
                  <Badge className="mt-2 bg-green-100 text-green-800">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Groups Joined</span>
                  <span className="font-medium">{stats.groupCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resources Created</span>
                  <span className="font-medium">{stats.resourceCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resources Saved</span>
                  <span className="font-medium">{stats.savedResourceCount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Settings Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={updateProfile} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display Name</label>
                    <Input
                      value={profile.display_name}
                      onChange={(e) => setProfile({ ...profile, display_name: e.target.value })}
                      placeholder="Your display name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Password Change */}
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your account password</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={changePassword} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <Input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <Input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      placeholder="Confirm new password"
                    />
                  </div>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Changing...' : 'Change Password'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Verification Badge */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Verification Badge</span>
                </CardTitle>
                <CardDescription>
                  Get verified to monetize your resources and groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                {profile.is_verified ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <Shield className="w-5 h-5" />
                    <span>You are verified!</span>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Verified users can create paid resources and groups. The verification process includes identity verification and content review.
                    </p>
                    <Button onClick={requestVerification} variant="outline">
                      Request Verification Badge
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Account Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" onClick={signOut}>
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
