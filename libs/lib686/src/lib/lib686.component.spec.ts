import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib686Component } from './lib686.component';

describe('Lib686Component', () => {
  let component: Lib686Component;
  let fixture: ComponentFixture<Lib686Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib686Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
