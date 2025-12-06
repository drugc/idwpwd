import React, { useEffect, useState } from 'react';
import { fetchLanyardStatus } from './services/lanyardService';
import { LanyardData, Activity } from './types';
import { USER_ID, POLLING_INTERVAL } from './constants';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import LiveDashboard from './components/LiveDashboard';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLanyardStatus(USER_ID);
      if (result) {
        setData(result);
      }
      setLoading(false);
    };

    fetchData();
    const intervalId = setInterval(fetchData, POLLING_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-500 text-sm font-medium tracking-widest uppercase">Initializing...</div>
        </div>
      </div>
    );
  }

  // Fallback data if API fails to allow the site to render
  const safeData = data || {
    discord_user: {
      username: "Developer",
      discriminator: "0000",
      id: USER_ID,
      avatar: null
    },
    discord_status: "offline",
    activities: [],
    active_on_discord_desktop: false,
    active_on_discord_mobile: false,
    active_on_discord_web: false,
    kv: {},
    spotify: null
  } as unknown as LanyardData;

  const spotifyActivity = safeData.activities.find((a: Activity) => a.name === "Spotify" || a.id === "spotify:1");
  const otherActivities = safeData.activities.filter((a: Activity) => a.name !== "Spotify" && a.id !== "spotify:1");

  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      
      <main>
        <Hero user={safeData.discord_user} status={safeData.discord_status} />
        <TechStack />
       
        <LiveDashboard spotify={spotifyActivity} activities={otherActivities} />
      </main>

      <Contact />
    </div>
  );
};

export default App;