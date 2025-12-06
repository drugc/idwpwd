import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me.</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Feel free to send me a message if you'd like to say hello!
        </p>
        <a href="mailto:aidens@telegmail.com" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Say Hello
        </a>
        
        <div className="mt-20 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} programs.lol.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;