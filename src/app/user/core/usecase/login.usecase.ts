import { Credential } from '../model/credential';
import { assertArgumentNotEmpty } from '../../../shared/core/model/assertions';
import { AuthGateway } from '../gateway/auth.gateway';
import { UserTokenGateway } from '../gateway/userToken.gateway';
import { AuthPresenter } from '../presenter/auth.presenter';

export class LoginUseCase {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly userTokenGateway: UserTokenGateway,
    private readonly authPresenter: AuthPresenter
  ) {}
  async execute(credential: Credential): Promise<void> {
    this.authPresenter.presentLoading();
    assertArgumentNotEmpty('Username', credential.username);
    assertArgumentNotEmpty('Password', credential.password);
    try {
      const userToken = await this.authGateway.login(credential);
      this.userTokenGateway.save(userToken);
      this.authPresenter.presentLoggedIn();
    } catch (e) {
      this.authPresenter.presentLoginIsFailed();
    }
  }
}
