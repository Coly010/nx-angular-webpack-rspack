import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Component } from './lib67.component';

describe('Lib67Component', () => {
  let component: Lib67Component;
  let fixture: ComponentFixture<Lib67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib67Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
