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
        <Route path="#" element={<Home />} />
        <Route path="#home" element={<Home />} />
        <Route path="#aide" element={<Aide />} />
      </Routes>
  </Router>
  );
}

export default App;
