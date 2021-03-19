import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS & VIEWS
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './views/Home'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <Router>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navigation toggle={toggle}/>
    <Switch>
    <Route path='/'component={Home} exact/>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
