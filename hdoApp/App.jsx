import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>watashi wa mou shindeiru</Text>
      <button onPress={this.handleClick} title="Traer eventos" color='blue'/>
      <StatusBar style="auto" />
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