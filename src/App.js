import React,{useState, useRef} from 'react';
import './App.css';
import { gsap } from "gsap";
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
const [focusFurniture, setFocusFurniture] = useState(1);
  return (
   <>
   <Navbar/>
   <MainContent focusFurniture={focusFurniture}/>
   <Footer focusFurniture={focusFurniture} setFocusFurniture={setFocusFurniture}/>
   </>
  );
}

export default App;
