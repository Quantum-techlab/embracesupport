
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

const CreateResource = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    link: '',
    location: '',
    cost: '',
    isPaid: false
  });

  const resourceTypes = [
    'therapy',
    'helpline',
    'support-group',
    'app',
    'emergency',
    'book',
    'article',
    'video',
    'other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('resources')
        .insert({
          title: formData.title,
          description: formData.description,
          type: formData.type,
          link: formData.link,
          location: formData.location,
          cost: formData.cost,
          is_paid: formData.isPaid,
          creator_id: user.id,
          approved: !formData.isPaid // Auto-approve free resources
        });

      if (error) throw error;

      toast.success('Resource submitted successfully!');
      navigate('/resources');
    } catch (error) {
      console.error('Error creating resource:', error);
      toast.error('Failed to create resource');
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
            onClick={() => navigate('/resources')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit New Resource</h1>
          <p className="text-gray-600">Share a helpful mental health resource with the community</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Resource Details</CardTitle>
            <CardDescription>
              Fill out the information below to submit your resource
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Resource Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter resource title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the resource and how it helps"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resource type" />
                  </SelectTrigger>
                  <SelectContent>
                    {resourceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Link/Website</label>
                <Input
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://example.com"
                  type="url"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location (if applicable)</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, State or Online"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cost</label>
                <Input
                  value={formData.cost}
                  onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                  placeholder="Free, $10/month, etc."
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="paid"
                  checked={formData.isPaid}
                  onCheckedChange={(checked) => setFormData({ ...formData, isPaid: !!checked })}
                />
                <label htmlFor="paid" className="text-sm">
                  This is a paid resource (requires verified badge)
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Resource'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateResource;
