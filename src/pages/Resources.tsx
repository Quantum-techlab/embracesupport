import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Clock, Star, Heart, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Resources = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const resourceTypes = [
    { value: 'all', label: 'All Resources' },
    { value: 'therapy', label: 'Therapy' },
    { value: 'helpline', label: 'Helplines' },
    { value: 'support-group', label: 'Support Groups' },
    { value: 'app', label: 'Apps & Tools' },
    { value: 'emergency', label: 'Emergency' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Crisis Text Line',
      description: '24/7 crisis support via text message. Free, confidential support for people in crisis.',
      type: 'helpline',
      cost: 'Free',
      availability: '24/7',
      contact: 'Text HOME to 741741',
      rating: 4.8,
      tags: ['Crisis Support', 'Text-based', 'Anonymous']
    },
    {
      id: 2,
      title: 'BetterHelp Online Therapy',
      description: 'Professional therapy that fits your schedule. Connect with licensed therapists online.',
      type: 'therapy',
      cost: '$60-90/week',
      availability: 'Flexible scheduling',
      contact: 'betterhelp.com',
      rating: 4.5,
      tags: ['Online Therapy', 'Licensed Therapists', 'Flexible']
    },
    {
      id: 3,
      title: 'National Suicide Prevention Lifeline',
      description: 'Free and confidential emotional support for people in suicidal crisis or emotional distress.',
      type: 'emergency',
      cost: 'Free',
      availability: '24/7',
      contact: 'Call 988',
      rating: 4.9,
      tags: ['Emergency', 'Suicide Prevention', 'Crisis Support']
    },
    {
      id: 4,
      title: 'NAMI Support Groups',
      description: 'Local support groups for individuals and families affected by mental illness.',
      type: 'support-group',
      cost: 'Free',
      availability: 'Weekly meetings',
      contact: 'nami.org/find-support',
      rating: 4.6,
      tags: ['Support Groups', 'Family Support', 'Mental Health Education']
    },
    {
      id: 5,
      title: 'Headspace Meditation App',
      description: 'Guided meditation and mindfulness exercises for stress, anxiety, and sleep.',
      type: 'app',
      cost: 'Free trial, then $12.99/month',
      availability: 'On-demand',
      contact: 'headspace.com',
      rating: 4.4,
      tags: ['Meditation', 'Mindfulness', 'Self-care']
    },
    {
      id: 6,
      title: 'Community Mental Health Center',
      description: 'Local mental health services including counseling, psychiatric care, and case management.',
      type: 'therapy',
      cost: 'Sliding scale fees',
      availability: 'Mon-Fri 9AM-6PM',
      contact: '(555) 123-4567',
      rating: 4.3,
      tags: ['Local Services', 'Sliding Scale', 'Comprehensive Care']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mental Health Resources</h1>
            <p className="text-gray-600">Discover free and low-cost mental health resources in your area</p>
          </div>
          {user && (
            <Link to="/create-resource">
              <Button className="bg-healing-600 hover:bg-healing-700">
                <Plus className="w-4 h-4 mr-2" />
                Submit Resource
              </Button>
            </Link>
          )}
        </div>

        {/* Emergency Banner */}
        <Card className="mb-8 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">In Crisis? Get Help Now</h3>
                <p className="text-red-700">Call 988 (Suicide & Crisis Lifeline) or text HOME to 741741 (Crisis Text Line)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search resources, services, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {resourceTypes.map((type) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.value)}
                className={selectedType === type.value ? "bg-healing-600 hover:bg-healing-700" : ""}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{resource.rating}</span>
                  </div>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cost:</span>
                    <span className="font-medium text-green-600">{resource.cost}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{resource.availability}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{resource.contact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {resource.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full mt-4 bg-healing-600 hover:bg-healing-700" disabled={!user}>
                    {user ? 'Access Resource' : 'Sign in to Access'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Add Resource CTA */}
        <Card className="mt-8 bg-gradient-to-r from-healing-50 to-serenity-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Know of a helpful resource?</h3>
            <p className="text-gray-600 mb-4">Help expand our database by submitting mental health resources in your area</p>
            <Button variant="outline" className="border-healing-600 text-healing-700 hover:bg-healing-50">
              Submit a Resource
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
