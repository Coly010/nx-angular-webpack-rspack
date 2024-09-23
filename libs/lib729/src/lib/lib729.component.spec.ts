import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib729Component } from './lib729.component';

describe('Lib729Component', () => {
  let component: Lib729Component;
  let fixture: ComponentFixture<Lib729Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib729Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
