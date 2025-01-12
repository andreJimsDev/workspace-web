import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {provideRouter} from '@angular/router';
import {provideNzIconsTesting} from 'ng-zorro-antd/icon/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideUserGateway} from '../../../../infrastructure/user/gateway/provideUserGateway';
import {provideHttpClient} from '@angular/common/http';
import {provideUserPresenter} from '../../../../infrastructure/user/presenter/provideUserPresenter';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideRouter([]),
        provideNzIconsTesting(),
        provideNoopAnimations(),
        provideHttpClient(),
        provideUserGateway(),
        provideUserPresenter()
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
