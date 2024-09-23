import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib357Component } from './lib357.component';

describe('Lib357Component', () => {
  let component: Lib357Component;
  let fixture: ComponentFixture<Lib357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib357Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
