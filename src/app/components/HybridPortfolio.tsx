"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

// Terminal Component
const Terminal = ({ onCommand, visible }) => {
  const [inputValue, setInputValue] = useState('');
  const [currentPath, setCurrentPath] = useState('~/ishaq-ansari');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to my digital realm. Explore my journey below.' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const bottomRef = useRef(null);

  const commands = {
    help: () => ({
      type: 'system',
      content: (
        <div>
          Available commands:
          <ul>
            <li style={{ paddingLeft: '50px' }}>• about     - Learn more about me</li>
            <li style={{ paddingLeft: '50px' }}>• skills    - View my technical skills</li>
            <li style={{ paddingLeft: '50px' }}>• projects  - Explore my projects</li>
            <li style={{ paddingLeft: '50px' }}>• resume    - View my resume</li>
            <li style={{ paddingLeft: '50px' }}>• contact   - Get in touch</li>
            <li style={{ paddingLeft: '50px' }}>• clear     - Clear terminal screen</li>
          </ul>
        </div>
      )
    }),
    about: () => ({
      type: 'system',
      content: (
        <div>
          Decoding Identity... Access Granted.
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ Who I Am: Researcher, Developer, Explorer</li>
            <li style={{ paddingLeft: '50px' }}>→ What I Do: Machine Learning, Image Processing, Algorithms</li>
            <li style={{ paddingLeft: '50px' }}>→ Fun Fact: I love riddles. Try solving this: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"</li>
          </ul>
        </div>
      )
    }),
    skills: () => ({
      type: 'system',
      content: (
        <div>
          Decrypting Skills... Process Complete!
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ Python:         ██████████ 90%</li>
            <li style={{ paddingLeft: '50px' }}>→ Machine Learning:████████   80%</li>
            <li style={{ paddingLeft: '50px' }}>→ Data Analysis:  ██████     60%</li>
          </ul>
        </div>
      )
    }),
    clear: () => {
      setHistory([]);
      return null;
    }
  };

  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    const newEntry = { type: 'command', content: `${currentPath} $ ${command}` };
    
    let response;
    if (commands[trimmedCommand]) {
      response = commands[trimmedCommand]();
    } else {
      response = {
        type: 'system',
        content: `Command not found: ${trimmedCommand}. Type "help" for available commands.`
      };
    }

    setHistory(prev => [...prev, newEntry, ...(response ? [response] : [])]);
    onCommand(trimmedCommand);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!visible) return null;

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
          {history.map((entry, index) => (
            <div 
              key={index} 
              className={`${
                entry.type === 'system' 
                  ? 'text-green-400' 
                  : 'text-gray-300'
              }`}
            >
              {entry.content}
            </div>
          ))}
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> About Me</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Decoding Identity... Access Granted.
        </div>
        {showContent && (
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
        )}
      </div>
    </div>
  );
};

// Skills Page Component
const SkillsPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> Skills</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Decrypting Skills... Process Complete!
        </div>
        {showContent && (
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
        )}
      </div>
    </div>
  );
};

// Main Portfolio Component
const HybridPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalVisible, setTerminalVisible] = useState(true);

  const handleCommand = (command) => {
    if (command === 'home') {
      setActiveSection('home');
      setTerminalVisible(true);
    } else if (command === 'about') {
      setActiveSection('about');
      setTerminalVisible(false);
    } else if (command === 'skills') {
      setActiveSection('skills');
      setTerminalVisible(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-mono text-xl text-green-400">ishaq@ansari:~$</h1>
          <div className="flex space-x-6">
            {['Home', 'About', 'Skills'].map(item => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setTerminalVisible(item.toLowerCase() === 'home');
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
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Quick Stats */}
          <div className="col-span-2 space-y-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h2 className="text-green-400 font-mono mb-2">> Quick Stats</h2>
              <div className="space-y-2 text-sm">
                <div>Projects: 12</div>
                <div>Commits: 1,337</div>
                <div>Experience: 5 years</div>
              </div>
            </div>
          </div>

          {/* Central Content */}
          <div className="col-span-8">
            {terminalVisible && <Terminal onCommand={handleCommand} visible={terminalVisible} />}
            {activeSection === 'about' && <AboutPage />}
            {activeSection === 'skills' && <SkillsPage />}
          </div>

          {/* Right Sidebar - Connect */}
          <div className="col-span-2 space-y-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h2 className="text-green-400 font-mono mb-2">> Connect</h2>
              <div className="flex flex-col space-y-3">
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
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer with Social Links */}
      <footer className="fixed bottom-0 w-full bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
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