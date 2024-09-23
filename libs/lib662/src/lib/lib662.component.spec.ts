import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib662Component } from './lib662.component';

describe('Lib662Component', () => {
  let component: Lib662Component;
  let fixture: ComponentFixture<Lib662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib662Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
