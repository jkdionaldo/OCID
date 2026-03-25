import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Change this to match your navbar height in pixels
const NAVBAR_OFFSET = 80;

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // No hash — scroll to top instantly on page change
      window.scrollTo(0, 0);
      return;
    }

    // Strip the '#' and find the element
    const id = hash.replace("#", "");

    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
        return true;
      }
      return false;
    };

    // Try immediately first
    if (!scrollToElement()) {
      // If element not found yet (page still rendering), retry a few times
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (scrollToElement() || attempts >= 10) {
          clearInterval(interval);
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;