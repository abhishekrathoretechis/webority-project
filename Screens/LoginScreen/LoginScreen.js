import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Email and Password fields cannot be empty');
      return;
    }

    if (email === 'abhishekrathore@gmail.com' && password === 'abhishek@123') {
      navigation.navigate('StopWatchScreen');
    } else {
      setErrorMessage('Invalid Email or Password');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        source={require('../../assets/Images/Screen4.png')}
        style={{
          width: responsiveScreenWidth(100),
          marginBottom: responsiveScreenHeight(2),
        }}
      />
      <Image
        source={require('../../assets/Images/wel.png')}
        style={{alignSelf: 'center'}}
      />
      <Image
        source={require('../../assets/Images/glad.png')}
        style={{marginTop: responsiveScreenHeight(2), alignSelf: 'center'}}
      />
      <View style={{marginTop: responsiveScreenHeight(2), alignSelf: 'center'}}>
        <Text
          style={{
            color: '#3F4254',
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#B5B5C3'}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={{marginTop: responsiveScreenHeight(2), alignSelf: 'center'}}>
        <Text
          style={{
            color: '#3F4254',
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          Password
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#B5B5C3'}
            style={styles.passwordInput}
            secureTextEntry={!isPasswordVisible} // Toggle password visibility
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Image
                source={require('../../assets/Images/view.png')}
                style={{height: 25, width: 25}}
              />
            ) : (
              <Image
                source={require('../../assets/Images/hide.png')}
                style={{height: 25, width: 25}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          Log in
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  input: {
    backgroundColor: '#F2F2F4',
    width: responsiveScreenWidth(85),
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(3),
    fontSize: 20,
    paddingVertical: responsiveScreenHeight(1.5),
  },
  passwordContainer: {
    backgroundColor: '#F2F2F4',
    width: responsiveScreenWidth(85),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  passwordInput: {
    fontSize: 20,
    paddingVertical: responsiveScreenHeight(1.5),
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#2E82FC',
    width: responsiveScreenWidth(85),
    paddingVertical: responsiveScreenHeight(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: responsiveScreenHeight(10),
    alignSelf: 'center',
    marginBottom: responsiveScreenHeight(2),
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: responsiveScreenHeight(2),
    textAlign: 'center',
  },
});
