import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib287Component } from './lib287.component';

describe('Lib287Component', () => {
  let component: Lib287Component;
  let fixture: ComponentFixture<Lib287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib287Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
