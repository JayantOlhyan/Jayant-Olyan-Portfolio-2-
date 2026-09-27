'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.log('[SW] Registered successfully with scope:', reg.scope);
          })
          .catch((err) => {
            console.error('[SW] Registration failed:', err);
          });
      });
    }
  }, []);

  return null;
}
