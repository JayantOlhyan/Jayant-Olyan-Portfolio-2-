import { useState, useEffect } from 'react';

export function useDelayedLoading(isLoading, delay = 200) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    const timer = setTimeout(() => setShowSkeleton(true), delay);
    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return isLoading ? showSkeleton : false;
}
