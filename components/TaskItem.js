import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.taskContainer}>
      <Checkbox
        status={task.completed ? "checked" : "unchecked"}
        onPress={() => onToggle(task.id)}
      />
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.text}
      </Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  deleteText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
