import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  Pressable,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("./assets/123.png")}
          style={{ width: 100, height: 100 ,borderRadius: 20 }}
        />
        <Text style={styles.cardTitle}>Mohammad Shehab</Text>
        <Text style={styles.cardContent}>Kuwait</Text>
        <View style={styles.divider} />

        <View style={styles.row}>
          <Pressable
            style={styles.button}
            onPress={() => {
              alert("You have 100k followers!");
            }}
          >
            <Text>Followers</Text>
            <Text>100k</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              alert("You have 300k Likes!");
            }}
          >
            <Text>Likes</Text>
            <Text>300k</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              alert("You have 20k Photos!");
            }}
          >
            <Text>Photos</Text>
            <Text>20k</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    fontStyle: "script",
  },
  cardContent: {
    fontSize: 30,
    fontWeight: "ultralight",
    textAlign: "center",
    color: "gray",
    fontStyle: "",
    marginBottom: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "pink",
    color: "pink",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
    marginBottom: 5,

  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
