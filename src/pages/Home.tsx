import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <h2>Hi</h2>
      <Link to="contact">Click to view our contact page</Link>

      <h2>Hi</h2>
      <Link to="question01">Click to view our question01 page</Link>
      <h2>Hi</h2>
      <Link to="question02">Click to view our question02 page</Link>
      <h2>Hi</h2>
      <Link to="question03">Click to view our question03 page</Link>
      <h2>Hi</h2>
      <Link to="tictactoe">Click to view our tictactoe page</Link>
      <h2>Hi</h2>
      <Link to="dragnotes">Click to view our dragNotes page</Link>
    </div>
  );
}

export default Home;
