import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib304Component } from './lib304.component';

describe('Lib304Component', () => {
  let component: Lib304Component;
  let fixture: ComponentFixture<Lib304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib304Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
