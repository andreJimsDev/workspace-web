import { AuthGateway } from '../../core/gateway/auth.gateway';
import { UserToken } from '../../core/model/userToken';
import { Credential } from '../../core/model/credential';
import { Injectable } from '@angular/core';

export const EXPECTED_FAKE_ACCESS_TOKEN: string =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg';

@Injectable({
  providedIn: 'root',
})
export class FakeAuthGateway implements AuthGateway {

  login(credential: Credential): Promise<UserToken> {
    if (credential.password === 'wrongPassword') {
      return Promise.reject(new Error('Username or password is wrong'));
    }

    console.log(
      `Authenticated with Username: ${credential.username} and Password: ${credential.password}`
    ); //
    return Promise.resolve({ accessToken: EXPECTED_FAKE_ACCESS_TOKEN });
  }
}
