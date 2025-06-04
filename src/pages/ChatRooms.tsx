import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Users, Clock, Shield, Heart, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const ChatRooms = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Groups' },
    { value: 'anxiety', label: 'Anxiety' },
    { value: 'depression', label: 'Depression' },
    { value: 'grief', label: 'Grief & Loss' },
    { value: 'wellness', label: 'General Wellness' },
    { value: 'addiction', label: 'Addiction Recovery' }
  ];

  const chatRooms = [
    {
      id: 1,
      name: 'Anxiety Support Circle',
      description: 'A safe space to share experiences and coping strategies for anxiety',
      category: 'anxiety',
      activeUsers: 42,
      totalMembers: 234,
      lastActive: '2 minutes ago',
      isModerated: true,
      tags: ['Anxiety', 'Coping Skills', 'Daily Support']
    },
    {
      id: 2,
      name: 'Depression Recovery',
      description: 'Supporting each other through the journey of depression recovery',
      category: 'depression',
      activeUsers: 28,
      totalMembers: 189,
      lastActive: '5 minutes ago',
      isModerated: true,
      tags: ['Depression', 'Recovery', 'Hope']
    },
    {
      id: 3,
      name: 'Grief & Healing',
      description: 'Finding comfort and understanding in times of loss',
      category: 'grief',
      activeUsers: 15,
      totalMembers: 98,
      lastActive: '8 minutes ago',
      isModerated: true,
      tags: ['Grief', 'Loss', 'Healing']
    },
    {
      id: 4,
      name: 'Wellness Wednesday',
      description: 'Weekly discussions about self-care and mental wellness',
      category: 'wellness',
      activeUsers: 67,
      totalMembers: 456,
      lastActive: '1 minute ago',
      isModerated: true,
      tags: ['Self-care', 'Wellness', 'Weekly']
    },
    {
      id: 5,
      name: 'Addiction Recovery Support',
      description: 'A judgment-free zone for those in recovery from addiction',
      category: 'addiction',
      activeUsers: 23,
      totalMembers: 145,
      lastActive: '12 minutes ago',
      isModerated: true,
      tags: ['Recovery', 'Sobriety', 'Support']
    },
    {
      id: 6,
      name: 'Daily Check-in',
      description: 'Start your day by sharing how you\'re feeling with the community',
      category: 'wellness',
      activeUsers: 89,
      totalMembers: 512,
      lastActive: 'Active now',
      isModerated: true,
      tags: ['Daily', 'Check-in', 'Community']
    }
  ];

  const filteredRooms = selectedCategory === 'all' 
    ? chatRooms 
    : chatRooms.filter(room => room.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Support Groups</h1>
            <p className="text-gray-600">Join anonymous, moderated chat rooms for peer support and community connection</p>
          </div>
          {user && (
            <Link to="/create-group">
              <Button className="bg-healing-600 hover:bg-healing-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
            </Link>
          )}
        </div>

        {/* Community Guidelines Banner */}
        <Card className="mb-8 bg-serenity-50 border-serenity-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-serenity-600 mt-1" />
              <div>
                <h3 className="font-semibold text-serenity-800 mb-2">Community Guidelines</h3>
                <ul className="text-serenity-700 text-sm space-y-1">
                  <li>• Be respectful and supportive of all members</li>
                  <li>• Maintain anonymity - no personal information sharing</li>
                  <li>• No medical advice or crisis interventions - direct to professional help</li>
                  <li>• Report inappropriate behavior to moderators</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? "bg-healing-600 hover:bg-healing-700" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-healing-600" />
                    <span>{room.name}</span>
                  </CardTitle>
                  {room.isModerated && (
                    <Badge variant="secondary" className="bg-serenity-100 text-serenity-700">
                      Moderated
                    </Badge>
                  )}
                </div>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {room.activeUsers} active • {room.totalMembers} members
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{room.lastActive}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {room.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-healing-600 hover:bg-healing-700" disabled={!user}>
                    {user ? 'Join Group' : 'Sign in to Join'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No groups found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* Create Room CTA */}
        <Card className="mt-8 bg-gradient-to-r from-healing-50 to-serenity-50">
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 text-healing-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Can't find the right group?</h3>
            <p className="text-gray-600 mb-4">Request a new support group topic and help build our community</p>
            <Button variant="outline" className="border-healing-600 text-healing-700 hover:bg-healing-50">
              Request New Group
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatRooms;
