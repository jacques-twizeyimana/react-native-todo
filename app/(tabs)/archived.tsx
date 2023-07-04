import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { useAtom, useSetAtom } from "jotai";
import { RemoveFn, archivedTodos, todosAtom } from "../../store/todo";
import TodoItem from "../../components/todo/TodoItem";
import NoTodosCard from "../../components/todo/NoData";

export default function Archived() {
  const [todos] = useAtom(archivedTodos);

  const setTodos = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archived tasks</Text>
      {todos.length === 0 ? (
        <NoTodosCard
          title="No archived tasks"
          message="No archived tasks available. You can archive a task by tapping the archive icon on the right side of the task."
        />
      ) : (
        todos.map((todo, i) => <TodoItem atom={todo} remove={remove} key={i} />)
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
