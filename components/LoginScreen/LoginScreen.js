import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

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
        console.log(res.data.token);
        // LocalStorage.setAccessToken(res.data.token);
        alert('Good!');
        this.setState({ submitting: false });
      })
      .catch(() => {
        alert('There has been an error.');
        this.setState({ submitting: false });
      });
  }

  render() {
    const { email, password, submitting } = this.state;
    // const { navigate } = this.props.navigation;

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
          style={loginClass(disabled)}
          activeOpacity={0.6}
          disabled={disabled || submitting}
          onPress={this.handleOnLoginPress}
        >
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
