import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {AuthPresenter} from '../../../core/user/presenter/auth.presenter';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class SignalAuthPresenter implements AuthPresenter {
  loading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<boolean> = signal(false);
  readonly message: NzMessageService = inject(NzMessageService);

  isLoading(): boolean {
    return this.loading();
  }

  isError(): boolean {
    return this.error();
  }

  presentLoading(): void {
    this.error.set(false);
    this.loading.set(true);
  }

  presentLoggedIn(): void {
    this.loading.set(false);
    this.message.success('Login successful! You are now logged in.', {
      nzDuration: 3000, // Message disappears after 3 seconds
    });
  }

  presentLoginIsFailed(): void {
    this.error.set(true);
    this.loading.set(false);
  }
}
