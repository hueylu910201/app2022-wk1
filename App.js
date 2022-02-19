import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>數位二甲 呂修逸</Text>
      <Text style={styles.text1}>110919021</Text>
      <Text style={styles.text1}>hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8c5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    fontWeight: 'bold',
    fontSize: 36,
  },
});
