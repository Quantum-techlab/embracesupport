
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Calendar, Heart, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MoodTracker = () => {
  const [mood, setMood] = useState([5]);
  const [anxiety, setAnxiety] = useState([3]);
  const [energy, setEnergy] = useState([6]);
  const [journal, setJournal] = useState('');

  // Sample data for mood chart
  const moodData = [
    { day: 'Mon', mood: 6, anxiety: 4, energy: 7 },
    { day: 'Tue', mood: 7, anxiety: 3, energy: 8 },
    { day: 'Wed', mood: 5, anxiety: 6, energy: 5 },
    { day: 'Thu', mood: 8, anxiety: 2, energy: 9 },
    { day: 'Fri', mood: 7, anxiety: 3, energy: 7 },
    { day: 'Sat', mood: 9, anxiety: 1, energy: 8 },
    { day: 'Sun', mood: 8, anxiety: 2, energy: 9 },
  ];

  const moodLabels = ['Very Low', 'Low', 'Below Average', 'Neutral', 'Above Average', 'Good', 'Very Good', 'Great', 'Excellent', 'Outstanding'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mood Tracker</h1>
          <p className="text-gray-600">Track your emotional well-being and identify patterns in your mental health</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Mood Log */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-healing-600" />
                <span>How are you feeling today?</span>
              </CardTitle>
              <CardDescription>
                Rate your current emotional state on a scale of 1-10
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Overall Mood: {moodLabels[mood[0] - 1]}</label>
                <Slider
                  value={mood}
                  onValueChange={setMood}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Anxiety Level: {anxiety[0]}/10</label>
                <Slider
                  value={anxiety}
                  onValueChange={setAnxiety}
                  max={10}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0 (Calm)</span>
                  <span>10 (Very Anxious)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Energy Level: {energy[0]}/10</label>
                <Slider
                  value={energy}
                  onValueChange={setEnergy}
                  max={10}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0 (Exhausted)</span>
                  <span>10 (Energetic)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Journal Entry (Optional)</label>
                <Textarea
                  placeholder="What's on your mind today? Share your thoughts, experiences, or anything you'd like to remember..."
                  value={journal}
                  onChange={(e) => setJournal(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full bg-healing-600 hover:bg-healing-700">
                Save Today's Entry
              </Button>
            </CardContent>
          </Card>

          {/* Mood Trends */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-serenity-600" />
                <span>7-Day Mood Trends</span>
              </CardTitle>
              <CardDescription>
                Visualize your emotional patterns over the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="mood" 
                      stroke="#0ea5e9" 
                      strokeWidth={3}
                      name="Mood"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="anxiety" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      name="Anxiety"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="energy" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      name="Energy"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-healing-50 rounded-lg">
                  <div className="text-lg font-bold text-healing-600">7.3</div>
                  <div className="text-sm text-gray-600">Avg Mood</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="text-lg font-bold text-yellow-600">3.0</div>
                  <div className="text-sm text-gray-600">Avg Anxiety</div>
                </div>
                <div className="p-3 bg-serenity-50 rounded-lg">
                  <div className="text-lg font-bold text-serenity-600">7.6</div>
                  <div className="text-sm text-gray-600">Avg Energy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights & Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Personalized Insights</CardTitle>
            <CardDescription>Based on your mood patterns, here are some observations and suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-serenity-50 rounded-lg">
                <h4 className="font-semibold text-serenity-700 mb-2">Positive Trend</h4>
                <p className="text-gray-600">Your mood has been steadily improving over the weekend. Keep up the great work!</p>
              </div>
              <div className="p-4 bg-healing-50 rounded-lg">
                <h4 className="font-semibold text-healing-700 mb-2">Suggestion</h4>
                <p className="text-gray-600">Your energy levels peak on weekends. Consider incorporating more social activities during weekdays.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MoodTracker;
