import About from "./components/About";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />      
      <About title='About Me' id='about' dark={false} />
      <Skills title='Skills' id='skills' dark={true} />
      <MyWork title='My Work' id='work' dark={false} />
      <Contact title='Contact' id='contact' dark={true} />
    </div>
  );
}

export default App;
