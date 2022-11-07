import { action } from "mobx";
import { User } from "../models/User";
import { Command } from "./Command";

export interface RememberMeCommandParams {
  rememberMe: boolean;
}

export class RememberMeCommand implements Command {
  @action
  public async execute(params?: RememberMeCommandParams): Promise<void> {
    if (params) {
      User.rememberMe = params.rememberMe;
    }
  }

  @action
  public canExecute(params?: RememberMeCommandParams): boolean {
    if (params) {
      return true;
    } else {
      return false;
    }
  }
}
