import { StyleSheet } from "react-native";
import { colors, fonts, metrics, general } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 20,
  },
  imageContainer: {
    padding: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 24,
    backgroundColor: "#191919",
  },

  textFieldContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: -55,
  },
  textfield: {
    flex: 1,
    borderRadius: metrics.baseRadius,
    padding: 16,
    backgroundColor: colors.gray500,
    color: "#fff",
    fontSize: fonts.large,
  },
  buttonAdd: {
    padding: 18,
    backgroundColor: colors.blueDark,
    borderRadius: metrics.baseRadius,
  },

  containerInfo: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  createdTasks: {
    fontWeight: "bold",
    color: colors.blue,
    fontSize: fonts.medium,
  },
  completedTasks: {
    fontWeight: "bold",
    color: colors.purple,
    fontSize: fonts.medium,
  },
  emptyData: {
    alignItems: "center",
    paddingTop: 40,
    borderTopColor: colors.gray400,
    borderTopWidth: 1,
  },
  emptyDataTitle: {
    marginTop: 15,
    fontWeight: "bold",
    color: colors.gray300,
  },
  emptyDataSubtitle: {
    marginTop: 2,
    color: colors.gray300,
  },
  row: { flexDirection: "row", gap: 10 },
  text: {
    color: "#323232",
    fontSize: fonts.large,
  },
});
