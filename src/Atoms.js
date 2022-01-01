import { atom } from "recoil";

// An Atom is a piece of State which can be shared between components
const todoListState = atom({
  key: "todoListState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export { todoListState };
