import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib267Component } from './lib267.component';

describe('Lib267Component', () => {
  let component: Lib267Component;
  let fixture: ComponentFixture<Lib267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib267Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
