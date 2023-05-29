import logo from './logo.svg';
import './App.css';
import "./components/FruitsMaster"; 
import react,{useState} from 'react';

function App() {

  const [displayList, setDisplayList] = useState(false);

  function onClick() {
    setDisplayList(displayList ? false : true);
  }
  return (
    <div className="App">
      <button onClick={()=>onClick()}>afficher/Masquer</button>

      <FruitsMaster />
    </div>
  );
}

export default App;
