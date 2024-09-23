import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib169Component } from './lib169.component';

describe('Lib169Component', () => {
  let component: Lib169Component;
  let fixture: ComponentFixture<Lib169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib169Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
