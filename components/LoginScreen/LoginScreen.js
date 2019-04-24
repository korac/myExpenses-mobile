import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SecureStore } from 'expo';

import { login } from './Login.data';
import styles, { buttonClass } from './LoginScreen.styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnLoginPress = this.handleOnLoginPress.bind(this);
    this.state = { email: '', password: '', submitting: false };
  }

  componentDidUpdate(prevProps, prevState) {
    const { navigation } = this.props;

    const email = navigation.getParam('email', null);
    const password = navigation.getParam('password', null);

    if (email && password && email !== prevState.email && password !== prevState.password) {
      this.setState({ email, password });
    }
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
    const {
      navigation: { navigate }
    } = this.props;

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
        <View style={styles.verticalSeparator} />
        <View>
          <Text style={styles.newMember} onPress={() => navigate('Register')}>
            New Member?
          </Text>
        </View>
        <View style={styles.largeVerticalSeparator} />
        <TouchableOpacity
          style={buttonClass(disabled || submitting)}
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
