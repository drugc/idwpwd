import React from 'react';
import { Activity } from '../types';

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  let iconUrl: string | null = null;
  if (activity.assets?.large_image) {
    if (activity.assets.large_image.startsWith("mp:external")) {
         iconUrl = `https://media.discordapp.net/${activity.assets.large_image.replace("mp:", "")}`;
    } else {
         iconUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
    }
  }

  return (
    <div className="bg-card p-4 rounded-xl border border-white/5 flex items-center gap-4 transition-all hover:border-white/20 hover:bg-white/5">
      {iconUrl ? (
        <img 
            src={iconUrl} 
            alt={activity.name} 
            className="w-12 h-12 rounded-lg object-cover bg-black/30"
        />
      ) : (
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-gray-500">
            APP
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-white truncate text-sm">{activity.name}</h4>
        <div className="text-xs text-gray-400 space-y-0.5">
           {activity.details && <p className="truncate">{activity.details}</p>}
           {activity.state && <p className="truncate">{activity.state}</p>}
        </div>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
         {activity.type === 0 ? "Playing" : activity.type === 1 ? "Streaming" : activity.type === 3 ? "Watching" : "Active"}
      </div>
    </div>
  );
};

export default ActivityItem;