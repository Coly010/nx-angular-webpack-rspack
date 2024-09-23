import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib379Component } from './lib379.component';

describe('Lib379Component', () => {
  let component: Lib379Component;
  let fixture: ComponentFixture<Lib379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib379Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
