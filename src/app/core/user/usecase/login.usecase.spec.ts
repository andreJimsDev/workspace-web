import { missingArgumentMessage } from '../../shared/model/validation.message';
import { FakeAuthGateway } from '../../../infrastructure/user/gateway/fakeAuth.gateway';
import { LocalUserTokenGateway } from '../../../infrastructure/user/gateway/localUserToken.gateway';
import { MockAuthPresenter } from '../../../infrastructure/user/presenter/mock.auth.presenter';
import { AuthGateway } from '../gateway/auth.gateway';
import { Credential } from '../model/credential';
import { LoginUseCase } from './login.usecase';

export const EXPECTED_FAKE_ACCESS_TOKEN: string =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg';

describe('LoginUseCase', () => {
  let useCase: LoginUseCase;
  let userTokenGateway: LocalUserTokenGateway;
  let authGateway: AuthGateway;
  let authPresenter: MockAuthPresenter;

  beforeEach(async () => {
    authGateway = new FakeAuthGateway();
    userTokenGateway = new LocalUserTokenGateway();
    userTokenGateway.clear();
    authPresenter = new MockAuthPresenter();
    useCase = new LoginUseCase(authGateway, userTokenGateway, authPresenter);
  });

  it('should not login if username is empty', async () => {
    const credential: Credential = {
      username: '',
      password: 'userTestPassword',
    };

    await expectAsync(useCase.execute(credential)).toBeRejectedWithError(
      missingArgumentMessage('Username')
    );
  });

  it('should not login if password is empty', async () => {
    const credential: Credential = {
      username: 'userTest@yopmail.com',
      password: '',
    };

    await expectAsync(useCase.execute(credential)).toBeRejectedWithError(
      missingArgumentMessage('Password')
    );
  });

  it('should present authentication fails when credential is invalid', async () => {
    const credential: Credential = {
      username: 'userTest@yopmail.com',
      password: 'wrongPassword',
    };

    await useCase.execute(credential);

    expect(authPresenter.isCalledMethod('presentLoginIsFailed')).toBeTrue();
  });

  it('should logged in when input is valid', async () => {
    const credential: Credential = {
      username: 'userTest@yopmail.com',
      password: 'userTestPassword',
    };

    await useCase.execute(credential);

    expect(userTokenGateway.get()).toEqual({
      accessToken: EXPECTED_FAKE_ACCESS_TOKEN,
    });

    expect(authPresenter.isCalledMethod('presentLoggedIn')).toBeTrue();
  });
});
