
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

const CreateGroup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    isPrivate: false,
    isPaid: false
  });

  const categories = [
    'anxiety',
    'depression', 
    'grief',
    'wellness',
    'addiction',
    'student',
    'other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('support_groups')
        .insert({
          name: formData.name,
          description: formData.description,
          category: formData.category,
          is_private: formData.isPrivate,
          is_paid: formData.isPaid,
          creator_id: user.id
        });

      if (error) throw error;

      toast.success('Group created successfully!');
      navigate('/chat-rooms');
    } catch (error) {
      console.error('Error creating group:', error);
      toast.error('Failed to create group');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/chat-rooms')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Groups
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Group</h1>
          <p className="text-gray-600">Start a new support group for your community</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Group Details</CardTitle>
            <CardDescription>
              Fill out the information below to create your support group
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Group Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter group name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your group's purpose and guidelines"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="private"
                    checked={formData.isPrivate}
                    onCheckedChange={(checked) => setFormData({ ...formData, isPrivate: !!checked })}
                  />
                  <label htmlFor="private" className="text-sm">
                    Make this group private (invite only)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="paid"
                    checked={formData.isPaid}
                    onCheckedChange={(checked) => setFormData({ ...formData, isPaid: !!checked })}
                  />
                  <label htmlFor="paid" className="text-sm">
                    This is a paid group (requires verified badge)
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Creating...' : 'Create Group'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateGroup;
