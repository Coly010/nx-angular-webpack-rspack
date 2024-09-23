import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib119Component } from './lib119.component';

describe('Lib119Component', () => {
  let component: Lib119Component;
  let fixture: ComponentFixture<Lib119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib119Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
