import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import NewTodo from "../../components/todo/NewTodo";
import { useAtom, useSetAtom } from "jotai";
import {
  RemoveFn,
  completedTodos,
  todosAtom,
  uncompletedTodos,
} from "../../store/todo";
import TodoItem from "../../components/todo/TodoItem";
import { MonoText } from "../../components/StyledText";
import NoTodosCard from "../../components/todo/NoData";

export default function TasksScreen() {
  const [todos] = useAtom(uncompletedTodos);
  const [completed] = useAtom(completedTodos);

  const setTodos = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));

  return (
    <View style={styles.container}>
      <NewTodo />
      {/* uncompleted tasks */}

      <MonoText style={styles.title}>My tasks</MonoText>
      {todos.length === 0 ? (
        <NoTodosCard
          title="No tasks"
          message="No tasks available. You can create a task by filling the new todo form above."
        />
      ) : (
        todos.map((todo, i) => <TodoItem atom={todo} remove={remove} key={i} />)
      )}

      {/* completed tasks */}

      <MonoText style={styles.title}>Completed</MonoText>
      {completed.length === 0 ? (
        <NoTodosCard
          title="Completed tasks will appear here"
          message="When you mark a task as complete a task, it will appear here."
        />
      ) : (
        completed.map((todo, i) => (
          <TodoItem atom={todo} remove={remove} key={i} />
        ))
      )}
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
