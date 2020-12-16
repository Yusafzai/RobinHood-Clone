import './App.css';
import Header from './Header';
import "./Header.css";
import Image from './Image';
import Black from './Black';

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

    </div>
  );
}

export default App;
