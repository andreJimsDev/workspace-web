import {AuthPresenter} from '../../../core/user/presenter/auth.presenter';
import {AuthGateway} from '../../../core/user/gateway/auth.gateway';
import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {LoginUseCase} from '../../../core/user/usecase/login.usecase';
import {UserTokenGateway} from '../../../core/user/gateway/userToken.gateway';
import {createSignal} from '@angular/core/primitives/signals';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly authGateway: AuthGateway = inject(AuthGateway);
  private readonly authPresenter: AuthPresenter = inject(AuthPresenter);
  private readonly userTokenGateway: UserTokenGateway =
    inject(UserTokenGateway);
  readonly isLoggedIn: WritableSignal<boolean> = signal<boolean>(this.userTokenGateway.hasToken());
  readonly isLoading = createSignal(this.authPresenter.isLoading());
  readonly isError = createSignal(this.authPresenter.isError());
  readonly router: Router = inject(Router);

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
    this.router.navigate(['/']);
    this.isLoggedIn.set(this.userTokenGateway.hasToken());
  }
}
