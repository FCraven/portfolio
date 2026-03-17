'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import resumeData from '../resumeData';

const COMMANDS = {
  help: {
    output: [
      'Available commands:',
      '',
      '  help          Show this help message',
      '  whoami        Operator profile',
      '  skills        List capabilities',
      '  missions      View completed operations',
      '  contact       Connection channels',
      '  status        System status',
      '  stack         Primary tech arsenal',
      '  clear         Clear terminal',
      '  ls            List sections',
      '  cat README    Read the README',
      '  sudo hire     You know what to do',
      '',
      'Type a command and press Enter.',
    ],
  },
  whoami: {
    output: [
      `Name:     ${resumeData.name}`,
      `Handle:   @${resumeData.handle}`,
      `Role:     ${resumeData.tagline}`,
      `Email:    ${resumeData.email}`,
      '',
      resumeData.bio,
    ],
  },
  skills: {
    output: Object.entries(resumeData.skills).flatMap(([category, values]) => [
      `[${category.toUpperCase()}]`,
      `  ${values.join(', ')}`,
      '',
    ]),
  },
  missions: {
    output: resumeData.experience.flatMap((job) => [
      `${job.codename}`,
      `  Company:  ${job.company}`,
      `  Role:     ${job.role}`,
      `  Period:   ${job.start_date} — ${job.end_date}`,
      `  Brief:    ${job.brief}`,
      '',
    ]),
  },
  contact: {
    output: [
      'CONNECTION CHANNELS:',
      '',
      `  Email:     ${resumeData.email}`,
      `  GitHub:    ${resumeData.github}`,
      `  LinkedIn:  ${resumeData.linkedin}`,
      '',
      'All channels are actively monitored.',
    ],
  },
  status: {
    output: [
      'SYSTEM STATUS',
      '─────────────────────────',
      `  Uptime:         7+ years`,
      `  Mode:           Seeking new missions`,
      `  Specialization: Commerce & design systems`,
      `  Availability:   OPEN`,
      `  Response time:  < 24 hours`,
      '',
      'All systems operational.',
    ],
  },
  stack: {
    output: [
      'PRIMARY ARSENAL',
      '─────────────────────────',
      '  React.js    ████████████████░░  Expert',
      '  Next.js     ███████████████░░░  Advanced',
      '  Vue.js      ██████████████░░░░  Advanced',
      '  TypeScript  █████████████░░░░░  Advanced',
      '  Node.js     ████████████████░░  Expert',
      '  Shopify     ███████████████░░░  Advanced',
      '  Tailwind    ████████████████░░  Expert',
      '',
    ],
  },
  ls: {
    output: [
      'drwxr-xr-x  /home',
      'drwxr-xr-x  /about',
      'drwxr-xr-x  /projects',
      'drwxr-xr-x  /contact',
      '-rw-r--r--  README.md',
    ],
  },
  'cat readme': {
    output: [
      '# CRAVEN_OS',
      '',
      'Personal operating system for Francis P. Craven.',
      '',
      'I build commerce platforms that move real money,',
      'teach developers who ship real products, and obsess',
      'over the 200ms that separate good from great.',
      '',
      '## Quick Start',
      '  $ whoami     — Learn about the operator',
      '  $ missions   — View completed operations',
      '  $ contact    — Establish a connection',
      '',
      'Built with Next.js, Tailwind, and conviction.',
    ],
  },
  'cat README': {
    alias: 'cat readme',
  },
  'sudo hire': {
    output: [
      '',
      '  ███████╗██╗   ██╗██████╗ ███████╗██████╗ ',
      '  ██╔════╝██║   ██║██╔══██╗██╔════╝██╔══██╗',
      '  ███████╗██║   ██║██████╔╝█████╗  ██████╔╝',
      '  ╚════██║██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗',
      '  ███████║╚██████╔╝██║     ███████╗██║  ██║',
      '  ╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝',
      '',
      '  ACCESS GRANTED.',
      '',
      `  Email ${resumeData.email} to initiate the hiring protocol.`,
      `  Or connect on LinkedIn: ${resumeData.linkedin}`,
      '',
      '  Looking forward to building something great together.',
      '',
    ],
  },
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'CRAVEN_OS Terminal v1.0 — Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === 'clear') {
      setHistory([
        { type: 'system', text: 'Terminal cleared.' },
      ]);
      return;
    }

    const command = COMMANDS[trimmed];

    if (command) {
      const resolved = command.alias ? COMMANDS[command.alias] : command;
      setHistory((prev) => [
        ...prev,
        { type: 'input', text: cmd },
        ...resolved.output.map((line) => ({ type: 'output', text: line })),
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'input', text: cmd },
        { type: 'error', text: `Command not found: ${cmd}. Type "help" for available commands.` },
      ]);
    }
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!input.trim()) return;
    processCommand(input);
    setCmdHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    setInput('');
  }, [input, processCommand]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        if (cmdHistory[next]) setInput(cmdHistory[next]);
        return next;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = Math.max(prev - 1, -1);
        setInput(next === -1 ? '' : cmdHistory[next]);
        return next;
      });
    }
  }, [cmdHistory]);

  const getLineColor = (type) => {
    switch (type) {
      case 'input': return 'text-neon-cyan';
      case 'output': return 'text-text-primary';
      case 'error': return 'text-red-400';
      case 'system': return 'text-neon-green';
      default: return 'text-text-muted';
    }
  };

  return (
    <div
      className="terminal-panel overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-neon-green/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon-magenta/60" />
        <span className="ml-3 text-[10px] text-text-muted font-mono">craven@portfolio ~ %</span>
      </div>

      {/* Terminal output */}
      <div
        ref={scrollRef}
        className="px-4 py-3 font-mono text-sm max-h-[400px] overflow-y-auto space-y-0.5"
      >
        {history.map((line, i) => (
          <div key={i} className={getLineColor(line.type)}>
            {line.type === 'input' ? (
              <span>
                <span className="text-neon-green">$</span> {line.text}
              </span>
            ) : (
              <span style={{ whiteSpace: 'pre' }}>{line.text}</span>
            )}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-0">
          <span className="text-neon-green shrink-0">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-neon-cyan font-mono text-sm caret-neon-green"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
