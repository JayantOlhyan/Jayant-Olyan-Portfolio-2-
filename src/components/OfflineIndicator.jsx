import React, { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();
  const [showRestored, setShowRestored] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
      setShowRestored(false);
    } else if (wasOffline) {
      setShowRestored(true);
      const timer = setTimeout(() => {
        setShowRestored(false);
        setWasOffline(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !showRestored) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs font-mono shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
      style={{
        backgroundColor: !isOnline ? 'rgba(17, 17, 17, 0.92)' : 'rgba(10, 25, 15, 0.92)',
        borderColor: !isOnline ? 'rgba(255, 189, 46, 0.4)' : 'rgba(0, 176, 80, 0.4)',
        color: !isOnline ? '#FFBD2E' : '#39FF14',
        boxShadow: !isOnline
          ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 189, 46, 0.15)'
          : '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 176, 80, 0.15)',
      }}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            !isOnline ? 'bg-amber-400' : 'bg-emerald-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            !isOnline ? 'bg-amber-500' : 'bg-emerald-500'
          }`}
        />
      </span>

      {!isOnline ? (
        <span>You're offline. Some features may be unavailable.</span>
      ) : (
        <span>Connection restored. You're back online.</span>
      )}
    </div>
  );
}
