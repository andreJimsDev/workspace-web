export abstract class AuthPresenter {
  abstract presentLoading(): void;

  abstract presentLoggedIn(): void;

  abstract presentLoginIsFailed(): void;

  abstract isLoading(): boolean;

  abstract isError(): boolean;
}
