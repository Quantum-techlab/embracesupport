
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This platform helped me find a community that truly understands what I'm going through. The anonymity made it safe to open up for the first time.",
    author: "Anonymous User",
    location: "United States"
  },
  {
    quote: "The mood tracker helped me identify patterns in my mental health that I never noticed before. It's been instrumental in my recovery journey.",
    author: "Community Member",
    location: "Canada"
  },
  {
    quote: "Finding free resources in my area through this platform was life-changing. I couldn't afford therapy, but now I have support.",
    author: "Grateful User",
    location: "United Kingdom"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-healing-50 to-serenity-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of Hope and Healing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our community members who found support and strength
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-500">
                  <div className="font-medium">{testimonial.author}</div>
                  <div>{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
