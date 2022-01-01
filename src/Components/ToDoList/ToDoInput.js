import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../Atoms.js";

function ToDoInput(props) {
  const [input, setInput] = useState("");
  const [list, setList] = useRecoilState(todoListState);
  const { setStorageValue } = props;

  function onChange(e) {
    setInput(e.target.value.trimLeft());
  }

  function addItem() {
    if (input.length !== 0) {
      let newList = [input, ...list];
      setInput("");
      setList(newList);
      setStorageValue(newList);
    }
  }

  return (
    <div className="w-full flex gap-1 h-12">
      <textarea
        className="border-2 border-gray-400 rounded px-2  text-lg grow py-2"
        type="text"
        value={input}
        onChange={onChange}
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addItem();
          }
        }}
        placeholder="... Add New Task"
      ></textarea>
      <button
        onClick={addItem}
        className="border-2 border-green-400 group hover:text-white hover:bg-green-400 c rounded px-2 bg-green-50"
      >
        <svg
          className="w-10 h-10 text-green-400 group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default ToDoInput;
