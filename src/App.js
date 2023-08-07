import './App.css';
import Board from './Components/Board';


function App() {

  return (
    <div className="App">
      <button className='reset' onClick={()=>window.location.reload(true)} >Restart</button>
      <Board/>
      
    </div>
  );
}

export default App;
