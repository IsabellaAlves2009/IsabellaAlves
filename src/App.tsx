import './App.css'
import {Hero}  from './components/hero/Hero'
import About from './components/aboutMe/AboutMe';
import { Skills3D } from './components/skills/Skills3D';
import { ProjectSection } from "./components/projects/projectSection";
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills3D />
      <ProjectSection />
      <Contact />
    </div>
  )
}

export default App
