import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Question_01 from "./components/Question_01";
import Navbar from "./components/navbar";

function App() {
  const questions = [
    { title: "1.Question", component: Question_01 },
    { title: "2.Question", component: Question_01 },
    { title: "3.Question", component: Question_01 },
  ];

  return (
    <div className="App">
      <Navbar />
      <h2>{questions[0].title}</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
