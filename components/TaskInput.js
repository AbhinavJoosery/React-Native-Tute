import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function TaskInput({ addItemHandler, modalVisibility, setModalVisibility }) {
  const [task, setTask] = useState("");

  const taskInputHandler = (inputText) => {
    setTask(inputText);
  };

  const addItem = () => {
    addItemHandler(task);
    setTask("");
    setModalVisibility(false);
  };

  return (
    <Modal animationType="slide" visible={modalVisibility}>
      <View style={styles.inputContainer}>
        <Image
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0070/7032/files/AMgoal-setting_HEADER.jpg?v=1579623952&width=1024",
          }}
          style={styles.imageStyle}
        />
        {/* React will automatically pass the text to the taskInputHandler */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter Task"
          onChangeText={taskInputHandler}
          value={task}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="Cancel"
              onPress={() => setModalVisibility(false)}
              color="#ec0f80"
            />
          </View>
          <View style={styles.btn}>
            <Button title="Add Item" onPress={addItem} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  imageStyle: {
    width: 300,
    height: 200,
    marginBottom: 30,
  },
  textInput: {
    borderColor: "#e4d0ff",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 20,
    color: "#120438",
    backgroundColor: "#e4d0ff",
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 10,
    width: "30%",
  },
});

export default TaskInput;
