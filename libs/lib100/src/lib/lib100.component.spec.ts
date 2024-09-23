import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Component } from './lib100.component';

describe('Lib100Component', () => {
  let component: Lib100Component;
  let fixture: ComponentFixture<Lib100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib100Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
