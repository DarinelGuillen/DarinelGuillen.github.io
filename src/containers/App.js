import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Play from '../pages/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Play" element={<Play />} />
        {/* <Route path="/Main" element={<Main />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
