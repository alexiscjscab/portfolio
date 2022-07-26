import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MyWork from './components/MyWork/MyWork';
import Skills from './components/Skills/Skills';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <NavBar />
          <About title='About Me' id='about' dark={false} />
          <Skills title='Skills' id='skills' dark={true} />
          <MyWork title='My Work' id='work' dark={false} />
          <Contact title='Contact' id='contact' dark={true} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
