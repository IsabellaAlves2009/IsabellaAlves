import './App.css'
import { Hero } from './components/Hero/Hero'
import About from './components/AboutMe/AboutMe';
import { Skills3D } from "./components/Skills/Skills3D";
import { ProjectSection } from './components/Projects/ProjectSection'; 
import { Contact } from './components/Contact/Contact';

export default function App() {
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
