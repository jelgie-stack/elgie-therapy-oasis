import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Disable browser's native restoration so we control it.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Defer until DOM for the new route is painted.
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          // If there's a sticky header, adjust via CSS scroll-margin-top (see Step 3).
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname, key, hash]);

  return null;
}