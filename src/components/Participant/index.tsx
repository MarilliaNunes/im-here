import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

type participantProps = {
  name: string
  onRemove: () => void 
}

export function Participant({ name, onRemove }: participantProps){

  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove} >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}