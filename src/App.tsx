import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './features/NavigationBar/NavigationBar';
import Home from './features/Home/Home';
import Aide from './features/Aide/Aide';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/aide" component={Aide} />
        <Route path="/" component={Home} />
      </Switch>
  </Router>
  );
}

export default App;
