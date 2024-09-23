import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib470Component } from './lib470.component';

describe('Lib470Component', () => {
  let component: Lib470Component;
  let fixture: ComponentFixture<Lib470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib470Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
