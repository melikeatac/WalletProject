import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import news_data from "./news_data.json"

const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number1, onChangeNumber1] = React.useState(0);
  const [number2, onChangeNumber2] = React.useState(0);
  const [total, setTotal] = React.useState();
  return (
    <SafeAreaView>

      <Button title="Press Me" onPress={ () => setTotal(number1 - number2)}></Button>
      <Text>  {total} </Text>
      <Text> Gelir </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text> Gider </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
