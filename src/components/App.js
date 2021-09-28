import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import Values from "values.js";
import SingleColor from "./SingleColor";
const App = () => {
  const [color, setColor] = useState(null);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    const colors = new Values("#f15025").all(10);
    setList(colors);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder="#f15025"
            className={`${error ? "error" : ""}`}
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          {
            /* console.log(color.hex); */
          }
          return (
            <SingleColor key={index} {...color} hex={color.hex} index={index} />
          );
        })}
      </section>
    </>
  );
};
export default App;
