import './App.css';
import Home from './Components/home';
import Navbar from './Components/navbar';
import Skills from './Components/skills';
import Footer from './Components/footer';
import Aboutme from './Components/aboutme';
import Education from './Components/education';
import Experience from './Components/experience';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      
      <Skills></Skills>
      <Aboutme></Aboutme>
      <Experience></Experience>
      <Education></Education>
      <Footer></Footer>
    </div>
  );
}

export default App;
