import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { AuthFacade } from '../../../infrastructure/facade/auth.facade';
import { Credential } from '../../../core/model/credential';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzFlexModule,
    NzAlertModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  authFacade = inject(AuthFacade);

  validateForm = this.formBuilder.group({
    username: this.formBuilder.control('', [
      Validators.email,
      Validators.required,
    ]),
    password: this.formBuilder.control('', [Validators.required]),
    remember: this.formBuilder.control(true),
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.authFacade.login(this.validateForm.value as Credential);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
