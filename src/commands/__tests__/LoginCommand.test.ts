import {LoginCommand} from '../../commands/LoginCommand';
import {useCommand} from '../../commands/Command';
import {renderHook} from '@testing-library/react-hooks';
import {User} from '../../models/User';
import {login} from '../../api/login';
import {LoginCommandParams} from '../LoginCommand';

describe('LoginCommand Tests', () => {
  //   test('should increment counter', () => {
  //     var loginCommand = new LoginCommand();
  //     loginCommand.pending = true;
  //     loginCommand.error = 'An error has occurred';
  //     jest.spyOn(loginCommand, 'canExecute').mockImplementation(() => true);
  //     jest.spyOn(User.login, 'login').mockImplementation(() => jest.fn());

  //     const {result} = renderHook(() => useCommand(() => loginCommand));

  //     expect(result.current.pending).toBe(true);
  //   });
  test('should increment counter', () => {
    jest.mock('../../models/User', () => {
      return function () {
        return {
          login: () => {
            return {
              action: 'error',
              error: 'An error',
            };
          },
        };
      };
    });

    const loginCommand = new LoginCommand();
    loginCommand.execute({email: 'asdf', password: 'asdf'});

    expect(loginCommand.error).toBeTruthy();
  });
});
