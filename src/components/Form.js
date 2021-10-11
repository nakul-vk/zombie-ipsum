import React, { useState } from "react";
import Lorem from "./Lorem";
import text from "../data";

function Form() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const amount = Number(number);
    if (amount > 0) {
      setData(text.slice(0, number));
    }
  }

  return (
    <div className="form">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="paragraphs">Paragraphs: </label>
          <input
            type="number"
            name="paragraphs"
            id="paragraph"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button className="generate" type="submit">
            GENERATE
          </button>
        </form>
      </div>
      {data.map((item, index) => {
        return <Lorem key={index} text={item} />;
      })}
    </div>
  );
}

export default Form;
