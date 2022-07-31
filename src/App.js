
import './App.css';
import Navbar from './components/navbar';
import Header from './components/Header';
import { useState } from 'react';


function App() {
  let [darkMode, setdarkMode] = useState(true)
  function changeMode() {
    return (setdarkMode(prevState => !prevState))
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} changeMode={changeMode}/>
      <Header darkMode={darkMode}/>
      
    </div>
  );
}

export default App;
