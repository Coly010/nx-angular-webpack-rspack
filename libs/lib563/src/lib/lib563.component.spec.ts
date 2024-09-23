import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib563Component } from './lib563.component';

describe('Lib563Component', () => {
  let component: Lib563Component;
  let fixture: ComponentFixture<Lib563Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib563Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
