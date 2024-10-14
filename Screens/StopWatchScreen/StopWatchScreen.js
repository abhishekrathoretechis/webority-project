import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
      `${minutes < 10 ? '0' + minutes : minutes}:` +
      `${seconds < 10 ? '0' + seconds : seconds}:` +
      `${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Stopwatch</Text>
      <View style={styles.watchContainer}>
        <Text style={styles.timeText}>{formatTime()}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isRunning ? styles.disabledButton : styles.enabledButton,
          ]}
          onPress={startTimer}
          disabled={isRunning}>
          <Image source={require('../../assets/Images/play.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isRunning ? styles.enabledButton : styles.disabledButton,
          ]}
          onPress={pauseTimer}
          disabled={!isRunning}>
          <Image source={require('../../assets/Images/pause.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isPaused ? styles.enabledButton : styles.disabledButton,
          ]}
          onPress={resetTimer}
          disabled={!isPaused}>
          <Image source={require('../../assets/Images/reset.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  watchContainer: {
    backgroundColor: '#D9D9D9',
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveScreenHeight(20),
    marginTop: responsiveScreenHeight(5),
  },
  headingText: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 50,
    marginTop: responsiveScreenHeight(2),
  },
  timeText: {
    fontSize: 55,

    color: 'black',
    fontFamily: 'Poppins-light',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: responsiveScreenHeight(20),
  },
  button: {
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  enabledButton: {
    backgroundColor: '#fff',
  },
  disabledButton: {
    opacity: 0.3,
  },
});

export default Stopwatch;
