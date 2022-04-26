import { createSlice, current } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Learn Redux",
      priority: "Low",
      completed: false,
    },
    {
      id: 2,
      name: "Learn React",
      priority: "Medium",
      completed: true,
    },
    {
      id: 3,
      name: "Learn NodeJs",
      priority: "High",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const currentTodo = state.find((todo) => {
        return todo.id == action.payload;
      });
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
