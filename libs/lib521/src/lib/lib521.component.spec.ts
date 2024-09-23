import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib521Component } from './lib521.component';

describe('Lib521Component', () => {
  let component: Lib521Component;
  let fixture: ComponentFixture<Lib521Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib521Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
