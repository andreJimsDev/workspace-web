import { Observable } from 'rxjs';
import { DepartmentGateway } from '../../gateway/department.gateway';
import { Department } from '../../model/department';
import { IdentityResponse } from '../../model/identityResponse';

export class CreateDepartmentUseCase {
  constructor(private readonly departmentGateway: DepartmentGateway) {}

  public execute(department: Department): Observable<IdentityResponse> {
    if (!department.name || department.name.trim().length === 0) {
      throw new Error('Department name cannot be empty.');
    }
    // Implement your business logic here
    return this.departmentGateway.create(department);
  }
}
