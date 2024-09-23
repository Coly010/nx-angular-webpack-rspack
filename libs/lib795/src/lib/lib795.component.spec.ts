import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib795Component } from './lib795.component';

describe('Lib795Component', () => {
  let component: Lib795Component;
  let fixture: ComponentFixture<Lib795Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib795Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
