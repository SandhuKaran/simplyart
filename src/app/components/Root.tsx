import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <Navigation />
      <ScrollToTop/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
