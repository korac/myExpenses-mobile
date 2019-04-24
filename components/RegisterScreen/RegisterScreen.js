import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { register } from './Register.data';
import styles, { buttonClass } from './RegisterScreen.styles';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnRegisterPress = this.handleOnRegisterPress.bind(this);
    this.state = { name: '', email: '', password: '', confirmPassword: '', submitting: false };
  }

  handleOnRegisterPress() {
    const { name, email, password, confirmPassword } = this.state;

    this.setState({ submitting: true });
    if (password !== confirmPassword) {
      alert('Password must match Confirm password');
      return;
    }

    register(name, email, password)
      .then(res => {
        alert('Account successfully created');
        this.props.navigation.navigate('Login', { email, password });
      })
      .catch(err => {
        alert('There has been an error.');
        console.log(err.response);
        this.setState({ submitting: false });
      });
  }

  render() {
    const { name, email, password, confirmPassword, submitting } = this.state;
    const {
      navigation: { navigate }
    } = this.props;

    const disabled = !name.length || !email.length || !password.length || !confirmPassword.length;

    return (
      <View style={styles.registerContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.screenTitle}>Register</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={nameValue => this.setState({ name: nameValue })}
          value={name}
          placeholder="Name"
        />
        <View style={styles.verticalSeparator} />
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
        <TextInput
          style={styles.textInput}
          onChangeText={passwordValue => this.setState({ confirmPassword: passwordValue })}
          value={confirmPassword}
          placeholder="Confirm password"
          secureTextEntry={true}
        />
        <View style={styles.verticalSeparator} />
        <View>
          <Text style={styles.newMember} onPress={() => navigate('Login')}>
            Already a Member?
          </Text>
        </View>
        <View style={styles.largeVerticalSeparator} />
        <TouchableOpacity
          style={buttonClass(disabled || submitting)}
          activeOpacity={1}
          disabled={disabled || submitting}
          onPress={this.handleOnRegisterPress}
        >
          <Text style={styles.registerButtonText}>{submitting ? 'REGISTERING...' : 'REGISTER'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterScreen;
