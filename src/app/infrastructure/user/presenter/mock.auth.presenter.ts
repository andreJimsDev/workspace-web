import { AuthPresenter } from '../../../core/user/presenter/auth.presenter';

export class MockAuthPresenter implements AuthPresenter {
  isError(): boolean {
    throw new Error('Method not implemented.');
  }
  isLoading(): boolean {
    throw new Error('Method not implemented.');
  }
  private isCalled: string = '';

  presentLoginIsFailed(): void {
    this.isCalled = 'presentLoginIsFailed';
  }
  presentLoading(): void {
    this.isCalled = 'presentLoading';
  }
  presentLoggedIn(): void {
    this.isCalled = 'presentLoggedIn';
  }

  isCalledMethod(method: string): boolean {
    return this.isCalled === method;
  }
}
