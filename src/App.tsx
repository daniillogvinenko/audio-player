import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';

function App() {
  const [currentSong, setCurrentSong] = useState(0);

  return (
    <div className="App h-screen flex flex-col justify-between bg-black bg-opacity-60 text-white">
      <div>
        <Header />
        <div className='flex mt-20'>
          <Aside currentSong={currentSong} setCurrentSong={setCurrentSong}/>
          <Main currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
