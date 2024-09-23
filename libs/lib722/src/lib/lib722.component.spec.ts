import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib722Component } from './lib722.component';

describe('Lib722Component', () => {
  let component: Lib722Component;
  let fixture: ComponentFixture<Lib722Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib722Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
