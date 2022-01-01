import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../Atoms";
import ToDoListItem from "./ToDoListItem";
import { v4 as uuidv4 } from "uuid";

function List(props) {
  const [list, setList] = useRecoilState(todoListState);
  const { storageValue, setStorageValue } = props;

  useEffect(()=>{
    setList(storageValue)
  },[])

  function deleteItem(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setStorageValue(newList)
  }

  function editItem(index, newText) {
    let newList = [...list];
    newList[index] = newText;
    setList(newList);
    setStorageValue(newList)
  }

  function moveItem(index, newIndex) {
    let N = list.length;
    if (newIndex > -1 && newIndex < N) {
      let newList = [...list];
      let a = newList[index];
      let b = newList[newIndex];
      newList[index] = b;
      newList[newIndex] = a;
      setList(newList);
      setStorageValue(newList)
    }
  }

  return (
    <div className="w-full grow  flex flex-col gap-2 p-2 border-2 border-gray-400 bg-white rounded overflow-y-scroll toDoList">
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
  );
}

export default List;
