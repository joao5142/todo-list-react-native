import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  quantity: number;
};

export function ButtonInfo({ quantity }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{quantity}</Text>
    </TouchableOpacity>
  );
}
