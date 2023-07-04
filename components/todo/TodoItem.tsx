import React, { Fragment } from "react";
import { PrimitiveAtom, useAtom } from "jotai";
import type { RemoveFn, Todo } from "../../store/todo";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};

export default function TodoItem({ atom, remove }: TodoItemProps) {
  const [item, setItem] = useAtom(atom);

  const toggleCompleted = () =>
    setItem((prev) => ({ ...prev, completed: !prev.completed }));

  const toggleArchived = () =>
    setItem((prev) => ({ ...prev, archived: !prev.archived }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => remove(atom)} style={styles.action}>
          <FontAwesome name="trash" size={20} color={"red"} />
          <Text>Delete</Text>
        </TouchableOpacity>
        {item.archived ? (
          <TouchableOpacity onPress={toggleArchived} style={styles.action}>
            <FontAwesome name="recycle" size={20} color={"#066613"} />
            <Text style={styles.greenText}>Restore</Text>
          </TouchableOpacity>
        ) : (
          <Fragment>
            <TouchableOpacity onPress={toggleArchived} style={styles.action}>
              <FontAwesome name="archive" size={20} color={"#ccc"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCompleted} style={styles.action}>
              <FontAwesome
                name={item.completed ? "check-square-o" : "square-o"}
                size={20}
                color={"#066613"}
              />
              <Text>
                {item.completed ? "Mark as uncompleted" : "Mark as completed"}
              </Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    borderColor: "#DDDDDD",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 14,
    marginVertical: 12,
  },
  actions: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  greenText: {
    color: "#066613",
  },
});
