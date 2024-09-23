import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib272Component } from './lib272.component';

describe('Lib272Component', () => {
  let component: Lib272Component;
  let fixture: ComponentFixture<Lib272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib272Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
