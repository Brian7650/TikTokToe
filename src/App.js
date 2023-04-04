import { gsap } from 'gsap';
import React, { useRef, useEffect } from 'react';
import './App.css';
import TikTokToe from "./components/tiktoktoe/TikTokToe";

function App() {
  
  const headerRef = useRef(null);

useEffect(() => {

  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.addLabel("headerRef", 0.5).fromTo(
      headerRef.current,
      
      {
        scaleX: 1.5,
        screenY: 1.3
      },
      {
        scaleX: 1,
        scaleY:1
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
        <div ref={headerRef} className="tiktoktoename">Tik.Tok.Toe</div>
        <TikTokToe />
      </header>
    </div>
  );
}

export default App;
