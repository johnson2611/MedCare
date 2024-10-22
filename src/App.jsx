import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import News from "./pages/News";
import Sign from "./pages/SignUp";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6] overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Sign />} />
      </Routes>
    </main>
  );
}

export default App;
