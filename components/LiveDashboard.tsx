import React from 'react';
import { Activity } from '../types';
import SpotifyCard from './SpotifyCard';
import ActivityItem from './ActivityItem';

interface LiveDashboardProps {
  spotify: Activity | undefined;
  activities: Activity[];
}

const LiveDashboard: React.FC<LiveDashboardProps> = ({ spotify, activities }) => {
  return (
    <section id="live" className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="relative">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <h2 className="text-2xl font-bold">Live Status</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Currently Playing</h3>
            {spotify ? (
              <SpotifyCard activity={spotify} />
            ) : (
              <div className="p-8 rounded-xl bg-card border border-white/5 flex flex-col items-center justify-center text-center h-64 text-gray-500">
                <svg className="w-12 h-12 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-2 16h-2v-6h2v6zm4 0h-2v-6h2v6z"/></svg>
                <p>Not listening to Spotify right now.</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Other Activities</h3>
            {activities.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <ActivityItem key={activity.id || index} activity={activity} />
                ))}
              </div>
            ) : (
               <div className="p-8 rounded-xl bg-card border border-white/5 flex flex-col items-center justify-center text-center h-64 text-gray-500">
                <p>No other public activities active.</p>
                <p className="text-xs mt-2 opacity-50">Coding in VS Code usually shows up here!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;