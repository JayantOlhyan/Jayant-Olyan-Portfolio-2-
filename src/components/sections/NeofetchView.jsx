import React from 'react';

export const NeofetchView = () => {
  const specs = [
    { label: 'OS', value: 'macOS 14.5 23F79 arm64', color: 'text-sky-400' },
    { label: 'Host', value: 'MacBook Pro (M4, 2024)', color: 'text-sky-400' },
    { label: 'Kernel', value: '23.5.0', color: 'text-sky-400' },
    { label: 'Uptime', value: '2 days, 5 hours, 42 mins', color: 'text-sky-400' },
    { label: 'Packages', value: '153 (brew)', color: 'text-sky-400' },
    { label: 'Shell', value: 'zsh 5.9', color: 'text-sky-400' },
    { label: 'Resolution', value: '3024x1964@2x', color: 'text-sky-400' },
    { label: 'DE', value: 'Aqua', color: 'text-sky-400' },
    { label: 'WM', value: 'Quartz Compositor', color: 'text-sky-400' },
    { label: 'Terminal Font', value: 'SF Mono', color: 'text-sky-400' },
    { label: 'CPU', value: 'Apple M4 (10) @ 4.41 GHz', color: 'text-sky-400' },
    { label: 'GPU', value: 'Apple M4 (10-core)', color: 'text-sky-400' },
    { label: 'Memory', value: '8.12 GiB / 16.00 GiB', color: 'text-sky-400' },
  ];

  const colorBlocks = [
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-zinc-400',
  ];

  const appleAscii = `
          .:'
        .::'
      .::::'
     .::::'
    .::::'
   .::::'
  .::::'
  .::::'
   .::::.
    .::::.
     .::::.
      .::::.
        .::'
          :'
  `.trim();

  return (
    <div className="font-mono text-xs text-text-primary p-2 sm:p-4 space-y-4">
      {/* Command prompt invocation */}
      <div className="text-emerald-400 font-bold flex items-center space-x-2">
        <span className="text-sky-400">jayant@macbook-pro</span>
        <span className="text-text-secondary">~ %</span>
        <span className="text-white">neofetch</span>
      </div>

      {/* Main Neofetch Grid matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
        {/* Left Column: Apple ASCII Logo */}
        <div className="md:col-span-4 flex justify-center select-none text-emerald-400 pt-1 opacity-90">
          <pre className="font-mono text-xs leading-[1.1] tracking-wider drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
            {appleAscii}
          </pre>
        </div>

        {/* Right Column: System Specs matching Image 1 */}
        <div className="md:col-span-8 space-y-1.5 leading-relaxed">
          {specs.map((item) => (
            <div key={item.label} className="flex items-baseline space-x-2">
              <span className="font-bold text-sky-400 w-32 flex-shrink-0">
                {item.label}:
              </span>
              <span className="text-gray-200">{item.value}</span>
            </div>
          ))}

          {/* Color blocks palette matching Image 1 */}
          <div className="flex items-center space-x-1.5 pt-4">
            {colorBlocks.map((bg, idx) => (
              <span
                key={idx}
                className={`w-4 h-3.5 rounded-sm ${bg} shadow-sm inline-block`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
