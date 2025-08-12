import { Pressable, Text } from "react-native";
import styles from './ButtonEmergencyStyle'

export default function ButtonEmergency(){
    return(
        <Pressable style={styles.button}>
            <Text style={styles.text}>🚨Chamar Emergência!</Text>
        </Pressable>
    )
}