import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<div>Solutions Page</div>} />
          <Route path="/resources" element={<div>Resources Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/signup" element={<div>Signup Page</div>} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
