
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-healing-400 mr-3" />
              <span className="text-2xl font-bold">MindConnect</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering communities to support mental health through connection, 
              resources, and shared experiences. Together, we heal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-healing-400 transition-colors">Crisis Helpline</a></li>
              <li><a href="#" className="hover:text-healing-400 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-healing-400 transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-healing-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-healing-400 transition-colors">Mental Health Info</a></li>
              <li><a href="#" className="hover:text-healing-400 transition-colors">Self-Care Tips</a></li>
              <li><a href="#" className="hover:text-healing-400 transition-colors">Professional Help</a></li>
              <li><a href="#" className="hover:text-healing-400 transition-colors">Emergency Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 MindConnect. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-healing-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-healing-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-healing-400 transition-colors">Accessibility</a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">If you're in crisis, please reach out for immediate help:</p>
          <p>
            <strong>Crisis Text Line:</strong> Text HOME to 741741 | 
            <strong> National Suicide Prevention Lifeline:</strong> 988
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
