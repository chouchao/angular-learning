import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyOperatorsComponent } from './apply-operators.component';

describe('ApplyOperatorsComponent', () => {
  let component: ApplyOperatorsComponent;
  let fixture: ComponentFixture<ApplyOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
