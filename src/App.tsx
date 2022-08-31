import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './features/NavigationBar/NavigationBar';
import Home from './features/Home/Home';
import Aide from './features/Aide/Aide';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/aide" component={Aide} />
        <Route exact path="/" component={Home} />
      </Switch>
  </Router>
  );
}

export default App;
