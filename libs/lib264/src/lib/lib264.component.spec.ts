import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib264Component } from './lib264.component';

describe('Lib264Component', () => {
  let component: Lib264Component;
  let fixture: ComponentFixture<Lib264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib264Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
