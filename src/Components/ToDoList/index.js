import useLocalStorage from "../../Hooks/useLocalStorage";
import useList from "../../Hooks/useList";
import ToDoInput from "./ToDoInput";
import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function ToDoList() {
  // Custom Hooks
  const [storageValue, setStorageValue] = useLocalStorage("My-To-Do-List", []);
  const { list, addItem, deleteItem, editItem, moveItem } = useList(storageValue);

  // EveryTime there is a change in list , storageValue is Updated
  useEffect(() => {
    setStorageValue(list);
  }, [list, setStorageValue]);

  return (
    <div className="flex justify-center p-2 h-screen bg-sandybrown">
      <div className="flex flex-col items-center justify-center p-2 gap-2 w-full lg:w-1/2">
        <h1 className="text-4xl text-gray-600">To-Do List</h1>
        <ToDoInput addItem={addItem} />
        <div className="w-full grow  flex flex-col gap-2 p-2 border-2 border-gray-400 bg-white rounded overflow-y-scroll">
          {list.length !== 0 ? (
            list.map((item, index) => {
              return (
                <ToDoListItem
                  text={item}
                  key={uuidv4()}
                  index={index}
                  deleteItem={deleteItem}
                  editItem={editItem}
                  moveItem={moveItem}
                />
              );
            })
          ) : (
            <span className="text-gray-500 text-center text-xl">
              List is Empty!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
