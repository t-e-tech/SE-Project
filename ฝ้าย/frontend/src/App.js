import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Nick_Register from './Nick_Register';
import Nick_Login from './Nick_Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Nick_Login />} />
            <Route path="/register" element={<Nick_Register />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
