import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App(){
  return (
    <>
      <Navbar />
      

      <main id="home">
        <Hero />
        <About />
        <Skills />
        {/*Projects, skills and other sections will be added here.*/}
      </main>
    </>
  );
}

export default App;