import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

export const styles = StyleSheet.create({
  todo: {
    backgroundColor: colors.gray500,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.gray400,
    flexDirection: "row",
    alignItems: "center",

    padding: 20,
    gap: 10,
    marginBottom: 20,
  },
  todoCheckbox: {
    borderRadius: 50,
    borderColor: colors.blue,
  },
  todoDescription: {
    color: "#fff",
    flex: 1,
    fontSize: fonts.large,
  },
  todoDescriptionCompleted: {
    textDecorationLine: "line-through",
    color: colors.gray300,
  },
  todoRemoveButton: {
    padding: 10,
    borderRadius: metrics.baseRadius,
  },
});
