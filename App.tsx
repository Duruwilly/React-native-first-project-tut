import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export type itemTypes = {
  text: string,
  id: string
}

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [courseGoals, setCourseGoals] = useState<itemTypes[]>([])

  const modalToggle = () => {
    setModalVisibility(true)
  }

  const addButtonHandler = (goalText: string) => {
    setCourseGoals((prev) => [...prev, { text: goalText, id: Math.random().toString() }])
    setModalVisibility(false)
  };

  const onDelete = (id: string) => {
    setCourseGoals((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color="#a065ec"
          onPress={modalToggle} />
        <GoalInput
          isOpen={modalVisibility}
          addButtonHandler={(goalText: string) => addButtonHandler(goalText)}
          onClose={setModalVisibility}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView alwaysBounceVertical={false}>
          {
            courseGoals.map((item, index) => (
              <View style={styles.goalItem} key={index} >
                <Text style={styles.goalText}>{item}</Text>
              </View>
            ))
          }
        </ScrollView> */}
          {/* flatlist can be used for item that has an infinite amount of rendered item that is scrollable due to performance wise rather than scrollview that may cause performance issue because it will render all the item at once behind the seen. */}
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={onDelete}
              />
            )
          }} alwaysBounceVertical={false}
            // now should in case an item is being fetched from an API which of course will have a property of id and not key, we do this
            keyExtractor={(item, index) => {
              return (
                item.id
              )
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  },

});
