import {observer} from 'mobx-react';
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Switch,
} from 'react-native';
import {useCommand, CommandInvoker} from '../commands/Command';
import {ForgotPasswordCommand} from '../commands/ForgotPasswordCommand';
import {User} from '../models/User';
import {RememberMeCommand} from '../commands/RememberMeCommand';
import {ILoginScreenProps} from './ILoginScreenProps';
import {LoginCommand} from '../commands/LoginCommand';

export const LoginScreen: React.FunctionComponent<ILoginScreenProps> = observer(
  props => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const rememberMeCommand = useCommand(() => new RememberMeCommand());
    const forgotPasswordCommand = useCommand(() => new ForgotPasswordCommand());
    const loginCommand = useCommand(() => new LoginCommand());

    return (
      <View>
        <View>
          <Text>{props.title}</Text>
        </View>
        <View>
          <Text>Email</Text>
          <TextInput onChangeText={setEmail} value={email} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput onChangeText={setPassword} value={password} />
        </View>
        <View>
          <Text>Remember Me</Text>
          <Switch
            value={User.rememberMe}
            onValueChange={value => {
              CommandInvoker(rememberMeCommand, {
                rememberMe: value,
              });
            }}
          />
        </View>
        <View>
          <Text onPress={CommandInvoker(forgotPasswordCommand)}>
            {loginCommand.error}
          </Text>
        </View>
        <ActivityIndicator animating={loginCommand.pending} size={'large'} />
        {loginCommand.error ? (
          <View>
            <Text>{loginCommand.error}</Text>
          </View>
        ) : null}
        <Button
          disabled={
            !loginCommand.canExecute({
              email,
              password,
            })
          }
          title="Submit"
          onPress={CommandInvoker(loginCommand, {
            email,
            password,
          })}
        />
      </View>
    );
  },
);
