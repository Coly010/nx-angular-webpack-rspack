import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib378Component } from './lib378.component';

describe('Lib378Component', () => {
  let component: Lib378Component;
  let fixture: ComponentFixture<Lib378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib378Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
