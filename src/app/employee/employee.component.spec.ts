import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have name as test', () => {
    // component.name = 'test';
    // fixture.detectChanges();
    expect(component.name).toEqual('Test');
  });


  it('should change name to new name', () => {
    // component.name = 'test';
    // fixture.detectChanges();
    component.changeName();
    fixture.autoDetectChanges();
    expect(component.name).toEqual('Test2');
  });

});
