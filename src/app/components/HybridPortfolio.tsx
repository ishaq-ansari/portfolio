"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';

// Terminal Component
const Terminal = ({ onCommand, visible }) => {
  const [inputValue, setInputValue] = useState('');
  const [currentPath, setCurrentPath] = useState('~/ishaq-ansari');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to my portfolio. You can use the Terminal or GUI to explore my journey.' },
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
            <li style={{ paddingLeft: '50px' }}>→ about:&nbsp;&nbsp;&nbsp; Learn more about me</li>
            <li style={{ paddingLeft: '50px' }}>→ skills:&nbsp;&nbsp; View my technical skills</li>
            <li style={{ paddingLeft: '50px' }}>→ projects:&nbsp;Explore my projects</li>
            <li style={{ paddingLeft: '50px' }}>→ exp:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See my work experience</li>
            <li style={{ paddingLeft: '50px' }}>→ resume:&nbsp;&nbsp; View my resume</li>
            <li style={{ paddingLeft: '50px' }}>→ contact:&nbsp;&nbsp;Get in touch</li>
            <li style={{ paddingLeft: '50px' }}>→ clear:&nbsp;&nbsp;&nbsp; Clear terminal screen</li>
          </ul>
        </div>
      )
    }),
    about: () => ({
      type: 'system',
      content: (
        <div>
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ Hi👋, I am a Software Engineer.</li>
            <li style={{ paddingLeft: '55px' }}> &nbsp;</li>
            <li style={{ paddingLeft: '50px' }}>I also have hands-on experience Data and ML Engineering and Full-Stack Development. I design scalable data pipelines, build backend architectures, and develop ML-powered software solutions.</li>
          </ul>
        </div>
      )
    }),
    skills: () => ({
      type: 'system',
      content: (
        <div>
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ Programming Languages:</li>
            <li style={{ paddingLeft: '70px' }}>Python:         ████████████ 95%</li>
            <li style={{ paddingLeft: '70px' }}>JavaScript:█████████  80%</li>
            <li style={{ paddingLeft: '70px' }}>Go:  ██████     50%</li>
            <li style={{ paddingLeft: '55px' }}> &nbsp;</li>

            <li style={{ paddingLeft: '50px' }}>→ Databases:</li>
            <li style={{ paddingLeft: '70px' }}>SQL (MySQL, PostgreSQL):         ██████████ 90%</li>
            <li style={{ paddingLeft: '70px' }}>NoSQL (MongoDB):█████████   80%</li>
            <li style={{ paddingLeft: '55px' }}> &nbsp;</li>

            <li style={{ paddingLeft: '50px' }}>→ Tools &amp; Platforms:</li>
            <li style={{ paddingLeft: '70px' }}>Git &amp; GitHub:  ██████████ 90%</li>
            <li style={{ paddingLeft: '70px' }}>Docker, k8s, Terraform, CI/CD Pipelines (GitHub Actions, Jenkins): ████████   80%</li>
            <li style={{ paddingLeft: '70px' }}>AWS, GCP, Azure:  ███████   70%</li>
            <li style={{ paddingLeft: '55px' }}> &nbsp;</li>

            <li style={{ paddingLeft: '50px' }}>→ Development Concepts:</li>
            <li style={{ paddingLeft: '70px' }}>OOP, RESTful APIs, SDLC, Agile, Data Structures &amp; Algorithms</li>
            <li style={{ paddingLeft: '55px' }}> &nbsp;</li>

            <li style={{ paddingLeft: '50px' }}>→ Testing &amp; Debugging:</li>
            <li style={{ paddingLeft: '70px' }}>Unit Testing (PyTest / JUnit): ████████  70%</li>
            <li style={{ paddingLeft: '70px' }}>Integration, E2E (Selenium): ██████    60%</li>
            <li style={{ paddingLeft: '55px' }}> &nbsp;</li>

            <li style={{ paddingLeft: '50px' }}>→ Soft Skills:</li>
            <li style={{ paddingLeft: '70px' }}>Problem-Solving — creative &amp; analytical approach</li>
            <li style={{ paddingLeft: '70px' }}>Communication — explain technical concepts clearly</li>
            <li style={{ paddingLeft: '70px' }}>Teamwork — collaborate effectively in Agile environments</li>
            <li style={{ paddingLeft: '70px' }}>Time Management — prioritize and deliver under deadlines</li>

          </ul>
        </div>
      )
    }),
    projects: () => ({
      type: 'system',
      content: (
        <div>
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ AI-Based Tissue Segmentation</li>
            <li style={{ paddingLeft: '70px' }}>An AI pipeline to automatically segment and quantify tissues</li>
            <li style={{ paddingLeft: '70px' }}>in cerebral aneurysms using deep learning.</li>
            <li style={{ paddingLeft: '70px' }}>
              <a href="https://github.com/ishaq-ansari/Ingrown-Tissue-Quantification" className="text-red-400 hover:underline focus:outline-none"> GitHub</a>
            </li>
            
            <li style={{ paddingLeft: '50px' }}> → Check my other projects on&nbsp;
              <a href="https://github.com/ishaq-ansari" className="text-red-400 hover:underline focus:outline-none">GitHub</a>
            </li>
            {/* <li style={{ paddingLeft: '50px' }}>→ Portfolio Website</li>
            <li style={{ paddingLeft: '70px' }}>A hybrid terminal-GUI portfolio website built with</li>
            <li style={{ paddingLeft: '70px' }}>React and Tailwind CSS.</li>
            <li style={{ paddingLeft: '70px' }}>
              <a href="https://github.com/ishaq-ansari/portfolio" className="text-red-400 hover:underline focus:outline-none"> GitHub</a>
            </li>
      
            <li style={{ paddingLeft: '50px' }}>→ Organize Me</li>
            <li style={{ paddingLeft: '70px' }}>A full-stack task management app designed to help</li>
            <li style={{ paddingLeft: '70px' }}>users organize their tasks and track progress.</li>
            <li style={{ paddingLeft: '70px' }}>
              <a href="https://organize-me-two.vercel.app/" className="text-red-400 hover:underline focus:outline-none">Live Demo</a> |&nbsp; 
              <a href="https://github.com/ishaq-ansari/Organize_me" className="text-red-400 hover:underline focus:outline-none">GitHub</a>
            </li>
            
            <li style={{ paddingLeft: '50px' }}>→ Snake Game</li>
            <li style={{ paddingLeft: '70px' }}>A simple snake game built with JavaScript and HTML5</li>
            <li style={{ paddingLeft: '70px' }}>
              <a href="https://snakegame-eosin-tau.vercel.app/" className="text-red-400 hover:underline focus:outline-none">Live Demo</a> |&nbsp;  
              <a href="https://github.com/ishaq-ansari/snake_game_web" className="text-red-400 hover:underline focus:outline-none">GitHub</a>
            </li> */}
          </ul>
        </div>
      )
    }),
  
    exp: () => ({
      type: 'system',
      content: (
        <div>
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ Computational Microscopy Imaging Lab, UF</li>
            <li style={{ paddingLeft: '70px' }}>Domain: AI Research </li>
            <li style={{ paddingLeft: '70px' }}>Duration: May 2024 - Aug 2024</li>
            <li style={{ paddingLeft: '50px' }}></li>
            <li style={{ paddingLeft: '50px' }}>→ Rutgers University</li>
            <li style={{ paddingLeft: '70px' }}>Domain: Data and Software</li>
            <li style={{ paddingLeft: '70px' }}>Duration: May 2023 - Jul 2023</li>
          </ul>
        </div>
      )
    }),
  
    resume:() => {
      const resumePath = "/Resume.pdf"; // Corrected path
    
      const handleResumeAction = (action) => {
        switch (action.toLowerCase()) {
          case "view":
            window.open(resumePath, "_blank"); // Open in new tab
            break;
          case "download":
            const link = document.createElement("a");
            link.href = resumePath;
            link.download = "Ishaq_Ansari_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            break;
          case "print":
            const printWindow = window.open(resumePath);
            if (printWindow) {
              printWindow.onload = () => {
                printWindow.print();
              };
            } else {
              console.error("Failed to open print window.");
            }
            break;
          default:
            console.warn("Invalid action.");
        }
      };
    
      return {
        type: "system",
        content: (
          <div>
            Resume Loaded...
            <ul>
              <li style={{ paddingLeft: "50px" }}>
                <button
                  onClick={() => handleResumeAction("view")}
                  className="text-red-400 hover:underline focus:outline-none"
                >
                  View
                </button>{" "}
                -{" "}
                <button
                  onClick={() => handleResumeAction("download")}
                  className="text-red-400 hover:underline focus:outline-none"
                >
                  Download
                </button>{" "}
                -{" "}
                <button
                  onClick={() => handleResumeAction("print")}
                  className="text-red-400 hover:underline focus:outline-none"
                >
                  Print
                </button>
              </li>
              <li style={{ paddingLeft: "50px" }}>
                Type 'view', 'download', or 'print' to interact
              </li>
            </ul>
          </div>
        ),
        handleResumeAction, // Expose the action handler
      };
    },
    
    
    contact: () => ({
      type: 'system',
      content: (
        <div>
          Hey, want to reach out?
          <ul>
            <li style={{ paddingLeft: '50px' }}>→ Email: iansari@caldwell.edu</li>
            <li style={{ paddingLeft: '50px' }}>→ Phone: +1 862 283 2477</li>
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
    const newEntry = { type: "command", content: `${currentPath} $ ${command}` };
  
    // Directly handle resume actions without checking history
    if (["view", "download", "print"].includes(trimmedCommand)) {
      commands.resume().handleResumeAction(trimmedCommand);
      setHistory((prev) => [...prev, newEntry]);
      return;
    }
  
    let response;
    if (commands[trimmedCommand]) {
      response = commands[trimmedCommand]();
    } else {
      response = {
        type: "system",
        content: `Command not found: ${trimmedCommand}. Type "help" for available commands.`,
      };
    }
  
    setHistory((prev) => [...prev, newEntry, ...(response ? [response] : [])]);
    onCommand(trimmedCommand, false); // Do not switch to GUI mode
  };
  
  // Capture "Enter" key event
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue(""); // Clear input after execution
    }
  };  

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!visible) return null;

  return (
    <div className="w-full h-[30rem] bg-gray-800/50 rounded-lg shadow-lg overflow-hidden font-mono text-sm">
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
    const timer = setTimeout(() => setShowContent(true), 1000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">&gt; About Me</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Decoding Identity...
        </div>
        {showContent && (
          <div className="space-y-4">
            <div className="p-4 bg-gray-700/50 rounded-lg overflow-auto">
              <h3 className="text-green-400">Who Am I</h3>
              <p>Data & Software Engineer, ML Ops, Full-Stack Developer, and a Problem Solver</p>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">What I Do</h3>
              <p>I design scalable data pipelines, build backend architectures, and develop ML-powered software solutions.
              </p>
            </div>
             <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Background</h3>
              <p>I am from Nepal. I completed my high school from there and came to the United States for college.
                I graduated `summa cum laude` from Caldwell University in Computer Science with 4.00 CGPA.
              </p>
            </div>
            {/* <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">What I Have Done</h3>
              <p>The interdisciplinary knowledge I gained as double major has 
                allowed me to combine biology with technology. Recently I 
                developed an AI-based pipeline to automatically segment and 
                quantify tissues in cerebral aneurysm using deep learning. T
                his pipeline can also 
                be used by other lab working on cerebral aneurysm.</p>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg ">
              <h3 className="text-green-400">Fun Fact</h3>
              <p>I love riddles and lame jokes. Try solving this: "I speak without a mouth, 
                hear without ears. I have no body but come alive with wind. What am I?”
               <br />(Answer: _______! Let’s debate the answer over coffee ☕)</p>
            </div> */}
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
    const timer = setTimeout(() => setShowContent(true), 1000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> Skills</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Decrypting Skills...
        </div>
        {showContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Python</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">90%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Java</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">75%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">C++</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">50%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">JavaScript</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">90%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">React</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">85%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Flask</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">70%</span>
              </div>
            </div>
            
            {/* Data Science/AI */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Machine Learning</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">80%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">TensorFlow</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">75%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">PyTorch</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">70%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Data Analysis</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">60%</span>
              </div>
            </div>

            {/* Other Skills */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">AWS</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">70%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Docker</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">75%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">SQL</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">85%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Git & GitHub</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 relative">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                <span className="absolute right-0 top-0 text-gray-100 text-xs">90%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> Projects</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Unlocking Projects...
        </div>
        {showContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">AI-Based Tissue Segmentation</h3>
              <p className="text-gray-300 mb-4 ">
                An AI pipeline to automatically segment and quantify tissues in cerebral aneurysms using deep learning.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://your-vercel-demo-link-1.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/ishaq-ansari/Ingrown-Tissue-Quantification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-600 text-gray-100 rounded hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">
                A hybrid terminal-GUI portfolio website built with React and Tailwind CSS.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://your-vercel-demo-link-2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/ishaq-ansari/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-600 text-gray-100 rounded hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Organize Me</h3>
              <p className="text-gray-300 mb-4">
                A full-stack task management app designed to help users organize their tasks and track progress.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://organize-me-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/ishaq-ansari/Organize_me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-600 text-gray-100 rounded hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Snake Game</h3>
              <p className="text-gray-300 mb-4">
                A simple snake game built with JavaScript and HTML5 Canvas, featuring smooth controls and an increasing difficulty level.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://snakegame-eosin-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/ishaq-ansari/snake_game_web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-600 text-gray-100 rounded hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//Experiences Page Component
const ExperiencesPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 max-w-3xl mx-auto">
      <h2 className="text-green-400 font-mono mb-4">> Experiences</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Hacking into the past...
        </div>
        {showContent && (
          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Computational Microscopy Imaging Lab, UF</h3>
              <p className="text-gray-300 font-semibold">AI Research</p>
              <p className="text-gray-400 text-sm">May 2024 - present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                  Develop and optimized a CNN-based AI pipeline to automate tissue detection and quantification in histopathology images of cerebral aneurysms.
                </li>
                <li>
                  Support data-driven improvements in the treatment of cerebral aneurysms by providing accurate and efficient analysis tools.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h3 className="text-green-400">Rutgers University</h3>
              <p className="text-gray-300 font-semibold">Data and Software</p>
              <p className="text-gray-400 text-sm">May 2023 - July 2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                  Collaborated with interdisciplinary researchers to process and analyze experimental data using R and image analysis tools such as ImageJ2 and Fiji.
                </li>
                <li>
                  Extracted meaningful patterns and insights in neural circuit research to support ongoing studies.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
// Resume Page Component
const ResumePage = () => {
  const [showContent, setShowContent] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`p-8 'bg-gray-800/50' : 'bg-white'} rounded-lg border 'border-gray-700' : 'border-gray-300'}`}>
      <h2 className={`text-green-400 font-mono mb-4`}>> Resume</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Loading Resume... Rendering Preview.
        </div>
        {/* Terminal Mode: View PDF preview and options */}
        {showContent && (
          <div className="p-4 bg-gray-900 rounded-lg">
            <div>
              {/* PDF Viewer (GUI Mode) */}
              <iframe 
                src="/Resume.pdf" 
                width="100%" 
                height="1000px" 
                title="Resume Preview"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//Contact Page Component
const ContactPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      setFormData({
        email: '',
        message: ''
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    const endpoint = 'https://formspree.io/f/xldglgjn'; // Replace with your Formspree endpoint

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      handleServerResponse(response.ok, 'Thank you, I will get back to you shortly.');
    } catch (error) {
      handleServerResponse(false, error.message);
    }
  };

  return (
    <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-green-400 font-mono mb-4">> Contact Me</h2>
      <div className="space-y-4">
        <div className="text-gray-300">
          Hey, please fill the form below to get in touch with me.
        </div>
        {showContent && (
          <div className="p-4 bg-gray-700/50 rounded-lg">
            {status.submitted ? (
              <div className="text-green-400 p-4">
                Message sent successfully! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-600 rounded text-gray-100 placeholder-gray-400"
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-600 rounded text-gray-100 placeholder-gray-400"
                    rows="4"
                    disabled={status.submitting}
                  />
                </div>
                {status.info.error && (
                  <div className="text-red-400">
                    Error: {status.info.msg}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="px-4 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors disabled:opacity-50"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
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

  const handleCommand = (command, switchToGUI = true) => {
    if (command === 'home') {
      setActiveSection('home');
      setTerminalVisible(true);
    } else if (switchToGUI) {
      setActiveSection(command);
      setTerminalVisible(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-mono text-xl text-green-400">ishaq-ansari 👋</h1>
          <div className="flex space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Experiences', 'Resume', 'Contact'].map(item => (
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
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 mt-16">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Quick Stats */}
          <div className="col-span-2 space-y-4">
            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <h2 className="text-green-400 font-mono mb-2">> Overview</h2>
              <div className="space-y-2 text-sm">
                <div>Data & Software Engineer </div>
                <div>Full-Stack Developer</div>
                <div>New York, NY</div>
              </div>
            </div>
          </div>

          {/* Central Content */}
          <div className="col-span-8">
            {terminalVisible && <Terminal onCommand={handleCommand} visible={terminalVisible} />}
            {activeSection === 'about' && <AboutPage />}
            {activeSection === 'skills' && <SkillsPage />}
            {activeSection === 'projects' && <ProjectsPage />}
            {activeSection === 'experiences' && <ExperiencesPage />}
            {activeSection === 'resume' && <ResumePage />}
            {activeSection === 'contact' && <ContactPage />}
          </div>

          {/* Right Sidebar - Connect */}
          <div className="col-span-2 space-y-4">
            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <h2 className="text-green-400 font-mono mb-2">> Connect</h2>
              <div className="flex flex-col space-y-3">
              <a 
                href="https://github.com/ishaq-ansari" // Replace with your GitHub URL
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-green-400 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/ishaq-ansari" // Replace with your LinkedIn URL
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-green-400 transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.youtube.com/@BestorialOfficial" // Replace with your Instagram URL
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-green-400 transition-colors"
              >
                <Youtube size={16} />
                <span>YouTube</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer with Social Links */}
      {/* <footer className="fixed bottom-0 w-full bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
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
      </footer> */}
      {/* Fixed Footer with Copyright */}
      <footer className="fixed bottom-0 w-full bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center space-x-6">
          <span className="text-sm text-gray-400">
            Designed & Built by Ishaq Ansari
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HybridPortfolio;