import { useState } from "react";
import "../style.css";
const Calculator = () => {
  const [values, setvalues] = useState("");
  const clear = () => {
    setvalues("");
  };
  const display = (value) => {
    setvalues(values + value);
  };
  const calculate = () => {
    setvalues(eval(values));
  };
  return (
    <>
      <form className="calculator" name="calc">
        <input type="text" className="value" value={values} />
        <span
          className="clear"
          style={{
            width: "120px",
            height: "60px",
            backgroundColor: " rgb(255, 163, 26)",
          }}
          onClick={() => clear()}
        >
          C
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <br />
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>

        <span onClick={() => display("-")}>-</span>
        <br />
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span
          className="plus"
          style={{
            width: "60px",
            height: "120px",
            position: "absolute",
          }}
          onClick={() => display("+")}
        >
          +
        </span>
        <br />
        <span onClick={() => display("1")}>1</span>

        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <br />
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </>
  );
};

export default Calculator;
