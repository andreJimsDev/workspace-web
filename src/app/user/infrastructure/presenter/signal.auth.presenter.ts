import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { AuthPresenter } from '../../core/presenter/auth.presenter';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class SignalAuthPresenter implements AuthPresenter {
  loading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<boolean> = signal(false);
  readonly router: Router = inject(Router);
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
    setTimeout(() => {
      this.loading.set(false);
      this.message.success('Login successful! You are now logged in.', {
        nzDuration: 3000, // Message disappears after 3 seconds
      });
      this.router.navigate(['/welcome']);
    }, 3000);
  }
  presentLoginIsFailed(): void {
    setTimeout(() => {
      this.error.set(true);
      this.loading.set(false);
    }, 3000);
  }
}
