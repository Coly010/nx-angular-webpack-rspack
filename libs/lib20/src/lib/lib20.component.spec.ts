import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Component } from './lib20.component';

describe('Lib20Component', () => {
  let component: Lib20Component;
  let fixture: ComponentFixture<Lib20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
