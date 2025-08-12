import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formsContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'flex-start',
        margin: 35,
        alignContent: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    inputText: {
        paddingHorizontal: 30,
        width: '90%',
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth: 3,
        margin: 7
    },
    inputTextDescription: {
        paddingHorizontal: 30,
        width: '90%',
        height: '30%',
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth: 3,
        margin: 7
    },
    buttonContainer: {
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    sendButton: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 16,
    },
    textButton: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    returnButton: {
        height: 45,
        width: 45,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgReturnButton: {
        resizeMode: 'contain',
        width: 30,
        height: 30
    }
});

export default styles;