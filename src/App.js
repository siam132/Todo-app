import { useState } from "react";
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, done } from "./actions";

const App = () => {
  const todo = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  return (
    <div className="flex-container">
      <div className="input-container">
        <h1 className="header-text">Todo List</h1>
        <input
          className="input-field"
          type="text"
          value={content}
          placeholder="Insert Todo ..."
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button
          className="input-btn"
          onClick={() => {
            if (content.length > 0) {
              dispatch(add(content.toUpperCase()));
              setContent("");
            }
          }}
        >
          Add
        </button>
      </div>

      {todo.map((e) => {
        return (
          <div key={e.id} className="flex-item">
            <div>
              <h3 style={{ textDecoration: e.done ? "line-through" : "none" }}>
                {e.content}
              </h3>
              <p>
                Created at:
                {e.time.getMonth() +
                  "-" +
                  e.time.getDate() +
                  "-" +
                  e.time.getFullYear()}
              </p>
            </div>
            <button className="btn-done" onClick={() => dispatch(done(e.id))}>
              Done{" "}
              <span aria-label="Done" role="img">
                ✅
              </span>
            </button>
            <button
              className="btn-delete"
              onClick={() => dispatch(remove(e.id))}
            >
              Remove{" "}
              <span aria-label="Remove" role="img">
                ❌
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
