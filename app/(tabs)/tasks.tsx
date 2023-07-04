import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import NewTodo from "../../components/todo/NewTodo";
import { useAtom, useSetAtom } from "jotai";
import {
  RemoveFn,
  completedTodos,
  todosAtom,
  uncompletedTodos,
} from "../../store/todo";
import TodoItem from "../../components/todo/TodoItem";

export default function TasksScreen() {
  const [todos] = useAtom(uncompletedTodos);
  const [completed] = useAtom(completedTodos);

  const setTodos = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My tasks</Text>
      {todos.map((todo, i) => (
        <TodoItem atom={todo} remove={remove} key={i} />
      ))}
      <Text style={styles.title}>Completed</Text>
      {completed.map((todo, i) => (
        <TodoItem atom={todo} remove={remove} key={i} />
      ))}

      <NewTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    minHeight: "100%",
    overflow: "scroll",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 14,
  },
});
