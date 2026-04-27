import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Programs } from "./components/pages/Programs";
import { Events } from "./components/pages/Events";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "events", Component: Events },
      { path: "contact", Component: Contact },
    ],
  },
]);
