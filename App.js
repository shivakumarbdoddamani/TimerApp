import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function App() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    let counter = time;
    const interval = setInterval(function () {
      counter++;
      setTime(counter);
    }, 1000);
    setTimer(interval);
    setPause(false);
  };

  const pauseTimer = () => {
    setPause(true);
    clearInterval(timer);
  };

  const stopTimer = () => {
    setTime(0);
    clearInterval(timer);
    setTimer(null);
  };

  return (
    <View style={styles.app}>
      <Text>Timer: {time}</Text>
      <Pressable onPress={() => startTimer()} style={styles.style}>
        <Text style={styles.text}>START</Text>
      </Pressable>
      {!pause && time > 0 && (
        <Pressable onPress={() => pauseTimer()} style={styles.style}>
          <Text style={styles.text}>PAUSE</Text>
        </Pressable>
      )}
      <Pressable
        onPress={() => stopTimer()}
        style={styles.style}>
        <Text style={styles.text}>STOP</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 25,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
