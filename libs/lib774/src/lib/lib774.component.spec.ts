import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib774Component } from './lib774.component';

describe('Lib774Component', () => {
  let component: Lib774Component;
  let fixture: ComponentFixture<Lib774Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib774Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
