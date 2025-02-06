"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

// Terminal Component
const Terminal = ({ onCommand, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [currentPath, setCurrentPath] = useState('~/ishaq-ansari');
  const bottomRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-full h-96 bg-gray-900 rounded-lg shadow-lg overflow-hidden font-mono">
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-sm">
          github.com/ishaq-ansari
        </div>
      </div>
      
      <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto">
        <div className="space-y-2">
          <div className="text-green-400">
            Welcome to my digital realm. Explore my journey below.
          </div>
          <div className="text-green-400">
            Type "help" to see available commands.
          </div>
          <div className="flex items-center text-gray-300">
            <span>{currentPath} $&nbsp;</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent outline-none"
              autoFocus
            />
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> About Me</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Decoding Identity... Access Granted.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-green-400">Who I Am</h3>
            <p>Researcher, Developer, Explorer</p>
          </div>
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-green-400">What I Do</h3>
            <p>Machine Learning, Image Processing, Algorithms</p>
          </div>
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-green-400">Fun Fact</h3>
            <p>I love riddles. Try solving this: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skills Page Component
const SkillsPage = () => {
  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> Skills</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Decrypting Skills... Process Complete!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-green-400">Python</h3>
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-green-400">Machine Learning</h3>
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-green-400">Data Analysis</h3>
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const HybridPortfolio = () => {
  const [activeSection, setActiveSection] = useState('terminal');
  const [terminalVisible, setTerminalVisible] = useState(true);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'];

  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    if (trimmedCommand === 'about') {
      setActiveSection('about');
      setTerminalVisible(false);
    } else if (trimmedCommand === 'skills') {
      setActiveSection('skills');
      setTerminalVisible(false);
    } else if (trimmedCommand === 'help') {
      alert('Available commands: about, skills, projects, resume, contact');
    } else {
      alert(`Command not found: ${trimmedCommand}. Type "help" for available commands.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-mono text-xl text-green-400">ishaq@ansari:~$</h1>
          <div className="flex space-x-6">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setTerminalVisible(false);
                }}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'bg-green-500/20 text-green-400'
                    : 'hover:bg-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {terminalVisible && <Terminal onCommand={handleCommand} onClose={() => setTerminalVisible(false)} />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'skills' && <SkillsPage />}
      </main>

      {/* Footer with Social Links */}
      <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center space-x-6">
          <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HybridPortfolio;