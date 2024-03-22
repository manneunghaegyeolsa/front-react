import logo from './logo.svg';
import './App.css';
import Header from './components/Headers';
import Page1 from './pages/Page1';
import { Route, Router } from 'react-router-dom';


function App() {
  return (
    <Router>
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
        <Route path="/page1" component={Page1} /> {/* 새로운 페이지 라우팅 */}
        
        {/* 다른 페이지에 대한 라우팅 추가 가능 */}
      </div>
    </Router>
  );
}

export default App;
