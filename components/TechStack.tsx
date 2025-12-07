import React from 'react';

const skills = [
  "Html", "Css", "Javascript", "Typescript", "Git", "React"
];

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 text-center md:text-left">Technical Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
              <span className="font-medium text-gray-300 group-hover:text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;