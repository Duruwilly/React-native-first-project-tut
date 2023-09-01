import { Dispatch, SetStateAction, useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

type props = {
    addButtonHandler: (goalText: string) => void;
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<boolean>>
}

const GoalInput = ({ addButtonHandler, isOpen, onClose }: props) => {
    const [goalText, setGoalText] = useState<string>("");

    const inputChangeHandler = (enteredText: string) => {
        setGoalText(enteredText);
    };

    const toggleCloseModal = () => {
        onClose(false)
    }

    return (
        <Modal animationType="slide" visible={isOpen}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput style={styles.textInput}
                    placeholder='Your Course goal!'
                    onChangeText={inputChangeHandler}
                    value={goalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color="#b180f0"
                            title='Add Goals'
                            onPress={() => {
                                addButtonHandler(goalText);
                                setGoalText("")
                            }}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button
                            color="#f31282"
                            title="cancel"
                            onPress={toggleCloseModal}
                        />
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16
    },
    image: {
        height: 100,
        width: 100,
        margin: 20
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})