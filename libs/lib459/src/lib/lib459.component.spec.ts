import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib459Component } from './lib459.component';

describe('Lib459Component', () => {
  let component: Lib459Component;
  let fixture: ComponentFixture<Lib459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib459Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
