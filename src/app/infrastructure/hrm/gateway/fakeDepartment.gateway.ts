import { Observable, of } from 'rxjs';
import { DepartmentGateway } from '../../../core/hrm/gateway/department.gateway';
import { Department } from '../../../core/hrm/model/department';
import { IdentityResponse } from '../../../core/hrm/model/identityResponse';

export class FakeDepartmentGateway implements DepartmentGateway {
  constructor(private readonly fakeId: string) {}

  public create(department: Department): Observable<IdentityResponse> {
    console.log(`Creating department: ${department.name}`);
    return of({
      id: this.fakeId,
    });
  }
}
