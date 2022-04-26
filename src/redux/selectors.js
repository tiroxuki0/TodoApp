import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const filtersSearchSelector = (state) => state.filters.search;
export const filtersStatusSelector = (state) => state.filters.status;
export const filtersPrioritiesSelector = (state) => state.filters.priorities;

export const todoListRemaining = createSelector(
  todoListSelector,
  filtersSearchSelector,
  filtersStatusSelector,
  filtersPrioritiesSelector,
  (todoList, search, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All" || status === "") {
        return priorities.length
          ? todo.name.includes(search) && priorities.includes(todo.priority)
          : todo.name.includes(search);
      }
      return (
        (priorities.length
          ? todo.name.includes(search) && priorities.includes(todo.priority)
          : todo.name.includes(search)) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
