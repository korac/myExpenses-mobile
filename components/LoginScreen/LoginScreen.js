import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SecureStore } from 'expo';

import { login } from './Login.data';
import styles, { loginClass } from './LoginScreen.styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnLoginPress = this.handleOnLoginPress.bind(this);
    this.state = { email: '', password: '', submitting: false };
  }

  handleOnLoginPress() {
    const { email, password } = this.state;

    this.setState({ submitting: true });
    login(email, password)
      .then(res => {
        SecureStore.setItemAsync('userToken', res.data.token).then(() => this.props.navigation.navigate('App'));
      })
      .catch(err => {
        alert('There has been an error.');
        console.log(err.response);
        this.setState({ submitting: false });
      });
  }

  render() {
    const { email, password, submitting } = this.state;

    const disabled = !email.length || !password.length;

    return (
      <View style={styles.loginContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.screenTitle}>Login</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={emailValue => this.setState({ email: emailValue })}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <View style={styles.verticalSeparator} />
        <TextInput
          style={styles.textInput}
          onChangeText={passwordValue => this.setState({ password: passwordValue })}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.largeVerticalSeparator} />
        <TouchableOpacity
          style={loginClass(disabled || submitting)}
          activeOpacity={1}
          disabled={disabled || submitting}
          onPress={this.handleOnLoginPress}
        >
          <Text style={styles.loginButtonText}>{submitting ? 'LOGGING IN...' : 'LOG IN'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
