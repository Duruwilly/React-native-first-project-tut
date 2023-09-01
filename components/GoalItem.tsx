import { View, Text, StyleSheet, Pressable } from "react-native"

type propsType = {
    onDelete: (id: string) => void;
    text: string;
    id: string
}

const GoalItem = ({ text, onDelete, id }: propsType) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={onDelete.bind(this, id)}
                android_ripple={{ color: "#000" }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: "white"
    }
})