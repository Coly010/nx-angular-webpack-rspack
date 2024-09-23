import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib362Component } from './lib362.component';

describe('Lib362Component', () => {
  let component: Lib362Component;
  let fixture: ComponentFixture<Lib362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib362Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
