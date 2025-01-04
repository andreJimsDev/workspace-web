import { AuthPresenter } from './../../core/presenter/auth.presenter';
import { AuthGateway } from './../../core/gateway/auth.gateway';
import { inject, Injectable } from '@angular/core';
import { LoginUseCase } from '../../core/usecase/login.usecase';
import { UserTokenGateway } from '../../core/gateway/userToken.gateway';
import { createSignal } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly authGateway: AuthGateway = inject(AuthGateway);
  private readonly authPresenter: AuthPresenter = inject(AuthPresenter);
  private readonly userTokenGateway: UserTokenGateway =
    inject(UserTokenGateway);
  readonly _isLoggedIn = createSignal(this.userTokenGateway.hasToken());
  readonly isLoggedIn = this._isLoggedIn();

  readonly loginUseCase = new LoginUseCase(
    this.authGateway,
    this.userTokenGateway,
    this.authPresenter
  );

  async login(credentials: {
    username: string;
    password: string;
  }): Promise<void> {
    await this.loginUseCase.execute(credentials);
  }

  get isLoading(): boolean {
    return this.authPresenter.isLoading();
  }

  get isError(): boolean {
    return this.authPresenter.isError();
  }
}
