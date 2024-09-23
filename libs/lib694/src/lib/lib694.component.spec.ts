import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib694Component } from './lib694.component';

describe('Lib694Component', () => {
  let component: Lib694Component;
  let fixture: ComponentFixture<Lib694Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib694Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
