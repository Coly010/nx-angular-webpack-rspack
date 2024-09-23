import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib699Component } from './lib699.component';

describe('Lib699Component', () => {
  let component: Lib699Component;
  let fixture: ComponentFixture<Lib699Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib699Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
