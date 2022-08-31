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
        <Route exact path="/convex-hull/home" component={Home} />
        <Route exact path="/convex-hull/aide" component={Aide} />
        <Route exact path="/convex-hull/" component={Home} />
      </Switch>
  </Router>
  );
}

export default App;
