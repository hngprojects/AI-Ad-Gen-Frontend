"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Set initial value
    const media = window.matchMedia(query);
    setMatches(media.matches);

    // Define listener function
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Add the listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
