import { useState } from "react";

const Learn = () => {
  const [myList, setMyList] = useState([]);

  const addToDo = () => {
    const inputBox = document.getElementById("todoValue");
    const item = inputBox.value;
    if (item && !myList.includes(item)) {
      setMyList((myList) => [...myList, item]);
    } else {
      alert("Duplicate values not allowed");
    }
    inputBox.value = "";
  };

  const removeTodo = (item) => {
    setMyList((prevList) => myList.filter((entry) => entry !== item));
  };

  function exportojs() {
    const jsonContent = JSON.stringify(myList, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "todoList.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <h1>My list</h1>
      <ul>
        {myList.map((item) => (
          <li key={item}>
            {item}{" "}
            <button
              className="bg-white text-black"
              onClick={() => removeTodo(item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="bg-slate-100 text-black px-2 py-1 mb-4"
        id="todoValue"
      />
      <button className=" bg-white text-black px-2 py-1 ml-4" onClick={addToDo}>
        Add list
      </button>
      <br />
      <button
        className="bg-white text-black px-2 py-2 mt-4"
        onClick={exportojs}
      >
        Exporter
      </button>
    </>
  );
};

export default Learn;
