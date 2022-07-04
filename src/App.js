import { useState } from "react";
import "./styles.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function App() {
  const [getData, setGetData] = useState();
  const [groceryList, setGroceryList] = useState([]);

  const handleClick = () => {
    if (getData !== "") {
      setGroceryList((current) => [...current, getData]);
    }
    setGetData("");
  };

  const handleDelete = (id) => {
    console.log(id);
    setGroceryList((oldItems) => {
      return oldItems.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <header className="header">
          <h1>react-todo-app</h1>
          <h2>Simple todo application written in React.</h2>
        </header>

        <div>
          <input
            type="text"
            placeholder="Enter a Todo..."
            className="task-input"
            onChange={(e) => setGetData(e.target.value)}
            value={getData}
          />
          <button onClick={handleClick} className="addBtn">
            Add
          </button>
        </div>

        <ul>
          {groceryList &&
            groceryList.map((item, index) => {
              return (
                <div>
                  <li className="list-item">
                    <input type="text" value={item} className="list" />
                    <div>
                      <EditIcon />
                      <DeleteForeverIcon onClick={() => handleDelete(index)} />
                    </div>
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
