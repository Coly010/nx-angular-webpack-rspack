import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib524Component } from './lib524.component';

describe('Lib524Component', () => {
  let component: Lib524Component;
  let fixture: ComponentFixture<Lib524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib524Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
