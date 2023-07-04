import React, { useState } from "react";
import { atom, useSetAtom } from "jotai";
import { Todo, todosAtom } from "../../store/todo";

import { View, TextInput, Button, StyleSheet, Text } from "react-native";

export default function NewTodo() {
  const setTodos = useSetAtom(todosAtom);

  const [formData, setFormData] = useState<Todo>({
    title: "",
    description: "",
    completed: false,
    archived: false,
  });

  const handleChange = (key: keyof Todo) => (value: Todo[keyof Todo]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const resetFormFields = () => {
    setFormData({
      title: "",
      description: "",
      completed: false,
      archived: false,
    });
  };

  const handleSubmit = () => {
    // validate form data
    if (!formData.title || !formData.description)
      return alert("Title and description are required");

    setTodos((prev) => [...prev, atom<Todo>(formData)]);
    resetFormFields();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={handleChange("title")}
      />

      <TextInput
        style={[styles.input, styles.decription]}
        placeholder="Description"
        value={formData.description}
        multiline
        onChangeText={handleChange("description")}
      />

      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    paddingBottom: 4,
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },
  decription: {
    height: 80,
    marginBottom: 8,
  },
});
