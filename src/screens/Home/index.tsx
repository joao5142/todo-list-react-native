import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

import { ButtonInfo } from "../../components/ButtonInfo";

import { AntDesign } from "@expo/vector-icons";

import { useEffect, useState } from "react";

import TodoType from "../../types/Todo";

import { Todo } from "../../components/Todo";

import uuid from "react-native-uuid";

import { styles } from "./styles";

import { colors } from "../../styles";

export function Home() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [quantityCompletedTodo, setQuantityCompletedTodo] = useState(0);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    onChangeTodoValue();
  }, [todos]);

  function handleChangeTodoCompletedValue(todoToChange) {
    const newArrTodos = todos.map((todo) => {
      if (todo.id === todoToChange.id) {
        return { ...todo, completed: !todo.completed };
      }
      return { ...todo };
    });
    setTodos(newArrTodos);
  }

  function onChangeTodoValue() {
    let lengthOfCompletedTodos = todos.filter((todo) => todo.completed).length;

    setQuantityCompletedTodo(lengthOfCompletedTodos);
  }

  function isTodoTextValid() {
    return todoText.length > 0;
  }

  function handleAddTodo() {
    if (!isTodoTextValid()) {
      Alert.alert(
        "Informe um texto",
        "Adicione algum texto para inserir a tarefa."
      );
      return;
    }

    let todo: TodoType = {
      id: uuid.v4(),
      description: todoText,
      completed: false,
    };
    setTodos((prevState) => [...prevState, todo]);
    setTodoText("");
  }
  async function handleRemoveTodo(todo) {
    setTodos((prevState) => prevState.filter((t) => t.id !== todo.id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.textFieldContainer}>
          <TextInput
            placeholderTextColor={colors.gray300}
            placeholder="Adicione uma nova tarefa"
            style={styles.textfield}
            value={todoText}
            onChangeText={setTodoText}
          />
          <TouchableHighlight
            onPress={handleAddTodo}
            underlayColor={colors.blue}
            style={styles.buttonAdd}
          >
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableHighlight>
        </View>

        <View style={styles.containerInfo}>
          <View style={styles.row}>
            <Text style={styles.createdTasks}> Criadas</Text>
            <ButtonInfo quantity={todos.length} />
          </View>
          <View style={styles.row}>
            <Text style={styles.completedTasks}>Concluidas</Text>
            <ButtonInfo quantity={quantityCompletedTodo} />
          </View>
        </View>

        <FlatList
          data={todos}
          ListEmptyComponent={
            <View style={styles.emptyData}>
              <Image source={require("../../assets/images/list.png")} />
              <Text style={styles.emptyDataTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyDataSubtitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <Todo
              onRemoveTodo={() => handleRemoveTodo(item)}
              onCheckboxValueChange={(todo) =>
                handleChangeTodoCompletedValue(todo)
              }
              todo={item}
            />
          )}
        />
      </View>
    </View>
  );
}
