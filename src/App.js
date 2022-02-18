import React,{useState, useRef} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Menu from './components/Menu';
function App() {
const [focusFurniture, setFocusFurniture] = useState(1);
const [menu, togleMenu] = useState(false);
  return (
   <>
   <MainContent focusFurniture={focusFurniture}/>
   <Footer focusFurniture={focusFurniture} setFocusFurniture={setFocusFurniture}/>
   <Menu menu={menu}/>
   <Navbar togleMenu={togleMenu} menu={menu}/>
   </>
  );
}

export default App;
