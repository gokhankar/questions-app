import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="question01">
        Click to view our question01 page: Search list
      </Link>
      <br />
      <Link to="question02">
        Click to view our question02 page : Debounced Text
      </Link>
      <br />
      <Link to="question03">
        Click to view our question03 page : Phone Number
      </Link>
      <br />
      <Link to="tictactoe">Click to view our tictactoe page</Link>
      <br />
      <Link to="dragnotes">Click to view our dragNotes page</Link>
    </div>
  );
}

export default Home;
