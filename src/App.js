import './App.css';
import Home from './components/sections/Home/Home';
import FeatureProjects from './components/sections/FeatureProjects/FeatureProjects';
import AboutMe from './components/sections/AboutMe/AboutMe';
import Blog from './components/sections/Blog/Blog';
import Contact from './components/sections/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <FeatureProjects />
      <AboutMe />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
