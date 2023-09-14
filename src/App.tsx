import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';

function App() {

  return (
    <div className="App text-white">
      <div>
        <Header />
        <div className=''>
          <Main/>
          <Aside/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
