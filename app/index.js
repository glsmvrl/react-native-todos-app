import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Page() {
  const [name, setName] = useState("shaun");
  const [person, setPerson] = useState({ name: "mario", age: 40 });

  const clickHandler = () => {
    setName("chun-li");
    setPerson({ name: "luigi", age: "45" });
  };

  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <Text>
        his name is {person.name} and his age is {person.age}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
