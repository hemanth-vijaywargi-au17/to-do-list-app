import { useState } from "react";

function ToDoListItem(props) {
  const { text, deleteItem, editItem, moveItem, index } = props;
  const [input, setInput] = useState(text);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap">
      {editMode ? (
        <textarea
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-full md:w-auto grow border-2 border-gray-400 rounded bg-blue-100 p-2 text-xl"
          autoFocus
          onFocus={(e) => {
            e.target.setSelectionRange(input.length, input.length);
          }}
        ></textarea>
      ) : (
        <span className="w-full md:w-auto grow bg-lavender p-2 rounded text-gray-700 text-xl">
          {input}
        </span>
      )}

      {/* Buttons Section */}
      <div className="space-x-2">
        {editMode ? (
          /* Save */
          <button
            onClick={() => {
              editItem(index, input);
              setEditMode(!editMode);
            }}
            className="border-2 border-green-400 group hover:text-white hover:bg-green-400 rounded px-2 h-8 bg-green-50"
          >
            <svg
              className="w-6 h-6 text-green-400 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
          </button>
        ) : (
          /* Edit */
          <button
            onClick={() => {
              setEditMode(!editMode);
            }}
            className="border-2 group border-blue-400 hover:text-white hover:bg-blue-400 rounded px-2 h-8 bg-blue-50"
          >
            <svg
              className="w-6 h-6 text-blue-400 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        )}

        {/* Delete */}
        <button
          onClick={() => {
            deleteItem(index);
          }}
          className="border-2 group border-red-400 hover:text-white hover:bg-red-400 rounded px-2 h-8 bg-red-50"
        >
          <svg
            className="w-6 h-6 text-red-400 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>

        {/* Move Up */}
        <button
          onClick={() => {
            moveItem(index, index - 1);
          }}
          className="border-2 group border-purple-400 hover:text-white hover:bg-purple-400 rounded px-2 h-8 bg-purple-50"
        >
          <svg
            className="w-6 h-6 text-purple-400 group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Move Down */}
        <button
          onClick={() => {
            moveItem(index, index + 1);
          }}
          className="border-2 group border-purple-400 hover:text-white hover:bg-purple-400 rounded px-2 h-8 bg-purple-50"
        >
          <svg
            className="w-6 h-6 text-purple-400 group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ToDoListItem;
