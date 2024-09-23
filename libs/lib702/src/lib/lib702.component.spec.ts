import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib702Component } from './lib702.component';

describe('Lib702Component', () => {
  let component: Lib702Component;
  let fixture: ComponentFixture<Lib702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib702Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
