import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib778Component } from './lib778.component';

describe('Lib778Component', () => {
  let component: Lib778Component;
  let fixture: ComponentFixture<Lib778Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib778Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
