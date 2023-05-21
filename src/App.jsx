import React from 'react';
import './App.scss';

import SlideShow from "./slideshow/SlideShow.jsx";



function App() {
  return (
    <main id="mainApp">
      <SlideShow>
        <div className="slide" img_url="img-1.jpg" caption="Caption 1" description="Caption description 1Caption description 1Caption description 1Caption description 1Caption description 1Caption description 1Caption description 1Caption description 1"></div>
        <div className="slide" img_url="img-2.jpg" caption="Caption 2" description="Caption description 2"></div>
        <div className="slide" img_url="img-3.jpg" caption="Caption 3" description="Caption description 3"></div>
        <div className="slide" img_url="img-4.jpg" caption="Caption 4" description="Caption description 4"></div>
        <div className="slide" img_url="img-5.jpg" caption="Caption 5" description="Caption description 5"></div>
      </SlideShow>
    </main>
  );
}

export default App;
