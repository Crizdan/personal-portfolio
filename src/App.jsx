import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App(){
  return (
    <>
      <Navbar />
      

      <main id="home">
        <Hero />
        <About />
        <Skills />
        <Projects/>
        {/*Projects, skills and other sections will be added here.*/}
      </main>
    </>
  );
}

export default App;