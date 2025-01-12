import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutConnectedComponent} from './layout-connected.component';
import {provideRouter} from '@angular/router';
import {provideNzIconsTesting} from 'ng-zorro-antd/icon/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';

describe('LayoutConnectedComponent', () => {
  let component: LayoutConnectedComponent;
  let fixture: ComponentFixture<LayoutConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutConnectedComponent],
      providers: [provideRouter([]), provideNzIconsTesting(), provideNoopAnimations()],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
