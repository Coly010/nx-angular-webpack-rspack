import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib780Component } from './lib780.component';

describe('Lib780Component', () => {
  let component: Lib780Component;
  let fixture: ComponentFixture<Lib780Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib780Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
