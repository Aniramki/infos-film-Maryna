import './App.css';

import Home from './Home/Home';

function App() {
  const clickBouton = () => alert('bouton cliqué')
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
      <img src="../images/dwwm_1.png" className="App-logo" alt="logo" />
              <p>
        TP React Développeur Web et Web Mobile
        </p>
        <button className="App-button" 
        onClick={clickBouton
        // onClick={ event => alert(event.target.id)
        }>
          Modifier l'animation
          </button>
      </header>
    </div>
  );
}

export default App;
