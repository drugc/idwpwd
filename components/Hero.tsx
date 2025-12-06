import React from 'react';
import { DiscordUser } from '../types';
import { Github, Twitter } from 'lucide-react';

interface HeroProps {
  user: DiscordUser;
  status: string;
}

const Hero: React.FC<HeroProps> = ({ user, status }) => {
  const getStatusColor = (s: string) => {
    switch (s) {
      case 'online': return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]';
      case 'idle': return 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]';
      case 'dnd': return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]';
      default: return 'bg-gray-500';
    }
  };

  const avatarUrl = user.avatar 
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
    : `https://ui-avatars.com/api/?name=${user.username}&background=random`;

  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative w-40 h-40 md:w-56 md:h-56">
          <img 
            src={avatarUrl} 
            alt={user.username} 
            className="w-full h-full rounded-full object-cover border-4 border-card bg-card shadow-2xl"
          />
          <div className={`absolute bottom-3 right-3 md:bottom-5 md:right-5 w-8 h-8 rounded-full border-4 border-card ${getStatusColor(status)}`}></div>
        </div>
      </div>

      <div className="text-center md:text-left flex-1">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
          Junior Frontend Developer
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          I'm what you made god
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Hi, I'm <span className="text-primary">Aiden</span>. Self-taught, Frontend Developer creating modern, efficient user interfaces.
        </p>
        
        <div className="flex items-center justify-center md:justify-start gap-4">
          <a href="https://github.com/realaiden" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
            <Github size={20} />
          </a>
          <a href="https://x.com/almostaiden" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;