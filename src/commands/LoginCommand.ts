import {observable, action} from 'mobx';
import {Command} from './Command';
import {User} from '../models/User';

export interface LoginCommandParams {
  email: string;
  password: string;
}

export class LoginCommand implements Command<LoginCommandParams> {
  @observable
  public pending: boolean = false;

  @observable
  public error: string | null = null;

  @action
  public async execute(params?: LoginCommandParams): Promise<void> {
    if (params) {
      this.pending = true;

      const result = await User.login(params.email, params.password);

      if (result.action === 'success') {
        // -> go to the next screen
      } else if (result.error) {
        this.error = result.error;
      }

      this.pending = false;
    }
  }

  @action
  public canExecute(params?: LoginCommandParams): boolean {
    if (params) {
      if (!params.email || !params.password) {
        return false;
      }
    }
    return !this.pending;
  }
}
