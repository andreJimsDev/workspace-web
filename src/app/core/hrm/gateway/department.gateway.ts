import { Observable } from 'rxjs';
import { Department } from '../model/department';
import { IdentityResponse } from '../model/identityResponse';

export interface DepartmentGateway {
  create(department: Department): Observable<IdentityResponse>;
}
