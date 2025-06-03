
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Heart, Search, Users, Calendar, Settings } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Anonymous Chat Rooms',
    description: 'Join topic-based support groups with complete anonymity. Share experiences and find understanding in a safe space.',
    color: 'healing'
  },
  {
    icon: Heart,
    title: 'Mood Tracker',
    description: 'Monitor your emotional well-being with daily mood logging and insightful visualizations of your mental health journey.',
    color: 'serenity'
  },
  {
    icon: Search,
    title: 'Resource Hub',
    description: 'Discover free and low-cost mental health resources, therapists, and support services in your area.',
    color: 'calm'
  },
  {
    icon: Users,
    title: 'Peer Support',
    description: 'Connect with trained volunteers and peer mentors who understand your struggles and can offer guidance.',
    color: 'healing'
  },
  {
    icon: Calendar,
    title: 'Wellness Events',
    description: 'Participate in virtual support groups, workshops, and community events focused on mental health.',
    color: 'serenity'
  },
  {
    icon: Settings,
    title: 'Personalized Experience',
    description: 'Customize your dashboard, set privacy preferences, and access tools tailored to your mental health needs.',
    color: 'calm'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Mental Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides comprehensive tools and community support to help you on your mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = {
              healing: 'bg-healing-100 text-healing-600 border-healing-200',
              serenity: 'bg-serenity-100 text-serenity-600 border-serenity-200',
              calm: 'bg-calm-100 text-calm-600 border-calm-200'
            };

            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
