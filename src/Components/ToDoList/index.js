import useLocalStorage from "../../Hooks/useLocalStorage";
import ToDoInput from "./ToDoInput";
import List from "./List";
import "./ToDoList.css";

function ToDoList(props) {
  const { list_name } = props;
  const [storageValue, setStorageValue] = useLocalStorage(list_name, []);

  return (
    <div className="flex justify-center p-2 h-screen bg-sandybrown">
      <div className="flex flex-col items-center justify-center p-2 gap-2 w-full lg:w-1/2">
        <h1 className="text-4xl text-gray-600">To-Do List</h1>
        <ToDoInput setStorageValue={setStorageValue} />
        <List storageValue={storageValue} setStorageValue={setStorageValue} />
      </div>
    </div>
  );
}

export default ToDoList;
