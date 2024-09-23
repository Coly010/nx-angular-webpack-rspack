import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib398Component } from './lib398.component';

describe('Lib398Component', () => {
  let component: Lib398Component;
  let fixture: ComponentFixture<Lib398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib398Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
