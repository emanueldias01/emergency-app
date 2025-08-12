import { Pressable, Text } from "react-native";
import styles from './ButtonEmergencyStyle'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function ButtonEmergency(){
    const navigation = useNavigation<NavigationProp>();

    const handlePress = () => {
        navigation.navigate('Forms');
    }

    return(
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>🚨Chamar Emergência!</Text>
        </Pressable>
    )
}