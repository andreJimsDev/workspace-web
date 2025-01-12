import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DepartmentListComponent} from './department-list.component';
import {provideRouter} from '@angular/router';
import {provideNzIconsTesting} from 'ng-zorro-antd/icon/testing';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentListComponent],
      providers: [provideRouter([]), provideNzIconsTesting()],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
