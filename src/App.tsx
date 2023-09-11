import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';

function App() {
  const [currentSong, setCurrentSong] = useState(0);

  return (
    <div className="App text-white">
      <div>
        <Header />
        <div className=''>
          <Main currentSong={currentSong} setCurrentSong={setCurrentSong}/>
          <Aside currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
