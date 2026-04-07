import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 80; // adjust to match your navbar height

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small delay to let react-remove-scroll release its lock
    // and let the new page fully render
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          // Get element position relative to the document
          const elementTop = el.getBoundingClientRect().top;
          const offsetPosition =
            elementTop + window.pageYOffset - NAVBAR_OFFSET;

          // Use the document's scrolling element directly
          // This bypasses react-remove-scroll which locks <body>
          const scrollTarget =
            document.scrollingElement || document.documentElement;

          scrollTarget.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        // No hash — scroll to top on route change
        const scrollTarget =
          document.scrollingElement || document.documentElement;
        scrollTarget.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150); // 150ms lets react-remove-scroll fully release

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;