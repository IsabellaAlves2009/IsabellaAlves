import './App.css'
import { Hero } from './components/Hero/Hero'
import About from './components/AboutMe/AboutMe';
import { Skills3D } from './components/Skills/Skills3D';
import { ProjectSection } from './components/Projects/projectSection';
import { Contact } from './components/Contact/Contact';

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
