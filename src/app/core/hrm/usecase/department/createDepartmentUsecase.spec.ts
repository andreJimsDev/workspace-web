import { FakeDepartmentGateway } from '../../../../infrastructure/hrm/gateway/fakeDepartment.gateway';
import { DepartmentGateway } from '../../gateway/department.gateway';
import { Department } from '../../model/department';
import { IdentityResponse } from '../../model/identityResponse';
import { CreateDepartmentUseCase } from './createDepartment.usecase';

describe('CreateDepartmentUseCase', () => {
  let useCase: CreateDepartmentUseCase;
  let departmentGateway: DepartmentGateway;
  const expectedId = 'f4f01300-d7bf-48a0-bfa3-8e72925865f4';
  beforeEach(async () => {
    departmentGateway = new FakeDepartmentGateway(expectedId);
    useCase = new CreateDepartmentUseCase(departmentGateway);
  });

  it('should not create department if name is empty', () => {
    const department = { name: '' };

    expect(() => useCase.execute(department)).toThrowError(
      'Department name cannot be empty.'
    );
  });

  it('should create department when input is valid', (done) => {
    const department = { name: 'HR' };
    const response: IdentityResponse = { id: expectedId };

    useCase.execute(department).subscribe({
      next: (result) => {
        expect(result).toEqual(response);
        done();
      },
      error: done.fail,
    });
  });
});
