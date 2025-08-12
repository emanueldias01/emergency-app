import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./FormsStyle";
import returnImg from '../../../assets/return.png';
import { RootStackParamList } from "../../../routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Forms'>;

export default function Forms(){

    const navigation = useNavigation<NavigationProp>();

    const handlerSend = () => {
        Alert.alert("Emergência enviada com sucesso!");
    }

    const handleReturnHome = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.formsContainer}>
            <Text style={styles.text}>Tipo de emergência:</Text>
            <TextInput placeholder="Crime" style={styles.inputText}/>

            <Text style={styles.text}>Localização:</Text>
            <TextInput style={styles.inputText} placeholder="Bairro"/>

            <Text style={styles.text}>Horário do ocorrido:</Text>
            <TextInput style={styles.inputText} placeholder="Data"/>

            <Text style={styles.text}>Descrição:</Text>
            <TextInput style={styles.inputTextDescription} 
                multiline
                numberOfLines={6}
            placeholder="criminoso/situação"/>

            <View style={styles.buttonContainer}>
                <Pressable onPress={handlerSend} style={styles.sendButton}>
                    <Text style={styles.textButton}>Enviar</Text>
                </Pressable>

                <Pressable onPress={handleReturnHome} style={styles.returnButton}>
                    <Image style={styles.imgReturnButton} source={returnImg}/>
                </Pressable>
            </View>
            
        </View>
    );
}