import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './views/About'

function App() {
  return (
  <Router>
    <AboutMe/>
  </Router>
  );
}

export default App;
