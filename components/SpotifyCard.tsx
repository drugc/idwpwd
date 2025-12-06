import React, { useEffect, useState, useRef } from 'react';
import { Activity } from '../types';

interface SpotifyCardProps {
  activity: Activity;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({ activity }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [durationTime, setDurationTime] = useState("0:00");
  const requestRef = useRef<number | undefined>(undefined);

  const formatTime = (ms: number): string => {
    if (!ms || ms < 0) return "0:00";
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const timestamps = activity.timestamps;
    
    if (!timestamps || !timestamps.start || !timestamps.end) {
      return;
    }

    const start = timestamps.start;
    const end = timestamps.end;
    const totalDuration = end - start;

    setDurationTime(formatTime(totalDuration));

    const animate = () => {
      const now = Date.now();
      const elapsed = now - start;
      const percent = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(percent);
      setCurrentTime(formatTime(elapsed));

      if (elapsed < totalDuration) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [activity.timestamps, activity.id]); 

  const { details, state, assets } = activity;
  const albumArt = assets?.large_image 
    ? `https://i.scdn.co/image/${assets.large_image.replace("spotify:", "")}` 
    : "https://picsum.photos/300/300";

  return (
    <div className="p-5 bg-[#1db954] rounded-xl shadow-lg w-full text-white transition-all duration-300 hover:shadow-green-500/20 group">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden shadow-md bg-black/20">
          <img 
            src={albumArt} 
            alt="Album Art" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="flex-1 min-w-0 pt-1">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1 flex items-center gap-1">
             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.6-1.56.3z"/></svg>
             Spotify
          </div>
          <h3 className="font-bold text-lg truncate leading-tight">{details || "Unknown Song"}</h3>
          <p className="text-sm opacity-90 truncate font-medium">{state || "Unknown Artist"}</p>
          <p className="text-xs opacity-75 truncate">{assets?.small_text || "Album"}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-1 bg-black/20 rounded-full overflow-hidden w-full">
          <div 
            className="h-full bg-white rounded-full transition-all duration-100 ease-linear" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono mt-1.5 opacity-80">
          <span>{currentTime}</span>
          <span>{durationTime}</span>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;