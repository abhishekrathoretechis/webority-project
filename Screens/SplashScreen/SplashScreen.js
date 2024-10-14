import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const SplashScreen = ({navigation}) => {
  // const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen'); // Replace 'HomeScreen' with the name of your target screen
    }, 2000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/Images/i4.png')}
        style={{
          position: 'absolute',
          top: responsiveScreenHeight(15),
          left: responsiveScreenWidth(10),
        }}
      />
      <Image
        source={require('../../assets/Images/i5.png')}
        style={{
          position: 'absolute',
          top: responsiveScreenHeight(15),
          right: responsiveScreenWidth(10),
        }}
      />
      <Image
        source={require('../../assets/Images/i3.png')}
        style={{
          position: 'absolute',
          top: responsiveScreenHeight(25),
          right: responsiveScreenWidth(30),
        }}
      />
      <Image
        source={require('../../assets/Images/i2.png')}
        style={{
          position: 'absolute',
          bottom: responsiveScreenHeight(22),
          left: responsiveScreenWidth(10),
        }}
      />
      <Image
        source={require('../../assets/Images/i1.png')}
        style={{
          position: 'absolute',
          bottom: responsiveScreenHeight(10),
          right: responsiveScreenWidth(10),
        }}
      />
      <Image source={require('../../assets/Images/Group.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2E82FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
