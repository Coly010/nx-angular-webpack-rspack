import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib164Component } from './lib164.component';

describe('Lib164Component', () => {
  let component: Lib164Component;
  let fixture: ComponentFixture<Lib164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib164Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
