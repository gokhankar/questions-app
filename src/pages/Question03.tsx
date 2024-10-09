import { SetStateAction, useRef, useState } from "react";

const Question03 = () => {
  const [phone, setPhone] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    // console.log(event.target.value);
    const value = event.target.value;
    if (value.length > 13) return;
    let numericValue = value.toString().replace(/[^0-9]/g, "");

    if (numericValue.length > 3) {
      numericValue = `(${numericValue.slice(0, 3)})-${numericValue.slice(3)}`;
    }
    setPhone(numericValue);
  };
  return (
    <>
      <div></div>
      <div className="container mt-5 pt-4">
        <h1 className="text-center"> PhoneNumber </h1>
        <div className="container-sm">
          <div className="card mt-5 p-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Number"
                value={phone}
                ref={inputRef}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Question03;
