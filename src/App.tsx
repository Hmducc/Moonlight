import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Brands from "./Screens/Brands";
import Homepage from "./Screens/Homepage";
import Navbar from "./Screens/Navbar";

import Test from "./Screens/Test";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/test" element={<Test />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;
