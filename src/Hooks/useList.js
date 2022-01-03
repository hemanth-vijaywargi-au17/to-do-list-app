import { useState } from "react";

function useList(defaultValue) {
  const [list, setList] = useState(defaultValue);

  function addItem(item) {
    if (item.length !== 0) {
      let newList = [item, ...list];
      setList(newList);
    }
  }

  function deleteItem(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function editItem(index, newText) {
    let newList = [...list];
    newList[index] = newText;
    setList(newList);
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
    }
  }

  return {
    list,
    addItem,
    deleteItem,
    editItem,
    moveItem,
  };
}

export default useList;
