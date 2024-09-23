import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib440Component } from './lib440.component';

describe('Lib440Component', () => {
  let component: Lib440Component;
  let fixture: ComponentFixture<Lib440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib440Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
