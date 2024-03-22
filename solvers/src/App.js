import logo from './logo.svg';
import './App.css';
import Header from './components/Headers';

function App() {
  return (
    <div className="App">
      <h1>Solvers</h1>
      <div className="App-header">
        <Header />  
      </div>
      <div className="App-body">
        <form>
          <input type="text" placeholder="Enter your problem here" />
          <button type="submit">Solve</button>
        </form>
      </div>
    </div>
  );
}

export default App;
