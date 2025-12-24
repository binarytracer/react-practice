import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ConceptDetail from './pages/ConceptDetail';
import Playground from './pages/Playground';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concept/:slug" element={<ConceptDetail />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
