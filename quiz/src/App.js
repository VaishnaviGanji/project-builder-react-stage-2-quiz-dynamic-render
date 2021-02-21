import react from 'react'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeComponent/>
          </Route>
          <Route path="/QuizComponent">
            <QuizComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
