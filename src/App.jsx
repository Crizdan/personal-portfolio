
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("crizdan-theme", theme);
    } catch (error) {
      console.warn("Unable to save theme preference:", error);
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="home">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Languages />
        <Contact />
      </main>
      <Footer theme={theme}/>
    </>
  );
}

export default App;