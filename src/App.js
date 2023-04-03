// import logo from './components/logos/logo.png';
import { gsap } from 'gsap';
import React, { useRef, useEffect } from 'react';
import './App.css';
import TikTokToe from "./TikTokToe";

function App() {
  
  const headerRef = useRef(null);

useEffect(() => {
  
  // gsap.to(headerRef.current, {
  //   rotation:'360', 
  //   duration:'1',
  //   // autoAlpha: 0, 
  //   ease: 'none',
  //   repeat: 3
  // });

  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.addLabel("headerRef", 0.5).fromTo(
      headerRef.current,
      
      {
        // transformOrigin: "100% 0",
        scaleX: 1.5
      },
      {
        scaleX: 1
      },
      "headerRef"
    );
  });

  return () => {
    ctx.revert();
  };

}, [headerRef])
  
  return (
    <div className="App">
      <header  className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <div ref={headerRef} className="tiktoktoename">Tik.Tok.Toe</div>
        <TikTokToe />
      </header>
    </div>
  );
}

export default App;
