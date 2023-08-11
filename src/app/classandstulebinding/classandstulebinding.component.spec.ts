import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassandstulebindingComponent } from './classandstulebinding.component';

describe('ClassandstulebindingComponent', () => {
  let component: ClassandstulebindingComponent;
  let fixture: ComponentFixture<ClassandstulebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassandstulebindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassandstulebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
