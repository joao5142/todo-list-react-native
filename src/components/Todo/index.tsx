import { Alert, Text, TouchableHighlight, View } from "react-native";
import Checkbox from "expo-checkbox";

import TodoType from "../../types/Todo";

import { AntDesign } from "@expo/vector-icons";

import { useState, useEffect } from "react";

import { styles } from "./styles";

type Props = {
  todo: TodoType;
  onRemoveTodo: Function;
  onCheckboxValueChange: Function;
};

export function Todo({ todo, onRemoveTodo, onCheckboxValueChange }: Props) {
  const [isButtonRemovePressed, setIsButtonRemovePressed] = useState(false);

  function handleRemoveTodo() {
    Alert.alert("Remover Tarefa", "Deseja Remover a Tarefa ?", [
      {
        text: "Sim",
        onPress: () => {
          onRemoveTodo();
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.todo}>
      <Checkbox
        style={styles.todoCheckbox}
        value={todo.completed}
        onValueChange={() => {
          onCheckboxValueChange(todo);
        }}
        color={todo.completed ? "#4630EB" : undefined}
      />
      <Text
        style={[
          styles.todoDescription,
          todo.completed ? styles.todoDescriptionCompleted : null,
        ]}
      >
        {" "}
        {todo.description}
      </Text>

      <TouchableHighlight
        style={styles.todoRemoveButton}
        onPressIn={() => setIsButtonRemovePressed(true)}
        onPressOut={() => {
          handleRemoveTodo();
          setIsButtonRemovePressed(false);
        }}
        underlayColor="#333333"
      >
        <AntDesign
          name="delete"
          size={24}
          color={!isButtonRemovePressed ? "#808080" : "#E25858"}
        />
      </TouchableHighlight>
    </View>
  );
}
