import { UserToken } from '../model/userToken';

export abstract class UserTokenGateway {
  abstract save(userToken: UserToken): void;
  abstract get(): UserToken | null;
  abstract hasToken(): boolean;
}
