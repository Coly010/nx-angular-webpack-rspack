import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib382Component } from './lib382.component';

describe('Lib382Component', () => {
  let component: Lib382Component;
  let fixture: ComponentFixture<Lib382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib382Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
