import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Question01 from "./pages/Question01";
import Question02 from "./pages/Question02";
import Question03 from "./pages/Question03";
import TicTacToe from "./pages/TicTacToe";
import DragNotes from "./pages/DragNotes";

function App() {
  // const questions = [
  //   { title: "1.Question", component: Question_01 },
  //   { title: "2.Question", component: Question_01 },
  //   { title: "3.Question", component: Question_01 },
  // ];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question01" element={<Question01 />} />
        <Route path="question02" element={<Question02 />} />
        <Route path="question03" element={<Question03 />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="dragnotes" element={<DragNotes />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
