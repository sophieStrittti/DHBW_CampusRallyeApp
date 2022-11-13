import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}*/}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" backgroundColor='#ff0000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});