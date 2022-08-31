import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './features/NavigationBar/NavigationBar';
import Home from './features/Home/Home';
import Aide from './features/Aide/Aide';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="convex-hull/#/home" element={<Home />} />
        <Route path="convex-hull/#/aide" element={<Aide />} />
        <Route path="/" element={<Home />} />
      </Routes>
  </Router>
  );
}

export default App;
