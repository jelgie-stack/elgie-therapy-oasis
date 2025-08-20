
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let rafId: number;
    
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    const handleResize = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateIsMobile);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Use matchMedia listener for better performance
    const onChange = () => {
      handleResize();
    };
    
    mql.addEventListener("change", onChange)
    
    // Set initial value using RAF to avoid forced reflow
    rafId = requestAnimationFrame(updateIsMobile);
    
    return () => {
      mql.removeEventListener("change", onChange)
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    }
  }, [])

  return !!isMobile
}
