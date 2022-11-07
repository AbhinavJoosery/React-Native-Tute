import { StyleSheet, Text, View, Pressable } from "react-native";

function TaskItem({ text, pressHandler, itemId }) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={pressHandler.bind(this, itemId)}
        style={(pressedData) =>
          pressedData.pressed ? styles.pressedItem : null
        }
      >
        <Text style={styles.itemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 10,
    margin: 4,
  },
  pressedItem: {
    opacity: 0.4,
  },
  itemText: {
    padding: 10,
    fontSize: 22,
    color: "#fff",
  },
});

export default TaskItem;
