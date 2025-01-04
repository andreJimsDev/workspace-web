import { AuthPresenter } from '../../core/presenter/auth.presenter';
import { SignalAuthPresenter } from './signal.auth.presenter';

export const provideUserPresenter = () => ({
  provide: AuthPresenter,
  useClass: SignalAuthPresenter,
});
