import React from "react";

export function ToolIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.9 2c-3.1 0-5 .6-5 2.5v2.5h5v.8H3.5C2.1 7.8 1 9.4 1 12.2c0 2.9 1.2 4.4 3 4.4h1.7v-2.1c0-2 1.6-3.6 3.6-3.6h5.1c1.6 0 3-1.4 3-3V4.5C17.4 2.6 15.2 2 11.9 2z"
            fill="#3776AB"
          />
          <circle cx="8.5" cy="4.5" r=".8" fill="#fff" />
          <path
            d="M12.1 22c3.1 0 5-.6 5-2.5V17h-5v-.8h8.4c1.4 0 2.5-1.6 2.5-4.4 0-2.9-1.2-4.4-3-4.4h-1.7v2.1c0 2-1.6 3.6-3.6 3.6h-5.1c-1.6 0-3 1.4-3 3v3.4c0 1.9 2.2 2.5 5.5 2.5z"
            fill="#FFD43B"
          />
          <circle cx="15.5" cy="19.5" r=".8" fill="#fff" />
        </svg>
      );
    case "pandas":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="4" height="16" rx="1" fill="#130754" />
          <rect x="10" y="8" width="4" height="12" rx="1" fill="#FF4A00" />
          <rect x="17" y="11" width="4" height="9" rx="1" fill="#E70488" />
        </svg>
      );
    case "numpy":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 4h4.5l6.5 12V4H19v16h-4.5L8 8v12H4V4z"
            fill="#4DABCF"
          />
          <circle cx="6" cy="6" r="2" fill="#013243" />
        </svg>
      );
    case "sql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "power bi":
    case "powerbi":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="13" width="4" height="8" rx="1" fill="#F2C811" />
          <rect x="10" y="8" width="4" height="13" rx="1" fill="#E8A900" />
          <rect x="17" y="4" width="4" height="17" rx="1" fill="#B37E00" />
        </svg>
      );
    case "excel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#107C41" />
          <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "jupyter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4c-4.4 0-8 2.2-8 5 0 2.2 2.3 4.1 5.5 4.7C7.3 14.3 6 15.6 6 17c0 2.8 3.6 5 8 5s8-2.2 8-5c0-1.4-1.3-2.7-3.5-3.3 3.2-.6 5.5-2.5 5.5-4.7 0-2.8-3.6-5-8-5z"
            stroke="#F37626"
            strokeWidth="1.8"
          />
          <circle cx="8" cy="8" r="1.5" fill="#767676" />
          <circle cx="16" cy="16" r="1.5" fill="#767676" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.5 2 3 5.5 3 10c0 3.5 2 6.5 5 8v4l4-2 3 2v-4c3-1.5 6-4.5 6-8 0-4.5-3.5-8-9-8z"
            fill="#336791"
          />
          <circle cx="9" cy="8" r="1.2" fill="#fff" />
          <circle cx="15" cy="8" r="1.2" fill="#fff" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4a1.8 1.8 0 00-2.5 0L8.2 4.8l3.1 3.1a2.2 2.2 0 012.7 2.7l3 3a2.2 2.2 0 11-1.3 1.3l-2.8-2.8v4.2a2.2 2.2 0 11-1.8 0V12a2.2 2.2 0 01-1.2-2.9L6.8 6l-4.4 4.4a1.8 1.8 0 000 2.5l8.5 8.5c.7.7 1.8.7 2.5 0l8.2-8.2a1.8 1.8 0 000-2.3z"
            fill="#F05032"
          />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "vscode":
    case "vs code":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M17.4 2.2L6.8 10.6 3.1 7.7 1 8.8l3.6 3.2L1 15.2l2.1 1.1 3.7-2.9 10.6 8.4 4.6-2.1V4.3L17.4 2.2z"
            fill="#007ACC"
          />
        </svg>
      );
    default:
      return (
        <div className="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">
          {name.charAt(0)}
        </div>
      );
  }
}
