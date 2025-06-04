MindConnect is a web-based platform designed to provide accessible, community-driven mental health support. It connects users to peer-support communities, free or low-cost mental health resources, and tools for self-management. With a focus on anonymity, accessibility, and empowerment, MindConnect aims to reduce barriers to mental health care and foster a supportive community for users worldwide.

This project is in its MVP stage, featuring a responsive frontend and a Supabase backend. It’s built with modern web technologies to ensure scalability, security, and a user-friendly experience.

Features
Landing Page: Welcoming interface with a clear mission statement and calls-to-action.
User Dashboard: Personalized hub showing recent activity, saved resources, and mood tracking insights.
Mood Tracker: Log daily moods with a slider and visualize trends using interactive charts.
Resource Hub: Searchable database of approved mental health resources (helplines, articles, etc.).
Support Groups: Directory of anonymous chat rooms for peer support (chat functionality planned for future releases).
Accessibility: WCAG 2.1-compliant with high-contrast mode, keyboard navigation, and multilingual support (planned).
Backend: Supabase-powered database with Row Level Security (RLS) for user privacy.

Tech Stack

Frontend:
React (v18) with TypeScript for type safety
Tailwind CSS for styling
shadcn/ui for professional UI components
Recharts for mood tracking visualizations
Lucide React for iconography

Backend:
Supabase for authentication, database, and real-time features
PostgreSQL with UUIDs and JSONB for flexible data storage

Deployment:
Vercel (planned) for frontend hosting
Supabase for backend and database hosting

Other:
CDN-based dependencies (for MVP simplicity)
Future: WebSocket for real-time chat, Dialogflow for AI chatbot

Prerequisites
Node.js (v16 or higher)
npm or yarn
Supabase account and project
GitHub account for repository management

Setup Instructions

1. Clone the Repository

git clone https://github.com/Quantum-techlab/mindconnect.git cd mindconnect

2. Install Dependencies

npm install

This installs React, Supabase client, and other dependencies listed in package.json.

3. Configure Supabase

Create a Supabase project at app.supabase.com.
Copy your Supabase URL and Anon Key from Settings > API.
Create a .env file in the project root:
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-anon-key



Run the SQL script (from supabase_schema.sql) in Supabase’s SQL Editor to create tables:
users: User authentication and profiles
mood_logs: Mood tracking data
resources: Mental health resources
support_groups: Support group details
group_memberships: User-group associations
saved_resources: User-bookmarked resources
Enable Row Level Security (RLS) and set up authentication providers (Email, Google) in Supabase.

4. Run the Application

npm start
The app will run at http://localhost:3000.

5. Deploy
6. 
Frontend: Deploy to Vercel or Netlify by connecting your GitHub repository.

Backend: Supabase handles database and auth hosting. Ensure API keys are secure.

Project Structure

mindconnect/
├── public/
│   ├── index.html         # Main HTML file with CDN dependencies
├── src/
│   ├── components/
│   │   ├── Header.tsx     # Navigation bar
│   │   ├── LandingPage.tsx # Welcome page
│   │   ├── Dashboard.tsx   # User dashboard
│   │   ├── MoodTracker.tsx # Mood tracking with charts
│   │   ├── ResourceHub.tsx # Resource directory
│   │   ├── SupportGroups.tsx # Support group directory
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # Entry point
├── supabase_schema.sql    # Supabase database schema
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── README.md              # This file

Future Enhancements


Implement real-time chat rooms using WebSocket (e.g., Socket.IO).
Add an AI-powered chatbot with Dialogflow for crisis support.
Support multilingual content and RTL languages with i18next.
Enhance accessibility with a high-contrast toggle and font size adjustments.
Add admin panel for moderating resources and support groups.
Integrate gamification (badges, progress tracking).
Contributing

We welcome contributions to make MindConnect more impactful! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").

Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please follow the Code of Conduct and ensure code is accessible and well-documented.

License

This project is licensed under the MIT License. See LICENSE for details.

Contact

For questions or feedback, open an issue on GitHub or contact ola283dayo@gmail.com.



Built with ❤️ to support mental health and community connection.
