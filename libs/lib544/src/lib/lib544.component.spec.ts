import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib544Component } from './lib544.component';

describe('Lib544Component', () => {
  let component: Lib544Component;
  let fixture: ComponentFixture<Lib544Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib544Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
