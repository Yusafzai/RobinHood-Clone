import './App.css';
import Header from './Header';
import "./Header.css";
import Image from './Image';
import Black from './Black';
import BelowBlack from './BelowBlack';
import Footer from './Footer';
import White from './White';
import Second from './Second';


function App() {
  return (
    <div className="App">

     {/* Header */}
     <div className="app__header">
      <Header />
     </div>

     {/* ImageTop */}
     <div className="app__image">
       <Image />
     </div>
     
     {/* Second */}
     <div className="app__imageSecond">
       <Second />
     </div>
       
       {/* Below Image */}
     <div className="app__imagebelow">
       <White />
     </div>
    
    {/* Sldier */}
    <div className="app__black">
    <Black />
    </div>

    {/* Below Slider */}
    <div className="app__belowblack">
    <BelowBlack />
    </div>

     {/* Footer */}
    <div className="app__footer">
     <Footer  />
    </div>

    </div>
  );
}

export default App;
