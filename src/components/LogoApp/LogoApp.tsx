import { Image, View } from "react-native";
import logo from '../../../assets/danger.png';
import styles from './LogoAppStyle'

export default function LogoApp(){
    return(
        <View style={styles.containerLogo}>
            <Image style={styles.logoImg} source={logo}/>
        </View>
    );
}