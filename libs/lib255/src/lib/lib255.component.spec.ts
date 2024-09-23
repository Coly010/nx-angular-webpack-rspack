import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib255Component } from './lib255.component';

describe('Lib255Component', () => {
  let component: Lib255Component;
  let fixture: ComponentFixture<Lib255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib255Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
