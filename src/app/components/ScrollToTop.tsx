import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  // useLocation gives us the current URL path
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, instantly scroll to the top left (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any visible UI
  return null;
}