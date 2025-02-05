import React, { useState, useRef, useEffect } from 'react';
import { Menu, Github, Linkedin, Instagram } from 'lucide-react';

// Terminal Component
const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to my digital realm. Explore my journey below.' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentPath, setCurrentPath] = useState('~/heber-leonard');
  const bottomRef = useRef(null);

  const commands = {
    help: () => ({
      type: 'system',
      content: `Available commands:
• about     - Learn more about me
• skills    - View my technical skills
• projects  - Explore my projects
• exp       - See my work experience
• resume    - View my resume
• contact   - Get in touch
• clear     - Clear terminal screen`
    }),
    about: () => ({
      type: 'system',
      content: `Decoding Identity... Access Granted.
→ Who I Am: Researcher, Developer, Explorer
→ What I Do: Machine Learning, Image Processing, Algorithms
→ Fun Fact: I love riddles. Try solving this: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"`
    }),
    skills: () => ({
      type: 'system',
      content: `Decrypting Skills... Process Complete!

Python:         ██████████ 90%
Machine Learning:████████   80%
Data Analysis:  ██████     60%

Type "details <skill>" for more information.`
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
    } else if (trimmedCommand.startsWith('details ')) {
      const skill = trimmedCommand.split(' ')[1];
      response = {
        type: 'system',
        content: `Detailed information about ${skill}:\nProjects and experiences related to ${skill} will be displayed here.`
      };
    } else {
      response = {
        type: 'system',
        content: `Command not found: ${trimmedCommand}. Type "help" for available commands.`
      };
    }

    setHistory(prev => [...prev, newEntry, ...(response ? [response] : [])]);
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

  return (
    <div className="w-full h-96 bg-gray-900 rounded-lg shadow-lg overflow-hidden font-mono">
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-sm">
          github.com/heber-leonard
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

// Main Portfolio Component
const HybridPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-mono text-xl text-green-400">heber@leonard:~$</h1>
          <div className="flex space-x-6">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
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
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
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

          {/* Terminal Section */}
          <div className="col-span-8">
            <Terminal />
          </div>

          {/* Right Sidebar */}
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
    </div>
  );
};

export default HybridPortfolio;
