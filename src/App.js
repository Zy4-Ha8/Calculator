import "./App.css";
import { useState } from "react";
function App() {
  const [displayInput, setDisplayInput] = useState("0");

  // handle adding the number
  function handleAddClick(e) {
    if (displayInput.startsWith("0")) {
      setDisplayInput("");
    }
    setDisplayInput((prev) => `${prev}${e.target.value}`);
  }

  // handle delete backSpace
  function handleDeleteBackSpace() {
    if (displayInput === "Infinity") {
      setDisplayInput("0");
    } else {
      setDisplayInput(displayInput.substring(0, displayInput.length - 1));
    }
    if (displayInput.length === 1) {
      setDisplayInput("0");
    }
  }

  // handle delete all
  function handleDeleteAll() {
    setDisplayInput("0");
  }
  // to handle add an operator result
  function handleAddOperator(e) {
    if (
      !displayInput.includes("%") &&
      !displayInput.includes("/") &&
      !displayInput.includes("-") &&
      !displayInput.includes("+") &&
      !displayInput.includes("*") &&
      displayInput.length !== 0
    ) {
      setDisplayInput((prev) => `${prev}${e.target.value}`);
    }
  }
  // handle result
  function handleResult() {
    if (displayInput.includes("%")) {
      const resultArray = displayInput.split("%");
      for (let i = 0; i < resultArray.length; ) {
        setDisplayInput(`${(+resultArray[i] / +resultArray[i + 1]) * 100}%`);
        break;
      }
    } else if (displayInput.includes("/")) {
      const resultArray = displayInput.split("/");
      for (let i = 0; i < resultArray.length; ) {
        setDisplayInput(`${+resultArray[i] / +resultArray[i + 1]}`);
        break;
      }
    } else if (displayInput.includes("*")) {
      const resultArray = displayInput.split("*");
      for (let i = 0; i < resultArray.length; ) {
        setDisplayInput(`${+resultArray[i] * +resultArray[i + 1]}`);
        break;
      }
    } else if (displayInput.includes("-")) {
      const resultArray = displayInput.split("-");
      for (let i = 0; i < resultArray.length; ) {
        setDisplayInput(`${+resultArray[i] - +resultArray[i + 1]}`);
        break;
      }
    } else if (displayInput.includes("+")) {
      const resultArray = displayInput.split("+");
      for (let i = 0; i < resultArray.length; ) {
        setDisplayInput(`${+resultArray[i] + +resultArray[i + 1]}`);
        break;
      }
    }
  }
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <form>
          <div className="display">
            <input disabled value={displayInput} type="text" />
          </div>
          <div className="buttons">
            <input
              className={"delete"}
              type="button"
              value={"AC"}
              onClick={handleDeleteAll}
            />
            <input
              className={"delete"}
              type="button"
              value={"BC"}
              onClick={handleDeleteBackSpace}
            />
            <input
              name="operator"
              type="button"
              value={"%"}
              onClick={handleAddOperator}
            />
            <input
              name="operator"
              type="button"
              value={"/"}
              onClick={handleAddOperator}
            />
          </div>
          <div className="buttons">
            <input type="button" value={7} onClick={handleAddClick} />
            <input type="button" value={8} onClick={handleAddClick} />
            <input type="button" value={9} onClick={handleAddClick} />
            <input
              name="operator"
              type="button"
              value={"*"}
              onClick={handleAddOperator}
            />
          </div>
          <div className="buttons">
            <input type="button" value={4} onClick={handleAddClick} />
            <input type="button" value={5} onClick={handleAddClick} />
            <input type="button" value={6} onClick={handleAddClick} />
            <input
              name="operator"
              type="button"
              value={"-"}
              onClick={handleAddOperator}
            />
          </div>
          <div className="buttons">
            <input type="button" value={1} onClick={handleAddClick} />
            <input type="button" value={2} onClick={handleAddClick} />
            <input type="button" value={3} onClick={handleAddClick} />
            <input
              name="operator"
              type="button"
              value={"+"}
              onClick={handleAddOperator}
            />
          </div>
          <div className="buttons">
            <input type="button" value={"00"} onClick={handleAddClick} />
            <input type="button" value={0} onClick={handleAddClick} />
            <input type="button" value={"."} onClick={handleAddClick} />
            <input
              className="equal"
              type="button"
              value={"="}
              onClick={handleResult}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
