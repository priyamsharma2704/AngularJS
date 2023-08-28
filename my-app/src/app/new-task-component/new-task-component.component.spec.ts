import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponentComponent } from './new-task-component.component';

describe('NewTaskComponentComponent', () => {
  let component: NewTaskComponentComponent;
  let fixture: ComponentFixture<NewTaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaskComponentComponent]
    });
    fixture = TestBed.createComponent(NewTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
