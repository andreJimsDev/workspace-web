import { AuthPresenter } from '../../../core/user/presenter/auth.presenter';
import { SignalAuthPresenter } from './signal.auth.presenter';

export const provideUserPresenter = () => ({
  provide: AuthPresenter,
  useClass: SignalAuthPresenter,
});
