import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib665Component } from './lib665.component';

describe('Lib665Component', () => {
  let component: Lib665Component;
  let fixture: ComponentFixture<Lib665Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib665Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
