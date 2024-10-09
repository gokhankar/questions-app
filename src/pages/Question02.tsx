import { useEffect, useState } from "react";

const useDebounce = (text: string, delay: number) => {
  const [debounce, setDebounce] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return debounce;
};
const Question02 = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);
  return (
    <>
      <div className="container mt-5 pt-4">
        <h1 className="text-center">Debounced Text</h1>
        <div className="container-sm">
          <div className="card mt-5 p-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
              />
              {/* <div className="input-group-append">
              <button className="btn btn-primary">&#128269;</button>
            </div> */}
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2 className="text-center">Debounced Text : {debouncedText}</h2>
      </div>
    </>
  );
};

export default Question02;
