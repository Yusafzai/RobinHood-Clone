import './App.css';
import Header from './Header';
import "./Header.css";
import Image from './Image';
import Black from './Black';
import BelowBlack from './BelowBlack';

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
    
    {/* Sldier */}
    <Black />
    {/* Below Slider */}
    <BelowBlack />
    </div>
  );
}

export default App;
