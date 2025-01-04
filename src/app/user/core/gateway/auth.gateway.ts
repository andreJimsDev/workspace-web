import { UserToken } from '../model/userToken';
import { Credential } from '../model/credential';

export abstract class AuthGateway {
  abstract login(credential: Credential): Promise<UserToken>;
}
