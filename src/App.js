import { useState } from 'react';
import './App.css';
import Allguns from './components/Allguns/Allguns';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [counter, setCounter] = useState(0)
  const count = ()=>{
    const newCount = counter + 1
    setCounter(newCount)
  }
  return (
    <div className="App">
      <Navbar counter= {counter}></Navbar>
      <Allguns trigger = {()=> count()}></Allguns>
    </div>
  );
}

export default App;
