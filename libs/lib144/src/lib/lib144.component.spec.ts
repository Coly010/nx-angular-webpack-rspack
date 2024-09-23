import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib144Component } from './lib144.component';

describe('Lib144Component', () => {
  let component: Lib144Component;
  let fixture: ComponentFixture<Lib144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib144Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
