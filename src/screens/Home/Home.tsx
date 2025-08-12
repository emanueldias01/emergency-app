import { Text, View } from "react-native";
import styles from "./HomeStyle";
import LogoApp from "../../components/LogoApp/LogoApp";
import ButtonEmergency from "../../components/ButtonEmergency/ButtonEmergency";


export default function Home(){
    return(
        <View style={styles.container}>
            <LogoApp />
            <ButtonEmergency />
        </View>
    );
}