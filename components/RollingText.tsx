import React from "react";

interface RollingTextProps {
  text: string;
  className?: string;
}

export default function RollingText({ text, className = "" }: RollingTextProps) {
  return (
    <span className={`group flex cursor-pointer overflow-hidden ${className}`}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="relative block overflow-hidden h-fit"
        >
          {/* The "Elevator" Container that moves up */}
          <span
            className="block transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 0.02}s` }} // STAGGER LOGIC
          >
            {/* Letter 1: Initially visible */}
            <span className="block h-full flex items-center">
                {letter === " " ? "\u00A0" : letter}
            </span>
            
            {/* Letter 2: Absolute positioned below to roll in */}
            <span className="absolute top-full left-0 block h-full flex items-center">
                {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}