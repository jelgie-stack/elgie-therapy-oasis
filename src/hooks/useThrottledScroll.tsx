
import { useState, useEffect, useCallback } from 'react';

export function useThrottledScroll(throttleMs: number = 16) {
  const [scrollY, setScrollY] = useState(0);
  const [isThrottling, setIsThrottling] = useState(false);

  const handleScroll = useCallback(() => {
    if (isThrottling) return;
    
    setIsThrottling(true);
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      setTimeout(() => setIsThrottling(false), throttleMs);
    });
  }, [isThrottling, throttleMs]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial value
    setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollY;
}
