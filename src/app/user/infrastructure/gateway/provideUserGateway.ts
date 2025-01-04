import { AuthGateway } from '../../core/gateway/auth.gateway';
import { UserTokenGateway } from '../../core/gateway/userToken.gateway';
import { FakeAuthGateway } from './fakeAuthGateway';
import { LocalUserTokenGateway } from './localUserToken.gateway';

export const provideUserGateway = () => [
  {
    provide: AuthGateway,
    useClass: FakeAuthGateway,
  },
  {
    provide: UserTokenGateway,
    useClass: LocalUserTokenGateway,
  },
];
