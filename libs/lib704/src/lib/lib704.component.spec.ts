import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib704Component } from './lib704.component';

describe('Lib704Component', () => {
  let component: Lib704Component;
  let fixture: ComponentFixture<Lib704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib704Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
