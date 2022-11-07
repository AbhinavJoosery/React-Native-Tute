import { StyleSheet, View, StatusBar, FlatList, Button } from "react-native";

import { useState } from "react";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasksList, setTasksList] = useState([]);
  const [modal, setModal] = useState(false);

  const addTaskHandler = (task) => {
    setTasksList((currList) => [...currList, { text: task, key: task }]);
    // currList will be passed auto by React
    // currList will be the tasksList
    // since, we are using flatlist, we store the text as an object
    // the key property will make sure that flatlist can use it to identify the unique item
    // if the key prop was named id or anything, then use the keyExtractor prop in flatlist to extract it
  };

  const deleteItemHandler = (id) => {
    setTasksList((currList) =>
      currList.filter((lstItem) => lstItem.key !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Item"
        onPress={() => setModal(!modal)}
        color="#d8b0f7"
      />
      {modal ? (
        <TaskInput
          addItemHandler={addTaskHandler}
          modalVisibility={modal}
          setModalVisibility={setModal}
        />
      ) : null}

      <View style={styles.listContainer}>
        {/* <ScrollView>
          {tasksList.map((item) => (
            <View key={item} style={styles.listItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={tasksList}
          renderItem={(itemData) => (
            <TaskItem
              text={itemData.item.text}
              pressHandler={deleteItemHandler}
              itemId={itemData.item.key}
            />
          )}
          /* FlatList will take the tasksList and each item will be an object with some defined properties
              itemData.item is the object in the tasksList */
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 30,
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 50,
    flex: 6,
  },
});
