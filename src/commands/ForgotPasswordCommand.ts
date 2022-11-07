import {action} from 'mobx';
import {Command} from './Command';

export interface ForgotPasswordCommandParams {}

export class ForgotPasswordCommand implements Command {
  @action
  public async execute(): Promise<void> {}

  @action
  public canExecute(): boolean {
    return true;
  }
}
