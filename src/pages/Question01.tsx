import React, { useState } from "react";

const Question01 = () => {
  //   const [filterText, setFilterText] = useState("");
  const fruits: string[] = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  function handleChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    console.log(e.target.value);
    // setFilterText(e.target.value);
    setFilteredFruits(
      fruits.filter((fruit) =>
        fruit.toLowerCase().includes(e.target.value.toString().toLowerCase())
      )
    );
  }

  return (
    <>
      <h1 className="text-center">Show and Filter a list</h1>
      <div className="container-sm">
        <div className="card mt-5 p-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={handleChange}
            />
            {/* <div className="input-group-append">
              <button className="btn btn-primary">&#128269;</button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container-sm">
        <ul className="list-group">
          {filteredFruits.map((fruit) => (
            <li className="list-group-item" key={fruit}>
              {fruit}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Question01;
