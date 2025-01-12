import { AuthGateway } from '../../../core/user/gateway/auth.gateway';
import { UserTokenGateway } from '../../../core/user/gateway/userToken.gateway';
import { FakeAuthGateway } from './fakeAuth.gateway';
import { LocalUserTokenGateway } from './localUserToken.gateway';
import {HttpAuthGateway} from './httpAuth.gateway';

export const provideUserGateway = () => [
  {
    provide: AuthGateway,
    useClass: HttpAuthGateway,
  },
  {
    provide: UserTokenGateway,
    useClass: LocalUserTokenGateway,
  },
];
