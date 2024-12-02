import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './home';
import NewPage from './newPage';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
