import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib561Component } from './lib561.component';

describe('Lib561Component', () => {
  let component: Lib561Component;
  let fixture: ComponentFixture<Lib561Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib561Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
