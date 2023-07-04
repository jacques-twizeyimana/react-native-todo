import { atom, useSetAtom } from "jotai";
import React from "react";
import { Text } from "react-native";
import { Todo, todosAtom } from "../../store/todo";

export default function NewTodo() {
  const setTodos = useSetAtom(todosAtom);

  const handleSubmit = () => {
    const newTodo = {
      title: "New Todo",
      description: "New Todo Description",
      completed: false,
      archived: false,
    };
    setTodos((prev) => [...prev, atom<Todo>(newTodo)]);
  };
  return <Text>NewTodo</Text>;
}
