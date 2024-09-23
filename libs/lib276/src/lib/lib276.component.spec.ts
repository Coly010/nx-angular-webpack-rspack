import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib276Component } from './lib276.component';

describe('Lib276Component', () => {
  let component: Lib276Component;
  let fixture: ComponentFixture<Lib276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib276Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
