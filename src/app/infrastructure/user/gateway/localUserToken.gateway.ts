import {Injectable} from '@angular/core';
import {UserTokenGateway} from '../../../core/user/gateway/userToken.gateway';
import {UserToken} from '../../../core/user/model/userToken';

@Injectable({
  providedIn: 'root',
})
export class LocalUserTokenGateway implements UserTokenGateway {
  hasToken(): boolean {
    return this.get() != null;
  }

  save(userToken: UserToken): void {
    localStorage.setItem('userToken', JSON.stringify(userToken));
  }

  get(): UserToken | null {
    const userTokenString = localStorage.getItem('userToken');
    if (userTokenString && userTokenString.length > 0) {
      return JSON.parse(userTokenString) as UserToken;
    }
    return null;
  }

  clear(): void {
    localStorage.removeItem('userToken');
  }
}
