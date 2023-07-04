import React from "react";
import { PrimitiveAtom, useAtom } from "jotai";
import type { Todo } from "../../store/todo";
import { Text } from "react-native";

type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: (item: PrimitiveAtom<Todo>) => void;
};

export default function Todo({ atom, remove }: TodoItemProps) {
  const [item, setItem] = useAtom(atom);

  const toggleCompleted = () =>
    setItem((prev) => ({ ...prev, completed: !prev.completed }));

  const toggleArchived = () =>
    setItem((prev) => ({ ...prev, archived: !prev.archived }));

  return <Text>Todo</Text>;
}
