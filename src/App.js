// import logo from './components/logos/logo.png';
import './App.css';
import TikTokToe from "./TikTokToe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <div className="tiktoktoename">Tik.Tok.Toe</div>
        <TikTokToe />
      </header>
    </div>
  );
}

export default App;
